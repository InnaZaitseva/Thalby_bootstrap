$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },

        768:{
            items:3
        }
    }
});