
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

    // Scroll Behavior for Headers
    let lastScroll = 0;
    let topHidden = false;
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            // Scroll down
            if (currentScroll > 200) {
                document.getElementById("mainHeader").classList.add("hide");
            }
        } else {
            // Scroll up
            if (currentScroll < 200) {
                document.getElementById("mainHeader").classList.remove("hide");
            }
        }
        lastScroll = currentScroll;
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