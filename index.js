var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice1="images/dice"+randomNumber1+".png";
var randomDice2="images/dice"+randomNumber2+".png";
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDice1);
image2.setAttribute("src",randomDice2);
if(randomNumber1===randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="Draw😜";
}else if(randomNumber1<randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML = "Player2 Wins🎯";
}else{
    document.querySelectorAll("h1")[0].innerHTML = "🎯Player1 Wins";

}

