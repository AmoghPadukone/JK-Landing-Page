window.onload = function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  const menu_btn = document.querySelector(".hamburger");
  const clickawayElements1 = document.querySelector(".mobile-navbar-a1");
  const clickawayElements2 = document.querySelector(".mobile-navbar-a2");
  const clickawayElements3 = document.querySelector(".mobile-navbar-a3");
  const mobile_menu = document.querySelector(".mobile-nav");
  //jugaad cause it wasnt working
  menu_btn.addEventListener("click", (e) => {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
  clickawayElements1.addEventListener("click", (e) => {
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
    console.log("dsadad");
  });
  clickawayElements2.addEventListener("click", (e) => {
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
    console.log("dsadad");
  });
  clickawayElements3.addEventListener("click", (e) => {
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
    console.log("dsadad");
  });
};
