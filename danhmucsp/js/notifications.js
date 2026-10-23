document.addEventListener("DOMContentLoaded", () => {
  const purchaseNotifications = [
    ["Minh Anh", "iPhone 13 128GB", "2 phút trước"],
    ["Quốc Bảo", "MacBook Air M1", "8 phút trước"],
    ["Hà My", "Máy ảnh Sony A6000", "15 phút trước"],
    ["Tuấn Khang", "Bàn phím cơ Keychron K2", "12 phút trước"],
    ["Ngọc Linh", "Tai nghe Sony WH-1000XM4", "20 phút trước"],
    ["Hoàng Nam", "Xe đạp thể thao", "25 phút trước"],
    ["Phương Thảo", "Váy midi hoa vintage", "31 phút trước"],
    ["Đức Anh", "Máy xay sinh tố Philips", "42 phút trước"],
  ];

  const shuffledNotifications = [...purchaseNotifications].sort(() => Math.random() - 0.5);

  document.querySelectorAll(".notification-menu").forEach((notificationMenu) => {
    const toggle = notificationMenu.querySelector(".notification-button");
    const panel = notificationMenu.querySelector(".notification-popover");
    if (!toggle || !panel) return;

    const list = panel.querySelector(".notification-list");
    if (list) {
      list.replaceChildren(
        ...shuffledNotifications.slice(0, 3).map(([customer, product, time]) => {
          const item = document.createElement("div");
          item.className = "notification-item";
          item.innerHTML = `<span class="notification-item-icon">✓</span><p><strong>${customer}</strong> vừa mua <span>${product}</span><small>${time}</small></p>`;
          return item;
        }),
      );
    }

    const setOpen = (isOpen) => {
      notificationMenu.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    };

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      setOpen(!notificationMenu.classList.contains("is-open"));
    });

    panel.addEventListener("click", (event) => event.stopPropagation());
    document.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  });
});
