// Create a variabel called randomNumber1
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

//Pick image based on random number 1
const dice1 = document.querySelector("img.img1");
const dice2 = document.querySelector("img.img2");
dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// Change the title to display the winner
const title = document.getElementsByTagName("h1")[0];
console.log(title);

if (randomNumber1 > randomNumber2) {
    title.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    title.textContent = "Player 2 Wins! 🚩";
} else {
    title.textContent = "It's a Draw!";
}