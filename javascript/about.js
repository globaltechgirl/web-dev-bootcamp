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

// copy email
document.getElementById("copyEmail").addEventListener("click", function () {
  const email = "globaltechiegirl@gmail.com";
  const textElement = document.getElementById("copyText");
  const iconElement = document.getElementById("copyIcon");

  navigator.clipboard.writeText(email).then(() => {
    textElement.innerHTML =
      '<i class="fa-regular fa-copy" id="copyIcon"></i> Copied';

    setTimeout(() => {
      textElement.innerHTML =
        '<i class="fa-regular fa-copy" id="copyIcon"></i> Copy Email';
    }, 2000);
  });
});

// download cv
document.getElementById("downloadCV").addEventListener("click", function () {
  const cvFile = "./files/CV - ONYINYE OFILI.pdf";

  const link = document.createElement("a");
  link.href = cvFile;
  link.download = "CV - ONYINYE OFILI.pdf";
  link.click();

  const textElement = document.getElementById("downloadText");
  const iconElement = document.getElementById("downloadIcon");

  textElement.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin" id="downloadIcon"></i> Downloading';

  setTimeout(() => {
    textElement.innerHTML =
      '<i class="fa-solid fa-arrow-down" id="downloadIcon"></i> Download CV';
  }, 2000);
});

// scrollers
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

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
