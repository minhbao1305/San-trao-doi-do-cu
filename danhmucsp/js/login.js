(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const avatarButtons = document.querySelectorAll(".avatar-button");

    avatarButtons.forEach((avatarButton) => {
      const loginPanel = avatarButton.parentElement.querySelector(".login-panel");
      if (!loginPanel) return;

      const closePanel = () => {
        loginPanel.hidden = true;
        avatarButton.setAttribute("aria-expanded", "false");
      };

      avatarButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = !loginPanel.hidden;
        loginPanel.hidden = isOpen;
        avatarButton.setAttribute("aria-expanded", String(!isOpen));
        if (!isOpen) {
          loginPanel.querySelector("input")?.focus();
        }
      });

      loginPanel.addEventListener("click", (event) => event.stopPropagation());
      document.addEventListener("click", closePanel);
      loginPanel.querySelector("form")?.addEventListener("submit", (event) => {
        event.preventDefault();
        closePanel();
      });
    });
  });
})();
