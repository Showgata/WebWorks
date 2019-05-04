var score =document.querySelectorAll(".score");
console.log(score);

var player_1=0;
var player_2=0;
var count=7;

var gameOver=false;

var reset=document.querySelector("#reset");
reset.addEventListener("click",function(){

	player_1=0;
	 player_2=0;
	score[0].textContent="0";
	score[1].textContent="0";
	console.log("done");
	gameOver=false;
	// body...
});


var player_one =document.querySelector("#player_1");
var player_two =document.querySelector("#player_2");

player_one.addEventListener("click",function()
{
	if(player_1<count)
	{
		if(gameOver== false)
		{
			player_1+=1;
		score[0].textContent=""+player_1;
		console.log("player_1 incremented");

		}
		

			if(player_1===count)
	{
		score[0].style.color= "green";
		gameOver=true;
	}
	}

	
});

player_two.addEventListener("click",function()
{
	if(gameOver== false)
		{
			player_2+=1;
		score[1].textContent=""+player_2;
		console.log("player_2 incremented");

		}
		

			if(player_2===count)
	{
		score[1].style.color= "green";
		gameOver=true;
	}
	

	
});
