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

$(function() {
	
	//SCROLL TO TOP
	$(".page_up a").click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;

	});
});
