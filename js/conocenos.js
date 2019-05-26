$(document).ready(function() {
    var owl = $('.owl1');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: -5,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [4000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    });


});