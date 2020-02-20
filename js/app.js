$(function(){
    // Img adaptive
    function ibg(){

        $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
        });
        }
        
        ibg();

    // Header fixed

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffsize = $(window).scrollTop();

        CheckScroll(scrolloffsize,introH);
    
    $(window).on("scroll resize", function(){
        scrolloffsize = $(this).scrollTop();
        CheckScroll(scrolloffsize,introH);
    });

    function CheckScroll(scrolloffsize,introH){
        if(scrolloffsize > introH){
            header.addClass("fixed")
        }

        else{
            header.removeClass("fixed");
        }
    }

    CheckScroll(scrolloffsize,introH);

    // Burger

    $("#header-burger").on("click", function(){
        $(this).toggleClass("active");

        $("#header-menu").toggleClass("active");
    });

    // Smooth Scroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let dataBlock = $(this).data("scroll"),
            dataScroll = $(dataBlock).offset().top;

        $("#header-burger").removeClass("active");
        $("#header-menu").removeClass("active");

        $("html,body").animate({
            scrollTop: dataScroll - 140
        },700);
    });

    // Slick slider

    $("#reviews-slider").slick({
        dots: true,
        arrows:false,
        fade:true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});