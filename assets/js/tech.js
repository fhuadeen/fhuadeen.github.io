document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".tech-carousel-track");
    const prevArrow = document.querySelector(".tech-prev-arrow");
    const nextArrow = document.querySelector(".tech-next-arrow");
    const slides = document.querySelectorAll(".tech-carousel-slide");

    let currentIndex = 0;

    // Calculate number of visible slides based on screen width
    function getVisibleSlidesCount() {
      if (window.innerWidth <= 576) return 1;
      if (window.innerWidth <= 768) return 2;
      if (window.innerWidth <= 992) return 3;
      return 4;
    }

    function updateCarousel() {
      const visibleSlides = getVisibleSlidesCount();
      const slideWidth = slides[0].getBoundingClientRect().width;
      const offset = currentIndex * slideWidth;
      track.style.transform = `translateX(-${offset}px)`;
    }

    nextArrow.addEventListener("click", () => {
      const visibleSlides = getVisibleSlidesCount();
      if (currentIndex < slides.length - visibleSlides) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    // Optional: update layout on window resize
    window.addEventListener("resize", () => {
      updateCarousel();
    });
  });