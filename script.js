

$(document).ready(function() {
     // Preload the GLB file
    
    fetch('assets/building-7F-G8.glb')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load model');
            
            return response.blob();
        })
        .then(blob => {
            // Create a blob URL for the model
            const url = URL.createObjectURL(blob);

            // Create the model-viewer element
            const modelViewer = document.createElement('model-viewer');
            modelViewer.className = 'full-viewer';
            modelViewer.setAttribute('src', url);
            modelViewer.setAttribute('ar', '');
            modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
            modelViewer.setAttribute('camera-controls', '');
            modelViewer.setAttribute('tone-mapping', 'neutral');
            modelViewer.setAttribute('shadow-intensity', '2');
            modelViewer.setAttribute('shadow-softness', '1');
            modelViewer.setAttribute('environment-image', 'assets/hdr/puresky_1k.hdr');
            modelViewer.setAttribute('exposure', '1.5');
            modelViewer.setAttribute('disable-pan', '');
            modelViewer.setAttribute('max-camera-orbit', 'auto 90deg auto');
            modelViewer.setAttribute('skybox-image', 'assets/hdr/puresky_1k.hdr');
            modelViewer.addEventListener('load', () => {
                // Hide the spinner when the model is loaded
                $('#main-spinner').hide(); // You can also hide the spinner using jQuery
                $('.spinner-border').hide();
                $('.spinner-text').hide();
            });
            // Append to the section
            // $('#main-model-section').append(modelViewer);

        })
        .catch(err => {
            document.getElementById('main-spinner').textContent = 'فشل تحميل النموذج';
        });
    // --- JavaScript for the Image Slider ---
    let slideIndex = 1;
    for (let i = 0; i < 8; i++) {
        $("#slider-container").append(
            `<img class="slider-image" src="gallery/1080x1080-${i+1}.webp" alt="image-${i+1}">`
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