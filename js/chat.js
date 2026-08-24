import { getRandomGreeting, mockResponses } from "./data.js";
import state from "./data.js";
import { renderChatList, handleChatSelection } from "./sidebar.js";
import { resetChatInput } from "./input.js";

const STORAGE_KEY = "chat_conversations";
const ACTIVE_CHAT_KEY = "activeChatId";

export function saveConversationsToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.conversations));
}

export function loadConversationsFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            state.conversations.length = 0;
            state.conversations.push(...parsed);
        } catch (e) {
            console.error("Failed to parse stored conversations:", e);
        }
    } else {
        if (state.conversations && state.conversations.length > 0) {
            saveConversationsToStorage();
        }
    }

    const activeId = localStorage.getItem(ACTIVE_CHAT_KEY);

    // If explicit "new_chat" stored or no ID exists, stay in New Chat state
    if (activeId === "new_chat" || !activeId) {
        state.currentChatId = null;
    } else if (state.conversations.some((c) => c.id === activeId)) {
        state.currentChatId = activeId;
    } else {
        state.currentChatId = null;
        localStorage.setItem(ACTIVE_CHAT_KEY, "new_chat");
    }
}

export function clearConversationsStorage() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ACTIVE_CHAT_KEY);
    state.conversations.length = 0;
    state.currentChatId = null;
}

// Initial load call
loadConversationsFromStorage();

const DEFAULT_RESPONSE = {
    blocks: [
        {
            type: "text",
            value: "I'm not sure I understand that yet. Could you rephrase or ask about another topic?"
        }
    ],
    topic: "default",
    index: 0
};

function normalizeText(text) {
    return text.toLowerCase().trim().replace(/[^\w\s]/g, "");
}

function findMatchingResponse(userInput) {
    const normalizedInput = normalizeText(userInput);
    const inputWords = normalizedInput.split(/\s+/);

    for (const topicGroup of mockResponses) {
        for (const keyword of topicGroup.keywords) {
            const normalizedKeyword = normalizeText(keyword);
            if (
                normalizedInput.includes(normalizedKeyword) ||
                inputWords.includes(normalizedKeyword)
            ) {
                const responses = topicGroup.responses;
                const randomIndex = Math.floor(Math.random() * responses.length);
                const selected = responses[randomIndex];

                let blocks = [];
                if (Array.isArray(selected)) {
                    blocks = selected;
                } else if (typeof selected === "object" && selected !== null) {
                    blocks = [selected];
                } else {
                    blocks = [{ type: "text", value: selected }];
                }

                return {
                    blocks,
                    topic: topicGroup.id || "general",
                    index: randomIndex
                };
            }
        }
    }

    return DEFAULT_RESPONSE;
}

function generateTitle(firstMessageContent) {
    const cleanText = firstMessageContent.trim();
    if (cleanText.length <= 35) return cleanText;
    return cleanText.substring(0, 35) + "...";
}

function getFormattedDate() {
    return new Date().toISOString().split("T")[0];
}

export function createNewChat() {
    state.currentChatId = null;
    state.isGenerating = false;

    // Save explicit "new_chat" flag so refreshes keep user on new chat page
    localStorage.setItem(ACTIVE_CHAT_KEY, "new_chat");

    document.querySelectorAll(".is-active, .active").forEach((el) => {
        el.classList.remove("is-active", "active");
    });

    const pencilBtn = document.querySelector('.sidebar__action-btn img[alt="new chat"]')?.parentElement;
    const newChatBtn = document.querySelector(".sidebar__new-chat");

    if (pencilBtn) pencilBtn.classList.add("is-active");
    if (newChatBtn) newChatBtn.classList.add("is-active");

    renderGreeting();
}

// Auth Reset Handlers (Call these on login/logout)
export function handleUserLogout() {
    createNewChat();
    renderChatList(state.conversations, handleChatSelection);
}

export function handleUserLogin() {
    createNewChat();
    renderChatList(state.conversations, handleChatSelection);
}

