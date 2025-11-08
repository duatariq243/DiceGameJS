
var randomDiceImageLeft = Math.floor(Math.random()*6+1);
var randomDiceImageRight = Math.floor(Math.random()*6+1);
var randomImage1 = "images/dice" + randomDiceImageLeft + ".png";
var randomImage2 = "images/dice" + randomDiceImageRight +".png";

document.getElementsByClassName("img1")[0].setAttribute("src", randomImage1);
document.getElementsByClassName('img2')[0].setAttribute("src", randomImage2);

if(randomDiceImageLeft > randomDiceImageRight){
    document.getElementsByTagName("h1")[0].textContent="Player 1 wins"
}

else if(randomDiceImageLeft < randomDiceImageRight){
    document.getElementsByTagName("h1")[0].textContent="player 2 wins"
}

else {
    document.getElementsByTagName("h1")[0].textContent="Toss nobody wins"
}
;