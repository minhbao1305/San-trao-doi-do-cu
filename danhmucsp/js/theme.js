(function () {
  const themeKey = "semper-theme";
  const savedTheme = localStorage.getItem(themeKey);
  const initialTheme =
    savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark-theme", isDark);
    document.documentElement.dataset.theme = theme;

    const themeToggle = document.querySelector("#theme-toggle-checkbox");
    if (themeToggle) {
      themeToggle.checked = isDark;
      themeToggle.setAttribute("aria-checked", String(isDark));
    }
  }

  applyTheme(initialTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#theme-toggle-checkbox");
    if (!themeToggle) return;

    themeToggle.addEventListener("change", () => {
      const nextTheme = themeToggle.checked ? "dark" : "light";
      applyTheme(nextTheme);
      localStorage.setItem(themeKey, nextTheme);
    });
  });
})();
