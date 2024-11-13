// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         document.querySelector(".preloader").classList.add("active");
//     } else {
//         document.querySelector(".preloader").style.opacity = "0";
//         setTimeout(() => {
//             document.querySelector(".preloader").classList.remove("active");
//             document.querySelector(".preloader").style.display = "none";
//         }, 1200)
//     }
// };

function menuToggle() {
  if (document.querySelector("header nav").classList.contains("active")) {
    document.querySelector("header nav").classList.remove("active");
    document.querySelector(
      "header .buttonToggle"
    ).innerHTML = `<i class="fas fa-bars"></i>`;
  } else {
    document.querySelector("header nav").classList.add("active");
    document.querySelector(
      "header .buttonToggle"
    ).innerHTML = `<i class="fas fa-times"></i>`;
  }
}

window.addEventListener("scroll", function () {
  if (document.querySelector("header nav").classList.contains("active")) {
    document.querySelector("header nav").classList.remove("active");
    document.querySelector(
      "header .buttonToggle"
    ).innerHTML = `<i class="fas fa-bars"></i>`;
  }
  if (document.querySelector(".blogSection .tableContent .content")) {
    document
      .querySelector(".blogSection .tableContent .content .group button")
      .classList.add("collapsed");
    document
      .querySelector(".blogSection .tableContent .content .group button")
      .setAttribute("aria-expanded", "false");
    document
      .querySelector(".blogSection .tableContent .content .collapse")
      .classList.remove("show");
  }
});

if (document.querySelector(".floatingAction")) {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector(".floatingAction").classList.add("active");
    } else {
      document.querySelector(".floatingAction").classList.remove("active");
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.querySelector(".floatingAction").classList.add("up");
      document.querySelector(".whatsapp-btn").classList.add("up");
    } else {
      document.querySelector(".floatingAction").classList.remove("up");
      document.querySelector(".whatsapp-btn").classList.remove("up");
    }
  };
  document.querySelector(".floatingAction").onclick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
}

if (document.querySelector(".threebox")) {
  VanillaTilt.init(document.querySelectorAll(".threebox"), {
    max: 25,
    speed: 300,
  });
}
if (document.querySelector(".threebox2")) {
  VanillaTilt.init(document.querySelectorAll(".threebox2"), {
    max: 5,
    speed: 300,
  });
}
