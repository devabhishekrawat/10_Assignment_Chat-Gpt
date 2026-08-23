document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".sidebar__header .sidebar__actions .sidebar__icon-btn:nth-child(2)");

    if (sidebar && toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
        });
    }
});