$(document).ready(function () {
	
	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

	$("#button").onload=function() {
		$('body').css('background', randomColor());
	});
});