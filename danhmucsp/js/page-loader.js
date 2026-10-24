window.addEventListener("load", () => {
  const pageLoader = document.querySelector(".page-loader");
  if (!pageLoader) return;

  pageLoader.classList.add("is-hidden");
  window.setTimeout(() => pageLoader.remove(), 350);
});
