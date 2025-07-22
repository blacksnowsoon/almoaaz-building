

$(document).ready(function() {
    // --- JavaScript for the Image Slider ---
    let slideIndex = 1;
    for (let i = 0; i < 8; i++) {
        $("#slider-container").append(
            `<img class="slider-image" src="gallery/1080x1080-${i+1}.png" alt="image-${i+1}">`
        )
        $("#slider-dots").append(
            `<span class="dot" onclick="currentSlide(${i+1})"></span>`
        )
    }
    $("#slider-container").append(
        `<a class="slider-nav slider-prev" onclick="plusSlides(${-1})">&#10094;</a>
        <a class="slider-nav slider-next" onclick="plusSlides(${1})">&#10095;</a>`
    )
    
    
    showSlides(slideIndex);
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slider-image");
        let dots = document.getElementsByClassName("dot");
        
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }
    
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active-dot";
    }
});