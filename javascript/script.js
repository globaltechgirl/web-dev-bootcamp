// object movement
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

let angle = 0;

document.addEventListener("mousemove", parallax);

function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    const moving_value = move.getAttribute("data-value");
    const x = (e.clientX * moving_value) / 250;
    const y = (e.clientY * moving_value) / 250;

    move.dataset.mouseX = x;
    move.dataset.mouseY = y;
  });
}

function animateFloating() {
  angle += 0.02;

  document.querySelectorAll(".object").forEach(function (move) {
    const floatY = Math.sin(angle) * 10;
    const mouseX = parseFloat(move.dataset.mouseX || 0);
    const mouseY = parseFloat(move.dataset.mouseY || 0);

    move.style.transform = `translate(${mouseX}px, ${mouseY + floatY}px)`;
  });

  requestAnimationFrame(animateFloating);
}

animateFloating();

// dropdown menu
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menus = dropdown.querySelector(".menus");
  const options = dropdown.querySelectorAll(".menus li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menus.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menus.classList.remove("menu-open");

      options.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      // Filter logic
      const filter = option.innerText.toLowerCase();
      const gameItems = document.querySelectorAll(".games > div");

      gameItems.forEach((game) => {
        if (filter === "all") {
          game.style.display = "block";
        } else {
          if (game.dataset.tag === filter) {
            game.style.display = "block";
          } else {
            game.style.display = "none";
          }
        }
      });
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
