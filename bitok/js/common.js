$(function() {

    //toggle_menu
    $(".toggle-menu__button").click(function() {
        $(".toggle-menu").toggleClass("toggle-menu_active");
    });

    $(".mobile-menu__link").click(function() {
        $(".collapse").removeClass("show");
        $(".toggle-menu").toggleClass("toggle-menu_active");
    });

    //Mixitup
    mixitup('.team__list', {
        selectors: {
            control: '[data-mixitup-control]'
        },
        animation: {
            duration: 300
        }
    });

    //PageScrollToId
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 66
    });

    //Owl-carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            991:{
                items:3
            },
            1199:{
                items:5
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    });
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });

    //Animation
    new WOW().init();

});
