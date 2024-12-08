const menuOpenButton = document.querySelector ("#menu-open-button");
const menuCloseButton = document.querySelector ("#menu-close-button");
const navLinks = document.querySelectorAll (".nav-menu .nav-link");

menuOpenButton.addEventListener("click", () => {
// toggling of mobile menu 
    document.body.classList.toggle("show-mobile-menu");
});
// Close menu list on close button 
menuCloseButton.addEventListener("click",() => menuOpenButton.click());


// close menu on the nav link 
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});


const swiper = new swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoint 
    breakpoints: {
        0:{
            slidesPerView: 1
        },

        768:{
            slidesPerView: 2
        },

        1024:{
            slidesPerView: 3
        },


    }
  });

