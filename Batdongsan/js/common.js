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

$(".sp_menu").click(function(){
	  $(this).toggleClass('opened');
		$('.h_menu').slideToggle('400');
		return false;
	});

$(document).ready(function() {
	var flag = false;
	var page_up = $('.page_up');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			if (flag == false) {
				flag = true;
				page_up.stop().animate({
					'right': '120px'
				}, 500);
			}
		} else {
			if (flag) {
				flag = false;
				page_up.stop().animate({
					'right': '-500px'
				}, 500);
			}
		}
	});
	page_up.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});
});