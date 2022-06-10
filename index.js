
// Generating random numbers for the value of the dices 

var randomnumber1 = (Math.floor(Math.random()*6)+1);
var randomnumber2 = (Math.floor(Math.random()*6)+1);

// Generating the random dice image

var randomdice1 = "images/" + randomnumber1 +".png"; 
var randomdice2 = "images/" + randomnumber2 +".png";

// Loading random images of dice after every refresh 

var img1 = document.querySelector(".dice1 img"); 
img1.setAttribute("src",randomdice1);
var img2 = document.querySelector(".dice2 img");
img2.setAttribute("src",randomdice2);
var result = document.querySelector("h1");

// Conditions for players to win or draw

if(randomnumber1>randomnumber2)
{
    result.innerHTML="Player 1 won 🏴";
}
else if(randomnumber2 == randomnumber1)
{
    result.innerHTML="Draw 🏳️";
}
else
{
    result.innerHTML="Player 2 won 🏴";

}