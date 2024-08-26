document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let logo = document.querySelector(".logo");
    let headerMiddle = document.querySelector(".vp-1024px");
    let scrollPosition = window.scrollY;
    let innerWidth = window.innerWidth;

    let scrollThreshold = 450; 

    if (innerWidth <= 1024) {
      scrollThreshold = 350;
    } 
    if (innerWidth <= 360) {
      scrollThreshold = 50; 
    }

    if (scrollPosition > scrollThreshold) {
      header.classList.remove("header__ordinary");
      logo.src = "./assets/YourTour-dark.png";
      header.classList.add("header__fix");
      // if (innerWidth <= 1024 ) {
      //   headerMiddle.style.display = "block";
      // } 
    } else {
      header.classList.remove("header__fix");
      logo.src = "./assets/YourTour.png";
      header.classList.add("header__ordinary");
      // headerMiddle.style.display = "none";
    }

  });

  let direction = document.querySelector("#direction");
  direction.addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue !== "0") {
      this.classList.toggle("active-variant");
    } else {
      this.classList.toggle("active-variant");
    }
  });
});
