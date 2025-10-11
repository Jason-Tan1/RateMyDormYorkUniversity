let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Implementing the slides so that they show and automatcaly slide through
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(() => plusSlides(1), 5000);









// let slideIndex = 0;
// let autoSlideTimeout;

// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1; }

//     slides[slideIndex - 1].style.display = "block";

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     if (dots.length > 0) {
//         dots[slideIndex - 1].className += " active";
//     }

//     autoSlideTimeout = setTimeout(showSlides, 2000); 
// }

// function plusSlides(n) {
//     clearTimeout(autoSlideTimeout); 
//     slideIndex += n - 1; 
//     showSlides();
// }

// function currentSlide(n) {
//     clearTimeout(autoSlideTimeout); 
//     slideIndex = n - 1; 
//     showSlides();
// }

// showSlides();
