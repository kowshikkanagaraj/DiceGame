var randomNumber1=Math.floor(Math.random()*6)+1;

var dice="dice"+randomNumber1+".png";

var diceimage="./images/"+dice;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", diceimage);

/*--------------------------------------------------*/

var randomNumber2=Math.floor(Math.random()*6+1);

var dice2="dice"+randomNumber2+".png";

var diceimage2="./images/"+dice2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",diceimage2);

/*--------------------------------------------------*/
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Game draw [-_-]"
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!"
}
else{document.querySelector("h1").innerHTML="Player 2 wins!"}