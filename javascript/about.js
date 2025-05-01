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

// location display
const digits = document.querySelectorAll(".digit");

digits.forEach((digit, index) => {
  const finalValue = digit.getAttribute("data-final");
  let scrollCount = 0;
  const characters = "0123456789.,°NSEW";
  const interval = setInterval(() => {
    digit.textContent =
      characters[Math.floor(Math.random() * characters.length)];
    scrollCount++;

    if (scrollCount > 10 + index * 2) {
      clearInterval(interval);
      digit.textContent = finalValue;
    }
  }, 50);
});

// copy email
document.getElementById("copyEmail").addEventListener("click", function () {
  const email = "globaltechiegirl@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const textElement = document.getElementById("copyText");
    textElement.textContent = "Copied";

    setTimeout(() => {
      textElement.textContent = "Copy Email";
    }, 2000);
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