export function handleSendMessage(inputContent, isLoggedIn = false) {
    if (!inputContent || !inputContent.trim() || state.isGenerating) return;

    state.isGenerating = true;
    const todayDate = getFormattedDate();

    const userMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content: inputContent,
        createdAt: todayDate
    };

    const match = findMatchingResponse(inputContent);

    const assistantMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: match.blocks,
        responseType: match.topic,
        responseIndex: match.index,
        feedback: null,
        createdAt: todayDate
    };

    let currentConversation = state.conversations.find(
        (c) => c.id === state.currentChatId
    );

    if (!currentConversation) {
        const newChatId = crypto.randomUUID();
        currentConversation = {
            id: newChatId,
            title: generateTitle(inputContent),
            createdAt: todayDate,
            updatedAt: todayDate,
            messages: [userMessage, assistantMessage]
        };

        state.conversations.push(currentConversation);
        state.currentChatId = newChatId;
        localStorage.setItem(ACTIVE_CHAT_KEY, newChatId);
        renderChatList(state.conversations, handleChatSelection);
    } else {
        currentConversation.messages.push(userMessage, assistantMessage);
        currentConversation.updatedAt = todayDate;
    }

    saveConversationsToStorage();

    state.isGenerating = false;
    renderConversation(currentConversation);
    resetChatInput();
    return currentConversation;
}

function regenerateLastResponse(msgObj) {
    let topicGroup = mockResponses.find(
        (t) => t.id === msgObj.responseType || t.topic === msgObj.responseType
    );

    if (!topicGroup || !topicGroup.responses || !topicGroup.responses.length) {
        topicGroup = mockResponses[0];
    }

    if (!topicGroup || !topicGroup.responses.length) return;

    const responses = topicGroup.responses;
    const currentIndex = typeof msgObj.responseIndex === "number" ? msgObj.responseIndex : 0;
    let nextIndex = (currentIndex + 1) % responses.length;
    const selected = responses[nextIndex];

    let blocks = [];
    if (Array.isArray(selected)) {
        blocks = selected;
    } else if (typeof selected === "object" && selected !== null) {
        blocks = [selected];
    } else {
        blocks = [{ type: "text", value: selected }];
    }

    msgObj.content = blocks;
    msgObj.responseIndex = nextIndex;
    msgObj.responseType = topicGroup.id || topicGroup.topic;

    saveConversationsToStorage();

    const currentConversation = state.conversations.find((c) => c.id === state.currentChatId);
    if (currentConversation) {
        renderConversation(currentConversation);
    }
}

function extractMessagePlainText(content) {
    if (typeof content === "string") return content;
    if (!Array.isArray(content)) return "";
    return content
        .map((block) => block.value || block.text || block.content || (block.items ? block.items.join("\n") : ""))
        .filter(Boolean)
        .join("\n");
}

