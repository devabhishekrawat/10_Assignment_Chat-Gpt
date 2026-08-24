import state from "./data.js";
import { loadConversationsFromStorage } from "./chat.js";
import { renderConversation } from "./chat.js";

export function initSidebarControls(onSelectChat) {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");
    const newChatBtn = document.querySelector(".sidebar__new-chat");
    const headingBtn = document.querySelector(".sidebar__heading-btn");
    const chatList = document.getElementById("chats-list-container");

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
    console.log("this")
    const chatListContainer = document.getElementById("chats-list-container");
    if (!chatListContainer) return;

    chatListContainer.innerHTML = "";

    const userDataStr = sessionStorage.getItem("user");
    const user = userDataStr ? JSON.parse(userDataStr) : null;
    const isLoggedIn = user && user.isLoggedIn;

    if (!isLoggedIn) return;

    console.log(conversationsArray, "array")
    console.log(state.conversations, "con")
    const listToRender = conversationsArray || state.conversations;

    listToRender.forEach((chat) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("sidebar__chat-item");

        // Highlight active chat
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
}

export function handleChatSelection(chatId) {
    console.log("this")
    state.currentChatId = chatId;
    localStorage.setItem("activeChatId", chatId);


    // 2. Fetch directly from updated state array
    const conversation = state.conversations.find((c) => c.id === chatId);
    console.log(conversation)
    // 3. Render matching conversation
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

window.addEventListener("resize", () => {
    autoCloseSidebarOnMobile();
});