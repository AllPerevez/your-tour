document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let logo = document.querySelector(".logo");
    let scrollPosition = window.scrollY;

    if ((window.innerWidth > 1024 && scrollPosition > 450) || (window.innerWidth <= 1024 && window.innerWidth > 360 && scrollPosition > 100) || (window.innerWidth <= 360 && scrollPosition > 50) ) {
      header.classList.remove("header__ordinary");
      logo.src = "./assets/YourTour-dark.png";
      header.classList.add("header__fix");
    } else {
      header.classList.remove("header__fix");
      logo.src = "./assets/YourTour.png";
      header.classList.add("header__ordinary");
    }
  });

  let direction = document.querySelector("#direction");
  direction.addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue !== "0") {
      this.classList.toggle("active-variant");
    }
  });
});
