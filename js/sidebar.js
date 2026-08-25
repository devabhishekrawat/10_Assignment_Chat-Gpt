import state from "./data.js";
import { renderConversation } from "./chat.js";

function getChatCategory(createdAt) {
    const chatDate = new Date(createdAt);
    chatDate.setHours(0, 0, 0, 0);

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const yesterdayStart = new Date(todayStart);
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);

    const sevenDaysAgo = new Date(todayStart);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    if (chatDate >= todayStart) return "Today";
    if (chatDate >= yesterdayStart) return "Yesterday";
    if (chatDate >= sevenDaysAgo) return "Previous 7 Days";
    return "Older";
}

const CATEGORY_ORDER = ["Today", "Yesterday", "Previous 7 Days", "Older"];

export function initSidebarControls(onSelectChat) {
    const sidebar    = document.querySelector(".sidebar");
    const toggleBtn  = document.querySelector(".toggle-btn");
    const newChatBtn = document.querySelector(".sidebar__new-chat");
    const headingBtn = document.querySelector(".sidebar__heading-btn");
    const chatList   = document.getElementById("chats-list-container");

    if (headingBtn && chatList) {
        headingBtn.addEventListener("click", () => {
            chatList.classList.toggle("is-hidden");
            headingBtn.classList.toggle("is-collapsed");
        });
    }

    if (sidebar && toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
        });
    }

    if (newChatBtn) {
        newChatBtn.addEventListener("click", (e) => {
            e.preventDefault();
            onSelectChat("new");
        });
    }
}

export function renderChatList(conversationsArray, onSelectChat) {
    const chatListContainer = document.getElementById("chats-list-container");
    if (!chatListContainer) return;

    chatListContainer.innerHTML = "";

    const userDataStr = sessionStorage.getItem("user");
    const user        = userDataStr ? JSON.parse(userDataStr) : null;
    const isLoggedIn  = user && user.isLoggedIn;
    if (!isLoggedIn) return;

    const listToRender = conversationsArray || state.conversations;

    const sorted = [...listToRender].sort((a, b) => {
        return new Date(b.updatedAt ?? b.createdAt) - new Date(a.updatedAt ?? a.createdAt);
    });

    const groups = {};
    sorted.forEach((chat) => {
        const category = getChatCategory(chat.updatedAt ?? chat.createdAt);
        if (!groups[category]) groups[category] = [];
        groups[category].push(chat);
    });

    CATEGORY_ORDER.forEach((category) => {
        const chats = groups[category];
        if (!chats || chats.length === 0) return;

        const label = document.createElement("div");
        label.classList.add("sidebar__category-label");
        label.textContent = category;
        chatListContainer.appendChild(label);

        chats.forEach((chat) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("sidebar__chat-item");

            if (chat.id === state.currentChatId) {
                itemDiv.classList.add("is-active");
            }

            itemDiv.dataset.id = chat.id;

            const titleSpan = document.createElement("span");
            titleSpan.classList.add("sidebar__chat-title");
            titleSpan.textContent = chat.title || `Chat ${chat.id}`;

            itemDiv.appendChild(titleSpan);

            itemDiv.addEventListener("click", () => {
                onSelectChat(chat.id);
            });

            chatListContainer.appendChild(itemDiv);
        });
    });
}

export function handleChatSelection(chatId) {
    state.currentChatId = chatId;
    localStorage.setItem("activeChatId", chatId);

    const conversation = state.conversations.find((c) => c.id === chatId);
    if (conversation) {
        renderConversation(conversation);
    }
}

function autoCloseSidebarOnMobile() {
    const sidebar = document.querySelector(".sidebar");
    if (window.innerWidth <= 760 && sidebar) {
        sidebar.classList.add("collapsed");
    }
}

autoCloseSidebarOnMobile();
window.addEventListener("resize", autoCloseSidebarOnMobile);