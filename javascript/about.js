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

// object movement
let angle = 0;

document.addEventListener("mousemove", parallax);

function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    const moving_value = move.getAttribute("data-value");
    const x = (e.clientX * moving_value) / 1500;
    const y = (e.clientY * moving_value) / 1500;

    move.dataset.mouseX = x;
    move.dataset.mouseY = y;
  });
}

function animateFloating() {
  angle += 0.02;

  document.querySelectorAll(".object").forEach(function (move) {
    move.currentX = move.currentX || 0;
    move.currentY = move.currentY || 0;

    const targetX = parseFloat(move.dataset.mouseX || 0);
    const targetY = parseFloat(move.dataset.mouseY || 0);

    move.currentX += (targetX - move.currentX) * 0.03;
    move.currentY += (targetY - move.currentY) * 0.03;

    const floatY = Math.sin(angle) * 10;
    move.style.transform = `translate(${move.currentX}px, ${
      move.currentY + floatY
    }px)`;
  });

  requestAnimationFrame(animateFloating);
}

animateFloating();

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
