document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector("#blog .carousel-track");
    const slides = document.querySelectorAll("#blog .blog-slide");
    const prevArrow = document.querySelector(".blog-prev");
    const nextArrow = document.querySelector(".blog-next");

    let currentIndex = 0;

    function getVisibleSlides() {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function updateCarousel() {
        const visibleSlides = getVisibleSlides();
        const slideWidth = slides[0].getBoundingClientRect().width;
        const offset = currentIndex * slideWidth;
        track.style.transform = `translateX(-${offset}px)`;
    }

    nextArrow.addEventListener("click", () => {
        const visibleSlides = getVisibleSlides();
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

    window.addEventListener("resize", updateCarousel);
});