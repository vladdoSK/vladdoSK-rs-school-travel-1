new Swiper('.swiper', {
    pagination:{
       el:'.swiper-pagination',
       clickable: true, 
    },

    centeredSlides: true, 
    navigation:
    {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable: true, 
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
            spaceBetween:30,
            initialSlide:0,
        },
        391:{
            initialSlide:1,
            slidesPerView: 1.5,
            spaceBetween:-150,
        },

    }
});

const login = document.querySelector('.login');
const log_window = document.querySelector('.login_modal');


const burger = document.querySelector('.block_burger');
const navigation = document.querySelector('.navigation');

const close_navigation = document.querySelector(".close");


const sing = document.querySelector('.box_log_sign');


login.addEventListener("click", function (event) {
    log_window.classList.add('active');
});

sing.addEventListener("click",  function (event) {

    const email = document.querySelector('.box_log_email').value;
    const pass = document.querySelector('.box_log_pass').value;
    window.alert(`Email: ${email} Password: ${pass}`);
    log_window.classList.remove('active');

});

burger.addEventListener("click",  function (event) {
    navigation.classList.add('active');
});

close_navigation.addEventListener("click",  function (event) {
    navigation.classList.remove('active');
});