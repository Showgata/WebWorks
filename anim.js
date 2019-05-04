$(document).ready(function()
{
	var fullHeightMinusHeader=0;
	var sideScrollHeight=0;


	function calHeights()
		{
		fullHeightMinusHeader=$(window).height() - $(".application").outerHeight();
		sideScrollHeight=fullHeightMinusHeader - $(".btn").outerHeight()-$(".item_list").outerHeight();

		$(".item_para").height(sideScrollHeight);
		$(".middle-section, .right-section, .left-section").height(fullHeightMinusHeader);
		}

	
	calHeights();

	$(window).resize(function()
		{
			calHeights();
		});


});