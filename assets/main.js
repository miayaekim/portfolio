$(document).ready(function() {

	//INITIAL FADE-INS
	/*$(".header").delay(500).fadeTo(500, 1);
	$(".header-line").delay(500).fadeTo(500, 1);
	$(".card").delay(500).fadeTo(500, 1);
	$(".final-card").delay(500).fadeTo(500, 1);
	$(".about-header").delay(1000).fadeTo(500, 1);
	$(".about-text").delay(1500).fadeTo(500, 1); */

	var browser = $(window).width();

	//HOVER EFFECTS
	if (browser > 970) {
		$("#amtrak").mouseenter(function() {
			$("#amtrak").css("background-color", "#DEEBF4");
			$("body").css("background-color", "#F0F6FA");
			$(".amtrak-img").fadeTo(300, 1);
			$(".about").fadeTo(200, 0);
		});
		$("#amtrak").mouseleave(function() {
			$("#amtrak").css("background-color", "transparent");
			$("body").css("background-color", "white");
			$(".amtrak-img").fadeTo(300, 0);
			$(".about").fadeTo(200, 1);
		});

		$("#theia").mouseenter(function() {
			$("#theia").css("background-color", "#F7C946");
			$("body").css("background-color", "#FADB73");
			$(".theia-img").fadeTo(250, 1);
			$(".about").fadeTo(200, 0);
		});
		$("#theia").mouseleave(function() {
			$("#theia").css("background-color", "transparent");
			$("body").css("background-color", "white");
			$(".theia-img").fadeTo(250, 0);
			$(".about").fadeTo(200, 1);
		});
	} else {
		$("#amtrak").mouseenter(function() {
			$("#amtrak").css("background-color", "#DEEBF4");
			$("body").css("background-color", "#F0F6FA");
		});
		$("#amtrak").mouseleave(function() {
			$("#amtrak").css("background-color", "transparent");
			$("body").css("background-color", "white");
		});

		$("#theia").mouseenter(function() {
			$("#theia").css("background-color", "#F7C946");
			$("body").css("background-color", "#FADB73");
		});
		$("#theia").mouseleave(function() {
			$("#theia").css("background-color", "transparent");
			$("body").css("background-color", "white");
		});
	}



	//OLD STUFF

	$(".news-room-link").mouseenter(function() {
		$(".news-room").fadeTo(300, 1);
		$("body").css("background-color", "white");
	});

	$(".news-room-link").mouseleave(function () {
		$(".news-room").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})

	$(".fan-page-link").mouseenter(function() {
		$(".fan-page").fadeTo(300, 1);
		$("body").css("background-color", "#EFEFEF");
	});

	$(".fan-page-link").mouseleave(function () {
		$(".fan-page").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})	

	$(".helpful-app-link").mouseenter(function() {
		$(".helpful-app").fadeTo(300, 1);
		$("body").css("background-color", "#FFF9E7");
	});

	$(".helpful-app-link").mouseleave(function () {
		$(".helpful-app").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})

	$(".clock-link").mouseenter(function() {
		$(".clock").fadeTo(300, 1);
		$("body").css("background-color", "#F6BC42");
	});

	$(".clock-link").mouseleave(function () {
		$(".clock").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})

	$(".css-animation-link").mouseenter(function() {
		$(".css-animation").fadeTo(300, 1);
		$("body").css("background-color", "#FEF3C7");
	});

	$(".css-animation-link").mouseleave(function () {
		$(".css-animation").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})

	$(".flexbox-poster-link").mouseenter(function() {
		$(".flexbox-poster").fadeTo(300, 1);
		$("body").css("background-color", "#F6EDEB");
	});

	$(".flexbox-poster-link").mouseleave(function () {
		$(".flexbox-poster").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})

	$(".hover-link").mouseenter(function() {
		$(".hover").fadeTo(300, 1);
		$("body").css("background-color", "#8D93E0");
	});

	$(".hover-link").mouseleave(function () {
		$(".hover").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})

	$(".interview-link").mouseenter(function() {
		$(".interview").fadeTo(300, 1);
		$("body").css("background-color", "white");
	});

	$(".interview-link").mouseleave(function () {
		$(".interview").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})

	$(".jquery-link").mouseenter(function() {
		$(".jquery").fadeTo(300, 1);
		$("body").css("background-color", "#DCB64F");
	});

	$(".jquery-link").mouseleave(function () {
		$(".jquery").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})

	$(".wikipedia-link").mouseenter(function() {
		$(".wikipedia").fadeTo(300, 1);
		$("body").css("background-color", "#D1C8B8");
	});

	$(".wikipedia-link").mouseleave(function () {
		$(".wikipedia").fadeTo(300, 0);
		$("body").css("background-color", "white");
	})
});