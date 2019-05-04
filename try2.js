
//Array Input
// var arr=[];
// var input =prompt("Input Here :");
// var count=0;

// while(input!==0)
// {
// 	arr[count]=input;
// 	input=prompt("Again Input here Or Type '0' to Quit :");
// 	count+=1;
// }

// arr.forEach(function(item)
// {
// 	console.log(item);
// });


// //Reverse
// function ReverseArray(arrayReverse)
// {
// 	var ar=[];
// 	var size =arrayReverse.length-1;
// 	var k=0;
// 	for(var i=size;i>=0;i--)
// 	{
// 		ar[k]=arrayReverse[i];
// 		k++;
// 	}

// 	return ar;

// }


// console.log("===============================================================================");

// var rev = ReverseArray(arr);
// rev.forEach(function(item)
// {
// 	console.log(item);
// });


// console.log("===============================================================================");

//Uniform

// function Uniformity(array)
// {
// 	for(var i=0;i<=array.length-2;i++)
// 	{
// 		if(array[i]!==array[i+1])
// 		{
// 			return "Not Uniform";
// 		}


// 	}


// 	return "Uniform";

// }


// var result = Uniformity(arr);

// console.log("This array is " + result);



// console.log("===============================================================================");

// //sumArray

// // function sumArray(arraySum)
// // {
// // 	var sum=0;
// // 	arraySum.forEach(function(item)
// // 	{
// // 		sum=sum+item;
// // 	});

// // 	return sum;
// // }



// // console.log("The Sum Of the elements in the array is " + sumArray(arr));

// console.log("===============================================================================");

// //maxNumber

// function maxNumber(arr)
// {
// 	var maxNumber=arr[0];
// 	arr.forEach(function(item)
// 	{
// 		if(maxNumber<item)
// 		{
// 			maxNumber=item;
// 		}
// 	});


// 	return maxNumber;
// }


var movies =[
{
	title: "Frozen",
	rating: "4 stars",
	hasWatched: true
},
{
	title: "Mad Max Fury Road",
	rating: "5 stars",
	hasWatched:false

},
{
	title: "Pursuit of Happyness",
	rating: "4.5 stars",
	hasWatched: true
},	
{
	title: "Transformers 4",
	rating: "3.9 stars",
	hasWatched: false
}
];


function repeatStuff(arrayHere)
{

	arrayHere.forEach(function(item)
	{
		if(item.hasWatched ===false)
		{
			console.log("You have not seen "+item.title+" -"+item.rating);
		}
		else
		{
			console.log("You have seen "+item.title+" -"+item.rating);
		}



	});

}





