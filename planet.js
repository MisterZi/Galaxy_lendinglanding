$(function () {
	$('.planet-about').hide();

	$('.planet-moto').click(function () {
		$(this).next().slideToggle({duration: 300});
	});
});