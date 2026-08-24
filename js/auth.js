import { getRandomGreeting } from "./data.js";
import { clearConversationsStorage, createNewChat } from "./chat.js";
import { renderChatList } from "./sidebar.js";

export const STATIC_USER = {
    email: "admin@example.com",
    password: "admin@123",
    name: "Abhishek Rawat",
    plan: "Free",
    isLoggedIn: true
};

export function openLoginModal() {
    const modal = document.getElementById("login-modal");
    if (modal) modal.classList.remove("is-hidden");
}

export function closeLoginModal() {
    const modal = document.getElementById("login-modal");
    const loginError = document.getElementById("login-error");
    const loginForm = document.getElementById("login-form");

    if (modal) modal.classList.add("is-hidden");
    if (loginError) loginError.classList.add("is-hidden");
    if (loginForm) loginForm.reset();
}

export function setupAuthListeners(onAuthChange) {
    const closeBtn = document.getElementById("close-modal-btn");
    const loginModal = document.getElementById("login-modal");
    const loginForm = document.getElementById("login-form");

    if (closeBtn) closeBtn.addEventListener("click", closeLoginModal);

    if (loginModal) {
        loginModal.addEventListener("click", (e) => {
            if (e.target === loginModal) closeLoginModal();
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("email").value.trim();
            const passwordInput = document.getElementById("password").value.trim();
            const loginError = document.getElementById("login-error");

            if (emailInput === STATIC_USER.email && passwordInput === STATIC_USER.password) {
                sessionStorage.setItem("user", JSON.stringify({
                    isLoggedIn: true,
                    name: STATIC_USER.name,
                    plan: STATIC_USER.plan
                }));

                closeLoginModal();
                if (onAuthChange) onAuthChange();
            } else if (loginError) {
                loginError.classList.remove("is-hidden");
            }
        });
    }
}

export function renderUserProfile(onAuthChange) {
    const sidebarFooter = document.querySelector(".sidebar__footer");
    if (!sidebarFooter) return;

    const userDataStr = sessionStorage.getItem("user");
    const user = userDataStr ? JSON.parse(userDataStr) : null;
    const isLoggedIn = user && user.isLoggedIn;

    if (isLoggedIn) {
        const userName = user.name || "Abhishek Rawat";
        const userEmail = user.email || "admin@example.com";
        const userPlan = user.plan || "Free";
        const initials = userName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

        sidebarFooter.innerHTML = `
            <div class="user-profile-wrapper" id="user-profile-wrapper">
                <div class="user-profile" id="user-profile-trigger">
                    <div class="user-profile__avatar">${initials}</div>
                    <div class="user-profile__info">
                        <span class="user-profile__name">${userName}</span>
                        <span class="user-profile__plan">${userPlan}</span>
                    </div>
                </div>

                <div class="profile-popover is-hidden" id="profile-popover">
                    <div class="profile-popover__menu">
                        <button type="button" class="profile-popover__item" data-action="general">
                            <img class="img-color" src="./assets/settings.svg" alt="General">
                            <span>General</span>
                        </button>
                        <div class="profile-popover__submenu-wrapper">
                            <button type="button" class="profile-popover__item profile-popover__item--has-arrow">
                                <div class="profile-popover__item-left">
                                    <img class="img-color" src="./assets/sun-moon.svg" alt="Appearance">
                                    <span>Appearance</span>
                                </div>
                                <i class="fa-solid fa-chevron-right profile-popover__arrow"></i>
                            </button>
                            <div class="profile-popover__submenu">
                                <button type="button" class="profile-popover__subitem" id="theme-dark-btn">
                                    <i class="fa-solid fa-moon"></i>
                                    <span>Dark Theme</span>
                                </button>
                                <button type="button" class="profile-popover__subitem" id="theme-light-btn">
                                    <i class="fa-solid fa-sun"></i>
                                    <span>Light Theme</span>
                                </button>
                            </div>
                        </div>
                        <button type="button" class="profile-popover__item" data-action="profile">
                            <img class="img-color" src="./assets/user.svg" alt="Profile">
                            <span>Profile</span>
                        </button>
                        <button type="button" class="profile-popover__item" data-action="notifications">
                            <img class="img-color" src="./assets/bell.svg" alt="Notifications">
                            <span>Notifications</span>
                        </button>
                    </div>

                    <div class="profile-popover__divider"></div>

                    <div class="profile-popover__menu">
                        <button type="button" class="profile-popover__item" data-action="shortcuts">
                            <img class="img-color" src="./assets/keyboard.svg" alt="Keyboard shortcuts">
                            <span>Keyboard shortcuts</span>
                        </button>
                        <button type="button" class="profile-popover__item" id="logout-btn">
                            <img class="img-color" src="./assets/log-out.svg" alt="Log out">
                            <span>Log out</span>
                        </button>
                    </div>
                </div>
            </div>

            <button class="sidebar__offer-btn">
                <img class="img-color" src="./assets/gift.svg" alt="Claim Offer">
                <span>Claim offer</span>
            </button>
        `;

        setupProfilePopover(userName, userEmail, onAuthChange);
    } else {
        sidebarFooter.innerHTML = `
            <button class="sidebar__login-btn" id="sidebar-login-btn" type="button">
                <span>Log in</span>
            </button>
        `;

        const loginBtn = document.getElementById("sidebar-login-btn");
        if (loginBtn) loginBtn.addEventListener("click", openLoginModal);
    }
}

