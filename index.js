 const getRandomNo=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1)) +min;
 }


var randomNumber=getRandomNo(1,6);//For dice 1
var randomNumber2=getRandomNo(1,6);//For dice 2
console.log(randomNumber);
console.log(randomNumber2);

var imgChange=document.querySelector(".img1"); //for dice 1
var imgChange2=document.querySelector(".img2"); //for dice 2

//to change the images of dice 1
if(randomNumber===1){
    imgChange.setAttribute("src","images/dice1.png");
}
else if(randomNumber===2){
    imgChange.setAttribute("src","images/dice2.png");
}
else if(randomNumber===3){
    imgChange.setAttribute("src","images/dice3.png");
}
else if(randomNumber===4){
    imgChange.setAttribute("src","images/dice4.png");
}
else if(randomNumber===5){
    imgChange.setAttribute("src","images/dice5.png");
}
else if(randomNumber===6){
    imgChange.setAttribute("src","images/dice6.png");
}


//to change the images of dice 2
if(randomNumber2===1){
    imgChange2.setAttribute("src","images/dice1.png");
}
else if(randomNumber2===2){
    imgChange2.setAttribute("src","images/dice2.png");
}
else if(randomNumber2===3){
    imgChange2.setAttribute("src","images/dice3.png");
}
else if(randomNumber2===4){
    imgChange2.setAttribute("src","images/dice4.png");
}
else if(randomNumber2===5){
    imgChange2.setAttribute("src","images/dice5.png");
}
else if(randomNumber2===6){
    imgChange2.setAttribute("src","images/dice6.png");
}


//to display which player wins

let playerWins=document.querySelector("h1");//to select the element h1
if(randomNumber>randomNumber2)
{
    playerWins.innerHTML="Player 1 Wins!"
}
else if(randomNumber===randomNumber2)
{
    playerWins.innerHTML="Draw!"
}
else{
    playerWins.innerHTML="Player 2 Wins!"
}

//console.log(playerWins);
