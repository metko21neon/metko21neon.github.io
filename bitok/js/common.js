$(function() {

    //Owl-carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
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