function createMessageActionsBar(msgObj) {
    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("chat__actions");

    const copyBtn = document.createElement("button");
    copyBtn.classList.add("chat__action-btn");
    copyBtn.title = "Copy";
    copyBtn.innerHTML = `<img class="img-color res-icons" src="./assets/copy.svg" alt="Copy" class="chat__action-icon" />`;
    copyBtn.addEventListener("click", () => {
        const textToCopy = extractMessagePlainText(msgObj.content);
        navigator.clipboard.writeText(textToCopy);
        const img = copyBtn.querySelector("img");
        if (img) img.src = "./assets/check-check.svg";
        setTimeout(() => {
            if (img) img.src = "./assets/copy.svg";
        }, 1500);
    });

    const feedbackWrap = document.createElement("div");
    feedbackWrap.classList.add("chat__feedback-wrapper");

    const feedbackBtn = document.createElement("button");
    feedbackBtn.classList.add("chat__action-btn");
    feedbackBtn.title = "Rate response";

    const feedbackImgSrc = msgObj.feedback === "like"
        ? "./assets/thumbs-up.svg"
        : msgObj.feedback === "dislike"
            ? "./assets/thumbs-down.svg"
            : "./assets/thumbs-up.svg";

    feedbackBtn.innerHTML = `<img class="res-icons" src="${feedbackImgSrc}" alt="Feedback" class="chat__action-icon" />`;

    const modal = document.createElement("div");
    modal.classList.add("chat__feedback-modal");
    modal.style.display = "none";

    const likeOpt = document.createElement("button");
    likeOpt.classList.add("chat__action-btn");
    likeOpt.innerHTML = `<img class="res-icons" src="./assets/thumbs-up.svg" alt="Like" class="chat__action-icon" />`;
    likeOpt.addEventListener("click", (e) => {
        e.stopPropagation();
        msgObj.feedback = "like";
        saveConversationsToStorage();
        const img = feedbackBtn.querySelector("img");
        if (img) img.src = "./assets/thumbs-up.svg";
        modal.style.display = "none";
    });

    const dislikeOpt = document.createElement("button");
    dislikeOpt.classList.add("chat__action-btn");
    dislikeOpt.innerHTML = `<img class="res-icons" src="./assets/thumbs-down.svg" alt="Dislike" class="chat__action-icon" />`;
    dislikeOpt.addEventListener("click", (e) => {
        e.stopPropagation();
        msgObj.feedback = "dislike";
        saveConversationsToStorage();
        const img = feedbackBtn.querySelector("img");
        if (img) img.src = "./assets/thumbs-down.svg";
        modal.style.display = "none";
    });

    modal.appendChild(likeOpt);
    modal.appendChild(dislikeOpt);

    feedbackBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        modal.style.display = modal.style.display === "none" ? "flex" : "none";
    });

    document.addEventListener("click", () => {
        modal.style.display = "none";
    });

    feedbackWrap.appendChild(feedbackBtn);
    feedbackWrap.appendChild(modal);

    const shareBtn = document.createElement("button");
    shareBtn.classList.add("chat__action-btn");
    shareBtn.title = "Share";
    shareBtn.innerHTML = `<img class="res-icons" src="./assets/share.svg" alt="Share" class="chat__action-icon" />`;

    const regenBtn = document.createElement("button");
    regenBtn.classList.add("chat__action-btn");
    regenBtn.title = "Regenerate";
    regenBtn.innerHTML = `<img class="res-icons" src="./assets/refresh-cw.svg" alt="Regenerate" class="chat__action-icon" />`;
    regenBtn.addEventListener("click", () => {
        regenerateLastResponse(msgObj);
    });

    const moreBtn = document.createElement("button");
    moreBtn.classList.add("chat__action-btn");
    moreBtn.title = "More";
    moreBtn.innerHTML = `<img class="res-icons img-color" src="./assets/dots.svg" alt="More" class="chat__action-icon" />`;

    actionsContainer.appendChild(copyBtn);
    actionsContainer.appendChild(feedbackWrap);
    actionsContainer.appendChild(shareBtn);
    actionsContainer.appendChild(regenBtn);
    actionsContainer.appendChild(moreBtn);

    return actionsContainer;
}

function createCodeBlock(block) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("code-block");

    const header = document.createElement("div");
    header.classList.add("code-block__header");

    const langLabel = document.createElement("span");
    langLabel.textContent = block.language || "code";

    const copyBtn = document.createElement("button");
    copyBtn.classList.add("code-block__copy");
    copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i><span>Copy</span>`;
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(block.value || block.content || "");
        copyBtn.innerHTML = `<i class="fa-solid fa-check"></i><span>Copied</span>`;
        setTimeout(() => {
            copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i><span>Copy</span>`;
        }, 1500);
    });

    header.appendChild(langLabel);
    header.appendChild(copyBtn);

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = block.value || block.content || "";
    pre.appendChild(code);

    wrapper.appendChild(header);
    wrapper.appendChild(pre);

    return wrapper;
}

