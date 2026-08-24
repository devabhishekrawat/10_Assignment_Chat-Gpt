let selectedFiles = [];

export function initChatInput() {
    const textarea = document.getElementById("chat-textarea");
    const actionBtn = document.querySelector(".msg-input__action-btn");
    const addBtn = document.querySelector(".msg-input__add-btn");

    let previewContainer = document.getElementById("file-preview-container");
    if (!previewContainer && textarea) {
        previewContainer = document.createElement("div");
        previewContainer.id = "file-preview-container";
        previewContainer.className = "file-preview-container";
        textarea.parentNode.insertBefore(previewContainer, textarea);
    }

    if (textarea) {
        textarea.addEventListener("input", () => {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
            updateActionIcon();
        });
    }

    if (addBtn) {
        let fileInput = document.getElementById("chat-file-input");
        if (!fileInput) {
            fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.id = "chat-file-input";
            fileInput.multiple = true;
            fileInput.style.display = "none";
            document.body.appendChild(fileInput);
        }

        addBtn.addEventListener("click", (e) => {
            e.preventDefault();
            fileInput.click();
        });

        fileInput.addEventListener("change", (e) => {
            const files = Array.from(e.target.files);
            if (files.length > 0) {
                selectedFiles = [...selectedFiles, ...files];
                renderFilePreviews();
                updateActionIcon();
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

function renderFilePreviews() {
    const previewContainer = document.getElementById("file-preview-container");
    if (!previewContainer) return;

    previewContainer.innerHTML = "";

    selectedFiles.forEach((file, index) => {
        const chip = document.createElement("div");
        chip.className = "file-preview-chip";
        chip.innerHTML = `
            <span class="file-preview-name">${file.name}</span>
            <button type="button" class="file-preview-remove" data-index="${index}">&times;</button>
        `;

        chip.querySelector(".file-preview-remove").addEventListener("click", (e) => {
            e.stopPropagation();
            selectedFiles.splice(index, 1);
            renderFilePreviews();
            updateActionIcon();
        });

        previewContainer.appendChild(chip);
    });
}

function updateActionIcon() {
    const textarea = document.getElementById("chat-textarea");
    const actionBtn = document.querySelector(".msg-input__action-btn");
    
    if (!actionBtn) return;
    const hasText = textarea ? textarea.value.trim().length > 0 : false;
    const hasFiles = selectedFiles.length > 0;
    const isActive = hasText || hasFiles;

    const img = actionBtn.querySelector("img");
    if (img) {
        img.src = isActive ? "./assets/send.svg" : "./assets/voice.svg";
        img.alt = isActive ? "send" : "voice";
    }
}

export function getSelectedFiles() {
    return selectedFiles;
}

export function resetChatInput() {
    const textarea = document.getElementById("chat-textarea");
    const actionBtn = document.querySelector(".msg-input__action-btn");
    const fileInput = document.getElementById("chat-file-input");

    selectedFiles = [];
    renderFilePreviews();

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

    if (fileInput) {
        fileInput.value = "";
    }
}