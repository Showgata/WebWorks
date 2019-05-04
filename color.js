var color =[];
var result = document.querySelector(".result");
var squares= document.querySelectorAll(".squares");
var difficulty=document.querySelectorAll(".Difficulty");
var showColorInfo=document.querySelector("h2");
var heading=document.querySelector("h1");
var store;


makeSquares(3);
store =color[Math.floor(Math.random()*3)];
showColorInfo.textContent=""+store;


//Select Difficulty and Reset the Game
for(var i=0;i<difficulty.length;i++)
{
	difficulty[i].addEventListener("click",function()
		{
			if(this.textContent==="Easy")
			{
				console.log("I have entered Easy !");
				//Number of boxes=3;
				makeSquares(3);
				reset_game();
				easyColor();
				store =color[Math.floor(Math.random()*3)];
				showColorInfo.textContent=""+store;
				heading.style.backgroundColor="#232323";
				
			}else
			{
				//Number of boxes=6;
				makeSquares(6);
				reset_game();
				store =color[Math.floor(Math.random()*6)];
				showColorInfo.textContent=""+store;
				heading.style.backgroundColor="#232323";
			
			}
		});
}

//Assign the boxes color from the array

for(var i=0;i<color.length;i++)
{
	squares[i].style.backgroundColor=color[i];
}


//Winning criterian
for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener("click",function()
	{
		if(store !== this.style.backgroundColor)
	{
		this.style.backgroundColor="#232323";
		result.textContent="Try Again";
	}
	else
	{
		result.textContent="Correct !";
		changeColor();
	}
	});
}






//if guess is correct , give all the boxes same color
function changeColor()
{
	for(var i=0;i<color.length;i++)
{
	squares[i].style.backgroundColor=store;
}

	heading.style.backgroundColor=store;
}

//Make a random rgb color
function randomizeColor()
{
	var makeColor="";
	for(var i=0;i<3;i++)
	{
		var random=Math.floor(Math.random()*255);
		if(i!==2)
		{
			makeColor=makeColor+random+", ";	
		}
		else
		{
			makeColor=makeColor+random;
		}
		
	}

	var rgbMaker = "rgb("+makeColor+")";
	console.log(rgbMaker);
	return rgbMaker;
	
}

//Give array of random color
function makeSquares(Number_of_boxes)
{
	for(i=0;i<Number_of_boxes;i++)
	{
		var randomColor=randomizeColor();
		color[i]=randomColor;
	}
}


function reset_game()
{

	for(var i=0;i<color.length;i++)
{
	squares[i].style.backgroundColor=color[i];

	showColorInfo.textContent=""+store;

}

}

function easyColor()
{
	for(var i=3;i<6;i++)
	{
		squares[i].style.backgroundColor= "#232323";
	}
}





