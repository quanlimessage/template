//smartRollover.js
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].src.match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}

// SCROLL TO TOP FADE EFFECT
 $(window).load(function(){
  
    $(window).scroll(function(){

    var scroll = $(window).scrollTop();

    if(scroll >= 150){
       $('.page_up').fadeIn();
    }else{
       $('.page_up').fadeOut();
     }

   });

 });

$(function() {
	
	//SCROLL TO TOP
	$(".page_up a").click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;

	});
});

(function($) {
	$.fn.tile = function(columns) {
		var tiles, max, c, h, last = this.length - 1, s;
		if(!columns) columns = this.length;
		this.each(function() {
			s = this.style;
			if(s.removeProperty) s.removeProperty("height");
			if(s.removeAttribute) s.removeAttribute("height");
		});
		return this.each(function(i) {
			c = i % columns;
			if(c == 0) tiles = [];
			tiles[c] = $(this);
			h = tiles[c].height();
			if(c == 0 || h > max) max = h;
			if(i == last || c == columns - 1)
				$.each(tiles, function() { this.height(max); });
		});
	};
})(jQuery);

$(window).load(function(){
	$('.news_list li').tile(2);
});


/* 4. fixed header on PC
*******************************************************************/
var breakWidth = 1023;
if($(window).innerWidth() > breakWidth){
	var pageSlug = $('body').attr('id'); 
	$(window).scroll(function(){
		// HOME
		if(pageSlug === 'home'){
			if($(this).scrollTop() > 200){
				$('#header').addClass('stop');
				if($(this).scrollTop() > $('#mv').innerHeight() - 81){
					$('#header').addClass('fixed');
				}else{
					$('#header').removeClass('fixed');
				}
			}else{
				$('#header').removeClass('stop');
			};
		}else{
			if($(this).scrollTop() > 200){
				$('#header').addClass('stop');
				if($(this).scrollTop() > 350){
					$('#header').addClass('fixed');
				}else{
					$('#header').removeClass('fixed');
				}
			}else{
				$('#header').removeClass('stop');
			};
		}
	});
}