function setupProfilePopover(userName, userEmail, onAuthChange) {
    const trigger = document.getElementById("user-profile-trigger");
    const popover = document.getElementById("profile-popover");
    const logoutBtn = document.getElementById("logout-btn");

    if (trigger && popover) {
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            const isHidden = popover.classList.contains("is-hidden");

            if (isHidden) {
                const rect = trigger.getBoundingClientRect();
                popover.style.left = `${rect.left}px`;
                popover.style.bottom = `${window.innerHeight - rect.top + 8}px`;

                const currentTheme = localStorage.getItem("appTheme") || "dark";
                document.getElementById("theme-dark-btn")?.classList.toggle("is-active", currentTheme === "dark");
                document.getElementById("theme-light-btn")?.classList.toggle("is-active", currentTheme === "light");

                popover.classList.remove("is-hidden");
            } else {
                popover.classList.add("is-hidden");
            }
        });

        document.addEventListener("click", (e) => {
            if (!popover.contains(e.target) && !trigger.contains(e.target)) {
                popover.classList.add("is-hidden");
            }
        });
    }

    document.querySelectorAll(".profile-popover__item[data-action]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (popover) popover.classList.add("is-hidden");
            openAppModal(action, userName, userEmail);
        });
    });

    const darkBtn = document.getElementById("theme-dark-btn");
    const lightBtn = document.getElementById("theme-light-btn");

    if (darkBtn) {
        darkBtn.addEventListener("click", () => {
            document.body.classList.remove("light-theme");
            localStorage.setItem("appTheme", "dark");
            if (popover) popover.classList.add("is-hidden");
        });
    }

    if (lightBtn) {
        lightBtn.addEventListener("click", () => {
            document.body.classList.add("light-theme");
            localStorage.setItem("appTheme", "light");
            if (popover) popover.classList.add("is-hidden");
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            handleLogout();
            if (onAuthChange) onAuthChange();
        });
    }
}

function openAppModal(type, userName, userEmail) {
    const overlay = document.getElementById("app-modal-overlay");
    const container = document.getElementById("modal-dynamic-content");
    const closeBtn = document.getElementById("close-app-modal");

    if (!overlay || !container) return;

    const initials = userName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    let htmlContent = "";

    if (type === "general") {
        htmlContent = `
            <h2 class="modal__title">General Settings</h2>
            <p class="modal__subtitle">Manage workspace defaults and system performance.</p>
            <div class="modal__setting-row">
                <div>
                    <span class="setting-title">Language</span>
                    <span class="setting-desc">Select system display language</span>
                </div>
                <select class="form-control-sm"><option>English (US)</option><option>Spanish</option></select>
            </div>
            <div class="modal__setting-row">
                <div>
                    <span class="setting-title">Archived Chats</span>
                    <span class="setting-desc">View and manage your saved chats</span>
                </div>
                <button class="btn-secondary-sm">Manage</button>
            </div>
            <div class="modal__setting-row">
                <div>
                    <span class="setting-title">Code Formatting</span>
                    <span class="setting-desc">Auto-highlight code blocks</span>
                </div>
                <input type="checkbox" checked />
            </div>
        `;
    } else if (type === "profile") {
        htmlContent = `
            <h2 class="modal__title">User Profile</h2>
            <p class="modal__subtitle">Manage your personal account credentials.</p>
            <div class="profile-modal-avatar">
                <div class="profile-modal-avatar__circle">${initials}</div>
                <div>
                    <button class="btn-secondary-sm">Upload New Picture</button>
                </div>
            </div>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control" value="${userName}" />
            </div>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control" value="${userEmail}" readonly />
            </div>
            <button class="btn-submit" style="margin-top: 1rem;">Save Changes</button>
        `;
    } else if (type === "notifications") {
        htmlContent = `
            <h2 class="modal__title">Notification Settings</h2>
            <p class="modal__subtitle">Choose how you want to be notified.</p>
            <div class="modal__setting-row">
                <div>
                    <span class="setting-title">Email Digest</span>
                    <span class="setting-desc">Weekly summary of activity</span>
                </div>
                <input type="checkbox" checked />
            </div>
            <div class="modal__setting-row">
                <div>
                    <span class="setting-title">Desktop Alerts</span>
                    <span class="setting-desc">Real-time web browser alerts</span>
                </div>
                <input type="checkbox" checked />
            </div>
            <div class="modal__setting-row">
                <div>
                    <span class="setting-title">Sound Effects</span>
                    <span class="setting-desc">Play sound on new response</span>
                </div>
                <input type="checkbox" />
            </div>
        `;
    } else if (type === "shortcuts") {
        htmlContent = `
            <h2 class="modal__title">Keyboard Shortcuts</h2>
            <p class="modal__subtitle">Quick key combinations for fast navigation.</p>
            <div class="shortcuts-list">
                <div class="shortcut-item"><span>New Chat</span><kbd>Ctrl + Shift + O</kbd></div>
                <div class="shortcut-item"><span>Toggle Sidebar</span><kbd>Ctrl + Shift + S</kbd></div>
                <div class="shortcut-item"><span>Copy Last Response</span><kbd>Ctrl + Shift + C</kbd></div>
                <div class="shortcut-item"><span>Open Settings</span><kbd>Ctrl + ,</kbd></div>
            </div>
        `;
    }

    container.innerHTML = htmlContent;
    overlay.classList.remove("is-hidden");

    if (closeBtn) {
        closeBtn.onclick = () => overlay.classList.add("is-hidden");
    }

    overlay.onclick = (e) => {
        if (e.target === overlay) overlay.classList.add("is-hidden");
    };
}

function handleLogout() {
    sessionStorage.removeItem("user");
    clearConversationsStorage();
    createNewChat();
    renderUserProfile();
    renderChatList([], null);
}