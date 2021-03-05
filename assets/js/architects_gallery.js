new Swiper('.image-slider', {

    //Стрелки
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },

    pagination:{
        el: '.swiper-pagination',
        //clickable: true,
        type:'fraction',
    },

    //slidesPerView: 5,

    //slidesPerColumn: 2,

    autoHeight: false,

    scrollbar:{
        el:'.swiper-scrollbar',
        draggable: true
    },

    //Автопрокрутка
    /*autoplay:{
        delay:3000,
        stopOnLastSlide: true,
        disableOnInteraction: false
    },

    speed:800,*/

    mousewheel:{
        sensitivity: 1
    },

    breakpoints:{
        320:{
            slidesPerView:1,
        },
        480:{
            slidesPerView: 3,
        },
        992:{
            slidesPerView: 5,
        }
    }
});