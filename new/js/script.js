$('#close').click(function() {
	hideSongs(true);
	hideContact(true);
});

var lyricsOffset = 0;

$(function() {
	$('html, body').scrollTop(0);
	hideSongs();
	hideContact();

	$('#songs a').click(function() {
		$('.lyrics').hide();
		
		var pathList = this.pathname.replace('#', '').split('/');
		var path = pathList[pathList.length - 1];

		var target = $('#' + path);
		target.show();
		lyricsOffset = target.offset().top;
		$('html, body').animate({
			scrollTop: lyricsOffset
		}, 1000, "swing", function() {
			hideStart();
			$('html, body').scrollTop(0);
			$('#go2top').fadeIn();
		});
		return false;
	});

	$('#go2top a').click(function() {
		showStart();
		showSongs();
		$('#go2top').fadeOut();
		$('html, body').scrollTop($('html, body').scrollTop() + lyricsOffset);

		var pathList = this.pathname.replace('#', '').split('/');
		var path = pathList[pathList.length - 1];

		var target = $('#' + path);
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000, "swing", function() {
			$('.lyrics').hide();
		});
		return false;
	});
});

function showSongs(animate) {
	$('#btn-songs').fadeOut();
	$('#btn-contact').fadeOut();

	if (animate) {
		slideInFromTop('#background');
		slideInFromTop('#close');
		slideInFromTop('#songs');
	} else {
		$('#background').show();
		$('#close').show();
		$('#songs').show();
	}
}

function hideSongs(animate) {
	if (animate) {
		slideOutToTop('#background');
		slideOutToTop('#close');
		slideOutToTop('#songs', function() {
			$('#btn-songs').fadeIn();
			$('#btn-contact').fadeIn();
		});
		$('#go2top').fadeOut();
	} else {
		$('#background').hide();
		$('#close').hide();
		$('#songs').hide();
		$('#btn-songs').show();
		$('#btn-contact').show();
		$('#go2top').hide();
	}

	$('.lyrics').hide();
}

function showContact(animate) {
	$('#btn-songs').fadeOut();
	$('#btn-contact').fadeOut();

	if (animate) {
		slideInFromTop('#background');
		slideInFromTop('#close');
		slideInFromTop('#contact');
	} else {
		$('#background').show();
		$('#close').show();
		$('#contact').show();
	}
}

function hideContact(animate) {
	if (animate) {
		slideOutToTop('#background');
		slideOutToTop('#close');
		slideOutToTop('#contact', function() {
			$('#btn-songs').fadeIn();
			$('#btn-contact').fadeIn();
		});
	} else {
		$('#background').hide();
		$('#close').hide();
		$('#contact').hide();
		$('#btn-songs').show();
		$('#btn-contact').show();
	}
}

function showStart() {
	$('#startup').show();
}

function hideStart() {
	$('#startup').hide();
	$('#background').hide();
	$('#songs').hide();
	$('#close').hide();
}

function slideInFromTop(query, callback) {
	$(query).css('margin-top', '-100vh');
	$(query).show();
	$(query).animate({
		marginTop: 0
	}, 1000, 'swing', function() {
		if (callback) {
			callback();
		};
	});
}

function slideOutToTop(query, callback) {
	$(query).animate({
		marginTop: '-100vh'
	}, 1000, 'swing', function() {
		$(query).hide();
		$(query).css('margin-top', 0);
		if (callback) {
			callback();
		};
	});
}