var navHeight = $('.navbar').height();



console.log(navHeight);


var roundLogEl2 = document.querySelector('.cipher');
var roundLogEl2 = document.querySelector('.cipher2');
var roundLogEl3 = document.querySelector('.cipher3');
var roundLogEl2 = document.querySelector('.cipher4');


function ciphersRolling(target, rollUpTo) {
    anime({
        targets: target,
        innerHTML: [0, rollUpTo],
        easing: 'linear',
        round: 10,
        duration: 3000
    });
}

$(document).ready(function() {
    $('.cipher').waypoint({
        handler: function() {
            ciphersRolling('.cipher', 12734);
            ciphersRolling('.cipher2', 8745);
            ciphersRolling('.cipher3', 3988);
            ciphersRolling('.cipher4', 16832);
        },
        offset: '95%'
    })
});

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 2,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [3000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    });


});


var navLinkArr = document.getElementsByClassName('nav-link')

navLinkArr[0].style.color = "crimson";

for (let item of navLinkArr) {
    item.addEventListener("mouseover", () => {
        for (let item of navLinkArr) {
            item.style.color = "black";
        }
        item.style.color = "crimson"
    })

}

$('a').each(function() {
    var href = $(this).attr('href');
    $(this).attr('onclick', "window.location='" + href + "'")
        .removeAttr('href');
});

$('td').each(function() {
    $(this).attr('onclick', "window.location='form.html'");
});