function createList(block) {
    const list = document.createElement(block.style === "ordered" ? "ol" : "ul");
    (block.items || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
    return list;
}

function createTable(block) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");

    (block.headers || []).forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    (block.rows || []).forEach((row) => {
        const tr = document.createElement("tr");
        row.forEach((cell) => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table;
}

function createLink(block) {
    const a = document.createElement("a");
    a.href = block.href || block.url || "#";
    a.textContent = block.text || block.href || block.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
}

function renderContentBlocks(contentArray) {
    const fragment = document.createDocumentFragment();

    contentArray.forEach((block) => {
        if (block.type === "text") {
            const p = document.createElement("p");
            p.textContent = block.value || block.text || block.content || "";
            fragment.appendChild(p);
        } else if (block.type === "code") {
            fragment.appendChild(createCodeBlock(block));
        } else if (block.type === "list") {
            fragment.appendChild(createList(block));
        } else if (block.type === "table") {
            fragment.appendChild(createTable(block));
        } else if (block.type === "link") {
            fragment.appendChild(createLink(block));
        }
    });

    return fragment;
}

export function renderConversation(conversationObj) {
    const pencilBtn = document.querySelector('.sidebar__action-btn img[alt="new chat"]')?.parentElement;
    const newChatBtn = document.querySelector(".sidebar__new-chat");

    if (pencilBtn) pencilBtn.classList.remove("is-active", "active");
    if (newChatBtn) newChatBtn.classList.remove("is-active", "active");

    const mainChat = document.getElementById("main-chat");
    if (mainChat) mainChat.classList.remove("chat--empty");

    const chatContent = document.getElementById("chat-content-container");
    const messagesContainer = document.getElementById("chat-messages-container");
    const chatSuggestions = document.getElementById("chat-suggestions");

    if (chatSuggestions) chatSuggestions.style.display = "none";

    if (messagesContainer) {
        messagesContainer.innerHTML = "";

        conversationObj.messages.forEach((msg) => {
            const msgWrapper = document.createElement("div");
            msgWrapper.classList.add(
                "chat__message",
                msg.role === "user" ? "chat__message--user" : "chat__message--assistant"
            );

            const bubble = document.createElement("div");
            bubble.classList.add("chat__bubble");

            if (Array.isArray(msg.content)) {
                bubble.appendChild(renderContentBlocks(msg.content));
            } else if (typeof msg.content === "object" && msg.content !== null) {
                bubble.appendChild(renderContentBlocks([msg.content]));
            } else {
                const p = document.createElement("p");
                p.textContent = msg.content;
                bubble.appendChild(p);
            }

            msgWrapper.appendChild(bubble);

            if (msg.role === "assistant") {
                msgWrapper.appendChild(createMessageActionsBar(msg));
            }

            messagesContainer.appendChild(msgWrapper);
        });

        if (chatContent) {
            requestAnimationFrame(() => {
                chatContent.scrollTop = chatContent.scrollHeight;
            });
        }
    }
}

export function renderGreeting() {
    const mainChat = document.getElementById("main-chat");
    if (mainChat) mainChat.classList.add("chat--empty");

    const greetingElement = document.querySelector(".chat__greeting");
    const messagesContainer = document.getElementById("chat-messages-container");
    const chatSuggestions = document.getElementById("chat-suggestions");

    if (greetingElement) {
        greetingElement.textContent = getRandomGreeting();
    }

    if (chatSuggestions) chatSuggestions.style.display = "flex";

    if (messagesContainer) {
        messagesContainer.innerHTML = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const pencilBtn = document.querySelector('.sidebar__action-btn img[alt="new chat"]')?.parentElement;
    if (pencilBtn) {
        pencilBtn.addEventListener("click", createNewChat);
    }

    const newChatBtn = document.querySelector(".sidebar__new-chat");
    if (newChatBtn) {
        newChatBtn.addEventListener("click", createNewChat);
    }
});