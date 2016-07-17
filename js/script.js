$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			var duration = 1000 + Math.abs($('html, body').scrollTop() - target.offset().top) / 10;
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, duration, "swing", function() {
					isScrolling = false;
				});
				return false;
			}
		}
	});
});

var isScrolling = false;

function scroll2top (argument) {
	isScrolling = true;
	$('a[href="#top"]')[0].click();
}

setTimeout(function() {
	if ($(window).scrollTop() == 0) {
		if (!isScrolling)
			scroll2top();
	}
}, 1000);

var lastScrollTop = 0;
addEventListener("scroll", function() {
	var st = $(this).scrollTop();
	if (st > lastScrollTop){
		if (isScrolling) {
			window.scrollTo(0, st)
		} else {
			if (window.scrollY < $('a[name="top').position().top)
				scroll2top();
		}
	}
	lastScrollTop = st;
}, true);