$(document).ready(function() {
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

	$("#magister").mouseenter(function() {
		$("#magister").css("background-color", "#F5EBCE");
		$("body").css("background-color", "#FFF9E9");
		$(".magister-img").fadeTo(250, 1);
		$(".about").fadeTo(200, 0);
	});
	$("#magister").mouseleave(function() {
		$("#magister").css("background-color", "transparent");
		$("body").css("background-color", "white");
		$(".magister-img").fadeTo(250, 0);
		$(".about").fadeTo(200, 1);
	});
});

//FFF9E9