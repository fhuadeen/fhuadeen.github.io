// document.addEventListener('DOMContentLoaded', function() {
//     const track = document.querySelector('.carousel-track');
//     const slides = document.querySelectorAll('.carousel-slide');
//     const prevBtn = document.querySelector('.prev-arrow');
//     const nextBtn = document.querySelector('.next-arrow');
    
//     let currentIndex = 0;
//     const slideCount = slides.length;
//     const visibleSlides = () => {
//         if (window.innerWidth >= 1200) return 4;
//         if (window.innerWidth >= 992) return 3;
//         if (window.innerWidth >= 768) return 2;
//         return 1;
//     };
    
//     function updateCarousel() {
//         const slideWidth = slides[0].clientWidth;
//         track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
//         // Disable arrows when at boundaries
//         prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
//         prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        
//         nextBtn.style.opacity = currentIndex >= slideCount - visibleSlides() ? '0.5' : '1';
//         nextBtn.style.pointerEvents = currentIndex >= slideCount - visibleSlides() ? 'none' : 'auto';
//     }
    
//     prevBtn.addEventListener('click', () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateCarousel();
//         }
//     });
    
//     nextBtn.addEventListener('click', () => {
//         if (currentIndex < slideCount - visibleSlides()) {
//             currentIndex++;
//             updateCarousel();
//         }
//     });
    
//     window.addEventListener('resize', updateCarousel);
//     updateCarousel();
// });


document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevArrow = document.querySelector(".cert-prev-arrow");
    const nextArrow = document.querySelector(".cert-next-arrow");
    const slides = document.querySelectorAll(".carousel-slide");

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
