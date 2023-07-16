// Swiper //
var swiper = new Swiper(".popular-content", {
    autoplay: {
        slidePerView: 1,
        spaceBetween: 10,
        delay: 10500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// Show Video //
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closebtn = document.querySelector('.close-video');

playButton.onclick = () =>{
    video.classList.add('show-video');
    //auto Play when click on button//
    myvideo.play();
}
closebtn.onclick = () =>{
    video.classList.remove('show-video');
    //Pause on close video//
    myvideo.pause();
}
