// JavaScript Document
$(function() {

	//SCROLL TO TOP
	$(".page_up a").click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
  });
	
});

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

//auto hight
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
	$('.list_point .box').tile(3);
});
$(window).resize(function() {
	$('.list_point .box').tile(3);
});