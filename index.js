let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "dice" + randomNumber1 + ".png";

let randomImageSource1 = "images/" + randomImage1;

$(".img1").attr("src", randomImageSource1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomImage2;

$(".img2").attr("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
   $("h1").text("Player 1 Wins!");
}
else if (randomNumber1 < randomNumber2) {
    $("h1").text("Player 2 Wins!");
}
else {
    $("h1").text("Draw!");
}