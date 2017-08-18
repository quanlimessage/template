// JavaScript Document
$(function() {
	
	/*var portraitWidth,landscapeWidth;
	$(window).bind("resize", function(){
		if(Math.abs(window.orientation) === 0){
			if(/Android/.test(window.navigator.userAgent)){
				if(!portraitWidth)portraitWidth=$(window).width();
			}else{
				portraitWidth=$(window).width();
			}
			$("html").css("zoom" , portraitWidth/320 );
		}else{
			if(/Android/.test(window.navigator.userAgent)){
				if(!landscapeWidth)landscapeWidth=$(window).width();
			}else{
				landscapeWidth=$(window).width();
			}
			$("html").css("zoom" , landscapeWidth/320 );
		}
	}).trigger("resize");*/
	

	//SCROLL TO TOP
	$(".page_up a").click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
  });
	//More-Less Text
	$(".maxheight_show").append("<span class='maxheight_btn'>...続き»</span>");
	$(".maxheight_hide").append("<span class='maxheight_btn'>閉じる</span>");
	$(".maxheight_show .maxheight_btn").on('click',function(){
		$(this).parent().next(".maxheight_hide").slideDown();
		$(this).hide();
	});
	$(".maxheight_hide .maxheight_btn").on('click',function(){
		$(this).parent().slideUp(function(){
			$(this).prev(".maxheight_show").children(".maxheight_btn").show();
		});
	});
	//accordion only 1 item open
	$(document).ready(function(){
	  $(".acco_box02 .acco_a02").next().hide();
	   $(".acco_box02 .acco_a02").click(function(){
	   $(this).next(".acco_dv02").slideToggle("slow")
	   .siblings(".acco_dv02:visible").slideUp("slow");
	   $(this).toggleClass("opened");
	   $(this).siblings(".acco_a02").removeClass("opened");
	  });
	 });
	//accordion 
	$('.btn_gnav').on("click",function(){
		$(this).toggleClass('opened');
		$('#gnav').slideToggle('slow');
	});




});

// SCROLL TO TOP FADE EFFECT
 /*$(window).load(function(){
  
    $(window).scroll(function(){

    var scroll = $(window).scrollTop();

    if(scroll >= 150){
       $('.page_up').fadeIn();
    }else{
       $('.page_up').fadeOut();
     }

   });

 });*/