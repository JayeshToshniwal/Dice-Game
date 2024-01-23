var randomNum1 = Math.floor(Math.random() * 6) + 1;

let image = document.querySelector(".img1")
if (randomNum1 === 1) {
    image.setAttribute("src", "./images/dice1.png");
}
else if (randomNum1 === 2) {
    image.setAttribute("src", "./images/dice2.png");
}
else if (randomNum1 === 3) {
    image.setAttribute("src", "./images/dice3.png");
}
else if (randomNum1 === 4) {
    image.setAttribute("src", "./images/dice4.png");
}
else if (randomNum1 === 5) {
    image.setAttribute("src", "./images/dice5.png");
}
else if (randomNum1 === 6) {
    image.setAttribute("src", "./images/dice6.png");
}

var randomNum2 = Math.floor(Math.random() * 6) + 1;
let image2 = document.querySelector(".img2")
if (randomNum2 === 1) {
    image2.setAttribute("src", "./images/dice1.png");
}
else if (randomNum2 === 2) {
    image2.setAttribute("src", "./images/dice2.png");
}
else if (randomNum2 === 3) {
    image2.setAttribute("src", "./images/dice3.png");
}
else if (randomNum2 === 4) {
    image2.setAttribute("src", "./images/dice4.png");
}
else if (randomNum2 === 5) {
    image2.setAttribute("src", "./images/dice5.png");
}
else if (randomNum2 === 6) {
    image2.setAttribute("src", "./images/dice6.png");
}


if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins !"
}
if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins !"
}
if (randomNum1 === randomNum2) {
    document.querySelector("h1").innerHTML = "It is a Draw !"
}