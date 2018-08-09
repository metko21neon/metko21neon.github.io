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
    var mixer = mixitup('.team__list');

    //Timeline
    $('.timeline').timeline({
        mode: 'horizontal',
        forceVerticalMode: 600,
        visibleItems: 3
    });

    //PageScrollToId
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 66
    });

    /*//Flip-clock
    var clock = new FlipClock($('.header__timer'), {
        clockFace: "DailyCounter",
        autoStart: true,
        countdown: true
    });
    clock.setTime(50000);
    clock.setCountdown(true);
    clock.start();*/

    //Owl-carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
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

    //DownButton
    $(function() {
        $('a[href*=#]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1500, 'easeInExpo');
        });
    });

    //Button to top
    $("body").on("click", ".top", function(){
        $("html, body").animate({scrollTop: 0},"slow");
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $(".top").addClass("top__active");
        } else {
            $(".top").removeClass("top__active");
        }
    });

    $("body").append('<div class="top wow pulse infinite d-none d-md-block" data-wow-duration="2.5s"><i class="fa top__fa fa-angle-up"></i></div>');

});
