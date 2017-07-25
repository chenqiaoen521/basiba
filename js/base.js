

$(function(){
	$(function(){
		$(".menu").click(function(){
			$(this).toggleClass("on3");
			$(".dropdown").slideToggle();
		});
	});
		
	$(window).scroll(function(){	
		var s=$(window).scrollTop();
		if(s>0){
			$(".navBox").addClass("on");
			$(".dropdown").addClass("on");
            $(".logo").find("img").attr("src","images/logo2.png");
		}
		else{
			$(".navBox").removeClass("on");
			$(".dropdown").removeClass("on");
            $(".logo").find("img").attr("src","images/logo.png");
		};
	});

	//左侧浮动
	$(".fl-left .close").click(function(){
		$(".fl-left").fadeOut();
	});

	//在线咨询
	$(".online .close2").click(function(){
		$(".online").fadeOut();
	});

	//图片尺寸
	var w = $(".tit-pic img").width();
	$(".tit-pic img").height(0.95*w);


})

// 云移动
var myAb=setInterval(function(){myMove()},800);
function myMove(){
	$(".online .cloud").animate({marginLeft:"24px"},4000);
	$(".online .cloud").animate({marginLeft:"-30px"},4000);
};

//轮播图
var mainslider;

$(document).ready(function(){
    var options = {
        slides: '.slide', // The name of a slide in the slidesContainer
        swipe: true,    // Add possibility to Swipe > note that you have to include touchSwipe for this
        slideTracker: true, // Add a UL with list items to track the current slide
        slideTrackerID: 'slideposition', // The name of the UL that tracks the slides
        slideOnInterval: true, // Slide on interval
        interval: 5000, // Interval to slide on if slideOnInterval is enabled
        animateDuration: 1000, // Duration of an animation
        animationEasing: 'ease', // Accepts: linear ease in out in-out snap easeOutCubic easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: true // Pause when user hovers the slide container
    };

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simpleslider");
    /* yes, that's all! */

    $(".slider").on("beforeSliding", function(event){
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='"+prevSlide+"'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").hide();
    });

    $(".slider").on("afterSliding", function(event){
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").fadeIn();
    });

    $(".slide#first").backstretch("images/banner.jpg");
    $(".slide#sec").backstretch("images/banner.jpg");
    $(".slide#thirth").backstretch("images/banner.jpg");
    $(".slide#fiveth").backstretch("images/ban_pic.jpg");

    $('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

    $(".slidecontent").each(function(){
        $(this).css('margin-top', -$(this).height()/2);
    });
});




