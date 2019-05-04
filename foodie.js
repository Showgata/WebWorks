$(document).ready(function(){

	$(".features-js").waypoint(function(direction)
	{
		if(direction=="down")
		{
			$("nav").addClass('sticky');
		}
		else
		{
			$("nav").removeClass('sticky');
		}

	 }, {
	 	offset:'80px'
	 });


	$(".scroll-to-plan").click(function(){
			$('html, body').animate({scrollTop: $(".js-plans").offset().top},1000);
		});


	$(".js--wp-1").waypoint(function(direction)
	{
		$(".js--wp-1").addClass("animated fadeIn");
	},{offset:"50%"});


	$(".js--wp-2").waypoint(function(direction)
	{
		$(".js--wp-2").addClass("animated fadeInUp");
	},{offset:"50%"});


	$(".js--wp-3").waypoint(function(direction)
	{
		$(".js--wp-3").addClass("animated fadeIn");
	},{offset:"380px"});

	$(".js--wp-4").waypoint(function(direction)
	{
		$(".js--wp-4").addClass("animated pulse");
	},{offset:"380px"});

});