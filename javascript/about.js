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

// swiper js
function typeText(el, text, delay = 100, cb) {
  el.innerHTML = ""; // Clear existing content
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      if (cb) cb();
    }
  }, delay);
}

// Function to play the intro typing animation
function playIntroTyping() {
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  line1.textContent = "";
  line2.textContent = "";
  line3.textContent = "";

  typeText(line1, "Hello Webies!", 100, () => {
    typeText(line2, "My name is Onyinye Ofili", 100, () => {
      typeText(line3, "Software Engineer from Nigeria", 100);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next", // Custom next button
      prevEl: ".swiper-button-prev", // Custom prev button
    },
    on: {
      init: function () {
        if (this.activeIndex === 0) {
          playIntroTyping(); // Call the function to play the typing animation
        }
      },
      slideChange: function () {
        const index = this.activeIndex;
        updateTopPagination(index);
  
        const navButton = document.querySelector(".swiper-button-next");
        const prevButton = document.querySelector(".swiper-button-prev");
  
        if (index === 1) {
          navButton.innerHTML = 'Prev <i class="fa-solid fa-angle-left"></i>';
        } else {
          navButton.innerHTML = 'Next <i class="fa-solid fa-angle-right"></i>';
        }
  
        if (index === 1) {
          const line4 = document.querySelector(".line4");
          const line5 = document.querySelector(".line5 span a");
          const line6 = document.querySelector(".line6 span");
  
          line4.textContent = "";
          line5.textContent = "";
          line6.textContent = "";
  
          typeText(line4, "You can reach me by", 100, () => {
            typeText(line5, "CV - onyinyeofili.com", 100, () => {
              typeText(line6, "Email - globaltechiegirl@gmail.com", 100);
            });
          });
        } else if (index === 0) {
          playIntroTyping(); // Call the function again if we're on the first slide
        }
      },
    },
  });
  

  const titles = ["About Me", "Contact Me"];
  function updateTopPagination(index) {
    document.querySelector(".section-title").textContent = titles[index];
    document.querySelectorAll(".step").forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
  }

  updateTopPagination(0);
});
