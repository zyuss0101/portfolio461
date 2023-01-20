$(".begin").click(function() {
    $('html, body').animate({
        scrollTop: $("#profile").offset().top
    }, 2000);
});