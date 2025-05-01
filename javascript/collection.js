// menu icon
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

// game filters
const sliders = document.querySelectorAll(
  ".collection-slider div:not(.slider-bg)"
);
const sliderBg = document.querySelector(".slider-bg");
const games = document.querySelectorAll(".games > div");

function moveBgToSlider(slider) {
  const sliderRect = slider.getBoundingClientRect();
  const parentRect = slider.parentElement.getBoundingClientRect();

  const extraPadding = 8;

  const left = sliderRect.left - parentRect.left - extraPadding / 2;
  const width = sliderRect.width + extraPadding;

  sliderBg.style.transform = `translateX(${left}px)`;
  sliderBg.style.width = `${width}px`;
}

const firstSlider = sliders[0];
firstSlider.classList.add("active");

moveBgToSlider(firstSlider);

sliders.forEach((slider) => {
  slider.addEventListener("click", () => {
    sliders.forEach((s) => s.classList.remove("active"));
    slider.classList.add("active");

    moveBgToSlider(slider);

    const filterText = slider.innerText.trim().toLowerCase();
    let filter = "";
    if (filterText.includes("all")) {
      filter = "all";
    } else if (filterText.includes("new")) {
      filter = "new";
    } else if (filterText.includes("top")) {
      filter = "top";
    }

    games.forEach((game) => {
      const tags = game.getAttribute("data-tag").toLowerCase().split(" ");

      if (filter === "all" || tags.includes(filter)) {
        game.style.display = "block";
        game.style.opacity = "1";
        game.style.transform = "translateY(0)";
      } else {
        game.style.display = "none";
        game.style.opacity = "0";
        game.style.transform = "translateY(20px)";
      }
    });
  });
});

// social links
const socialLinks = document.querySelectorAll(".social-link");
const ball = document.querySelector(".slider .ball");
let canClickLink = true;

socialLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    if (canClickLink) {
      event.preventDefault();

      canClickLink = false;

      const url = this.getAttribute("data-url");

      ball.style.transition = "none";
      ball.style.left = "0px";

      void ball.offsetWidth;

      setTimeout(() => {
        if (this.classList.contains("github")) {
          ball.style.left = "0px";
        } else if (this.classList.contains("twitter")) {
          ball.style.left = "23px";
        } else if (this.classList.contains("linkedin")) {
          ball.style.left = "46px";
        }

        ball.style.transition = "left 0.3s ease";
      }, 10);

      setTimeout(() => {
        window.open(url, "_blank");
        canClickLink = true;
      }, 300);
    }
  });
});
