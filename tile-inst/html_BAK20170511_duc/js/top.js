$(function(){
	function resize(){
		getHeight = $('body').height();
		windowHeight = window.innerHeight;
		scrollHeight = getHeight-windowHeight;
		}
		resize();
		window.onresize=resize;
		$(window).scroll(function () {
			ScrollTop = $(document).scrollTop();
			bgPosition = 100/scrollHeight*ScrollTop+10;
			$('body').css(
			{backgroundPositionY: bgPosition+"%"}
		);
	});
});