document.addEventListener("DOMContentLoaded", () => {
  const accountMenus = [...document.querySelectorAll(".account-menu")];

  accountMenus.forEach((accountMenu) => {
    const toggle = accountMenu.querySelector(".avatar-button");
    const form = accountMenu.querySelector(".login-popover");
    if (!toggle || !form) return;

    const setOpen = (isOpen) => {
      accountMenu.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    };

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      setOpen(!accountMenu.classList.contains("is-open"));
    });

    form.addEventListener("click", (event) => event.stopPropagation());

    document.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  });
});
