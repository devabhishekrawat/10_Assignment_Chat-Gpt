export function initChatInput() {
    const textarea = document.getElementById("chat-textarea");
    const actionBtn = document.querySelector(".msg-input__action-btn");

    if (textarea) {
        textarea.addEventListener("input", () => {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;

            const hasText = textarea.value.trim().length > 0;
            if (actionBtn) {
                const img = actionBtn.querySelector("img");
                if (img) {
                    img.src = hasText ? "./assets/send.svg" : "./assets/voice.svg";
                    img.alt = hasText ? "send" : "voice";
                }
            }
        });
    }

    const triggerBtn = document.getElementById("model-selector-btn");
    const dropdown = document.getElementById("model-dropdown");
    const selectedText = document.getElementById("selected-model-text");
    const modelItems = document.querySelectorAll(".model-dropdown__item");

    if (triggerBtn && dropdown) {
        triggerBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.classList.toggle("is-hidden");
        });

        modelItems.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                const modelName = item.dataset.name;

                if (selectedText) {
                    selectedText.textContent = modelName;
                }

                modelItems.forEach((el) => el.classList.remove("is-active"));
                item.classList.add("is-active");
                dropdown.classList.add("is-hidden");
            });
        });

        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target) && !triggerBtn.contains(e.target)) {
                dropdown.classList.add("is-hidden");
            }
        });
    }
}

export function resetChatInput() {
    const textarea = document.getElementById("chat-textarea");
    const actionBtn = document.querySelector(".msg-input__action-btn");

    if (textarea) {
        textarea.value = "";
        textarea.style.height = "auto";
    }

    if (actionBtn) {
        const img = actionBtn.querySelector("img");
        if (img) {
            img.src = "./assets/voice.svg";
            img.alt = "voice";
        }
    }
}