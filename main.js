///// Header section start /////

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const menu = document.querySelector("#navbarNav");
  const overlay = document.querySelector(".menu-overlay");
  const closeBtn = document.querySelector(".menu-close");
  const topHeader = document.getElementById("topHeader");
  const mainHeader = document.getElementById("mainHeader");

  // ✅ Open menu
  toggler.addEventListener("click", () => {
    menu.classList.add("show");
    overlay.classList.add("show");
  });

  // ✅ Close menu function
  function closeMenu() {
    menu.classList.remove("show");
    overlay.classList.remove("show");
  }

  overlay.addEventListener("click", closeMenu);
  closeBtn.addEventListener("click", closeMenu);

  // Optional: close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // ✅ Scroll Behavior for Top + Main Header
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      // Top header smoothly slide up
      topHeader.classList.add("hide");
      mainHeader.classList.add("fixed");
    } else {
      // Top header slide down
      topHeader.classList.remove("hide");
      mainHeader.classList.remove("fixed");
    }

    lastScroll = currentScroll;
  });
});

///// Header section end /////


    // Swiper Initialization
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        navigation: false, // No next/prev
    });

  

//  ====== testimonial section start ======

    var swiper = new Swiper(".myTestimonialSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".testimonial-slider .swiper-pagination",
        clickable: true,
      },
      speed: 1000,
      breakpoints: {
        1024: { slidesPerView: 3 },  // Desktop
        768: { slidesPerView: 2 },   // Tablet
        425: { slidesPerView: 1 },   // Mobile
      }
    });
    
    //  ====== testimonial section end ======