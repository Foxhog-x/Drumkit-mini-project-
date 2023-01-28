
console.log($("h1").css("color", "rgb(255, 140, 177)"));
$("h1").addClass("big");

//DETECTING A KEY PRESS
var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", no_of_click);

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;


        makeSound(buttonInnerHTML);

        buttonAnimatior(buttoninnerHTML);

    });
    //CREATEING AN EVENT OF KEY PRESS
    document.addEventListener("keypress", function (event) {
        makeSound(event, key);

        buttonAnimatior(event, key);
    });
    function makeSound(key) {
        switch (key) {
            case 'W':
                var audio1 = new Audio('sounds/sound1.wav');
                audio1.play();
                break;
            case 'A':
                var audio = new Audio('sounds/sound2.wav');
                audio.play();
                break;
            case 'S':
                var audio = new Audio('sounds/sound3.wav');
                audio.play();
                break;
            case 'D':
                var audio = new Audio('sounds/sound4.wav');
                audio.play();
                break;
            case 'J':
                var audio = new Audio('sounds/sound5.wav');
                audio.play();
                break;
            case 'K':
                var audio = new Audio('sounds/sound8.wav');
                audio.play();
                break;
            case 'L':
                var audio = new Audio('sounds/sound6.wav');
                audio.play();
                break;

            default:
                break;
        }

    };

}






function buttonAnimatior(currentKey) {
    activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

}


function playaudio() {

    var audio = new Audio('sounds/sound1.wav');
    audio.play();

}




var add = 0


function handleClick() {
    alert("I got Clicked");
}
function no_of_click() {

    add++
    document.querySelector("h2").innerHTML = `No of click : ${add}`

}


$("body").keypress(function (event) {

    $("h1").text(event.key);
});