jQuery(document).ready(function ($) {

    function setSliderDimensions() {
        let slideWidth = $(window).width();
        let slideHeight = $('#slider .slide').height();
        let slideCount = $('#slider .slide').length;
        let sliderUlWidth = slideCount * slideWidth;
    
        $('#slider').css({ width: slideWidth, height: slideHeight });
        $('#slider .slides').css({ width: sliderUlWidth, marginLeft: -slideWidth });
        $('#slider .slide').css({ width: slideWidth });
    }

    setSliderDimensions();
    $(window).resize(setSliderDimensions);

    function moveLeft() {
        $('#slider .slides').animate({
            left: + $(window).width()
        }, 100, function () {
            $('#slider .slide:last-child').prependTo('#slider .slides');
            $('#slider .slides').css('left', '');
        });
    };

    function moveRight() {
        $('#slider .slides').animate({
            left: - $(window).width()
        }, 100, function () {
            $('#slider .slide:first-child').appendTo('#slider .slides');
            $('#slider .slides').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    setInterval(function () {
        moveRight();
    }, 5000);

});


$(document).ready(function(){
    $(".item_focus_1").click(function(){
        $(".item_focus_1").css("color","rgb(232,111,157)")
        $(".item_focus_2, .item_focus_3, .item_focus_4").css("color","black")
        
        $(".item_click_1").css("display","block")
        $(".item_click_2, .item_click_3, .item_click_4").css("display","none")
    })
    $(".item_focus_2").click(function(){
        $(".item_focus_2").css("color","rgb(232,111,157)")
        $(".item_focus_1, .item_focus_3, .item_focus_4").css("color","black")
        
        $(".item_click_2").css("display","block")
        $(".item_click_1, .item_click_3, .item_click_4").css("display","none")
    })
    $(".item_focus_3").click(function(){
        $(".item_focus_3").css("color","rgb(232,111,157)")
        $(".item_focus_1, .item_focus_2, .item_focus_4").css("color","black")
        
        $(".item_click_3").css("display","block")
        $(".item_click_1, .item_click_2, .item_click_4").css("display","none")
    })
    $(".item_focus_4").click(function(){
        $(".item_focus_4").css("color","rgb(232,111,157)")
        $(".item_focus_1, .item_focus_2, .item_focus_3").css("color","black")
        
        $(".item_click_4").css("display","block")
        $(".item_click_1, .item_click_2, .item_click_3").css("display","none")
    })
})




$('.blink_1, .blink_2, .blink_3, .blink_4, .blink_5, .blink_6, .blink_7, .blink_8').click(function() {
    $('.blink').fadeOut(250).fadeIn(250); 
});

$(document).ready(function(){
    $(".blink_1").click(function(){
        $(".blink_1").css("color","rgb(232,111,157)")
        $(".blink_2, .blink_3, .blink_4, .blink_5, .blink_6, .blink_7, .blink_8").css("color","black")
    })
    $(".blink_2").click(function(){
        $(".blink_2").css("color","rgb(232,111,157)")
        $(".blink_1, .blink_3, .blink_4, .blink_5, .blink_6, .blink_7, .blink_8").css("color","black")
    })
    $(".blink_3").click(function(){
        $(".blink_3").css("color","rgb(232,111,157)")
        $(".blink_1, .blink_2, .blink_4, .blink_5, .blink_6, .blink_7, .blink_8").css("color","black")
    })
    $(".blink_4").click(function(){
        $(".blink_4").css("color","rgb(232,111,157)")
        $(".blink_1, .blink_2, .blink_3, .blink_5, .blink_6, .blink_7, .blink_8").css("color","black")
    })
    $(".blink_5").click(function(){
        $(".blink_5").css("color","rgb(232,111,157)")
        $(".blink_1, .blink_2, .blink_3, .blink_4, .blink_6, .blink_7, .blink_8").css("color","black")
    })
    $(".blink_6").click(function(){
        $(".blink_6").css("color","rgb(232,111,157)")
        $(".blink_1, .blink_2, .blink_3, .blink_4, .blink_5, .blink_7, .blink_8").css("color","black")
    })
    $(".blink_7").click(function(){
        $(".blink_7").css("color","rgb(232,111,157)")
        $(".blink_1, .blink_2, .blink_3, .blink_4, .blink_5, .blink_6, .blink_8").css("color","black")
    })
    $(".blink_8").click(function(){
        $(".blink_8").css("color","rgb(232,111,157)")
        $(".blink_1, .blink_2, .blink_3, .blink_4, .blink_5, .blink_6, .blink_7").css("color","black")
    })
})




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});