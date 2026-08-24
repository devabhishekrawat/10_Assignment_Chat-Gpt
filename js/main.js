import state from "./data.js";
import { setupAuthListeners, renderUserProfile } from "./auth.js";
import { initSidebarControls, renderChatList } from "./sidebar.js";
import { renderConversation, renderGreeting, handleSendMessage, loadConversationsFromStorage } from "./chat.js";
import { initChatInput } from "./input.js";

const chatInput = document.querySelector(".msg-input__control");
const sendBtn = document.querySelector(".msg-input__action-btn");
const isLoggedIn = false;

function sendMessage() {
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;

    handleSendMessage(text, isLoggedIn);
    chatInput.value = "";
}

if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
}

if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}

function initTheme() {
    const savedTheme = localStorage.getItem("appTheme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
    }
}

function setActiveChat(chatId) {
    document.querySelectorAll(".sidebar__chat-item").forEach((item) => {
        item.classList.toggle("active", item.dataset.id == chatId);
    });

    if (chatId === "new" || !chatId) {
        state.currentChatId = null;
        localStorage.setItem("activeChatId", "new_chat");
        renderGreeting();
    } else {
        const selectedChat = state.conversations.find((c) => c.id == chatId);
        if (selectedChat) {
            state.currentChatId = selectedChat.id;
            localStorage.setItem("activeChatId", chatId);
            renderConversation(selectedChat);
        }
    }
}

function initApp() {
    initTheme();
    initChatInput();
    loadConversationsFromStorage();

    const handleAuthChange = () => {
        renderUserProfile(handleAuthChange);
        renderChatList(state.conversations, (chatId) => setActiveChat(chatId));
    };

    setupAuthListeners(handleAuthChange);
    renderUserProfile(handleAuthChange);

    initSidebarControls((chatId) => {
        setActiveChat(chatId);
    });

    renderChatList(state.conversations, (chatId) => {
        setActiveChat(chatId);
    });

    const savedChatId = localStorage.getItem("activeChatId");
    if (savedChatId && savedChatId !== "new_chat" && savedChatId !== "new") {
        const existingChat = state.conversations.find((c) => c.id == savedChatId);
        if (existingChat) {
            setActiveChat(savedChatId);
            return;
        }
    }
        setActiveChat("new");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

// Modal Search Logic
const searchModal = document.getElementById("searchModal");
const searchModalOverlay = document.getElementById("searchModalOverlay");
const searchModalClose = document.getElementById("searchModalClose");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchEmptyState = document.getElementById("searchEmptyState");
const openSearchBtns = document.querySelectorAll(".search-btn");

function renderResults(filteredConversations) {
    if (!searchResults) return;
    searchResults.innerHTML = "";

    if (filteredConversations.length === 0) {
        if (searchEmptyState) searchEmptyState.style.display = "block";
        return;
    }

    if (searchEmptyState) searchEmptyState.style.display = "none";

    filteredConversations.forEach((conv) => {
        const lastUserMessage = conv.messages
            ?.filter((m) => m.role === "user")
            .pop()?.content;

        const resultItem = document.createElement("div");
        resultItem.className = "search-modal__item";
        resultItem.setAttribute("tabindex", "0");
        resultItem.dataset.id = conv.id;

        resultItem.innerHTML = `
            <div class="search-modal__item-title">${conv.title}</div>
            ${
                lastUserMessage
                    ? `<div class="search-modal__item-preview">${lastUserMessage}</div>`
                    : ""
            }
        `;

        resultItem.addEventListener("click", () => {
            openConversation(conv.id);
            closeModal();
        });

        searchResults.appendChild(resultItem);
    });
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();

    const filtered = state.conversations.filter((conv) => {
        const matchesTitle = conv.title.toLowerCase().includes(query);

        const matchesMessages = conv.messages.some((msg) => {
            if (typeof msg.content === "string") {
                return msg.content.toLowerCase().includes(query);
            }
            if (Array.isArray(msg.content)) {
                return msg.content.some(
                    (block) => block.value && block.value.toLowerCase().includes(query)
                );
            }
            return false;
        });

        return matchesTitle || matchesMessages;
    });

    renderResults(filtered);
}

function openConversation(id) {
    setActiveChat(id);
}

function openModal() {
    if (!searchModal) return;
    searchModal.classList.add("search-modal--open");
    searchModal.setAttribute("aria-hidden", "false");
    renderResults(state.conversations);
    setTimeout(() => searchInput && searchInput.focus(), 50);
}

function closeModal() {
    if (!searchModal) return;
    searchModal.classList.remove("search-modal--open");
    searchModal.setAttribute("aria-hidden", "true");
    if (searchInput) searchInput.value = "";
}

openSearchBtns.forEach((btn) => btn.addEventListener("click", openModal));
if (searchModalOverlay) searchModalOverlay.addEventListener("click", closeModal);
if (searchModalClose) searchModalClose.addEventListener("click", closeModal);
if (searchInput) searchInput.addEventListener("input", handleSearch);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchModal?.classList.contains("search-modal--open")) {
        closeModal();
    }
});