const menuIcons = document.querySelectorAll(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");

menuIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// menu filter
const menuOptions = document.querySelectorAll(".menu-collection .menus li");
const gameItems = document.querySelectorAll(".games > div");

menuOptions.forEach((option) => {
  option.addEventListener("click", () => {
    menuOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    const filter = option.innerText.toLowerCase();

    gameItems.forEach((game) => {
      const tag = game.dataset.tag || "all";

      if (filter === "all" || tag === filter) {
        game.style.display = "block";
      } else {
        game.style.display = "none";
      }
    });
  });
});
