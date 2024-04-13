
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var image1 = document.querySelector(".img1");
meow = `/images/dice${randomNumber1}.png`;

image1.setAttribute("src", meow);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var image2 = document.querySelector(".img2");

bow = `/images/dice${randomNumber2}.png`;
image2.setAttribute("src", bow);


if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="player-1 won🎉"
    // document.querySelector("h1").innerHTML("player-1 won🎉")
} else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="player-2 won🎉"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}





