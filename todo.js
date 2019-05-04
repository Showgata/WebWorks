
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");	
});





$("ul").on("click","span",function()
	{
		$(this).parent().fadeOut(500,function()
			{
				$(this).remove();
			});
	});


$("input[type='text']").keypress(function(event)
	{
		if(event.which===13)
		{
			if($(this).val() !== "")
			{
				var todo =$(this).val();
				$(this).val("");
				//create new li 

				$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+ todo +"</li>");
			}
			
		}
	});

$(".fa-dot-circle-o").click(function()
{
	$("input[type='text']").fadeToggle();
});
