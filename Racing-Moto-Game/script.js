var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result");
var game = document.getElementById("game");
var score = document.getElementById("score");
var jumpSound = document.getElementById("jump");
var counter = 0;

blueCar.addEventListener("animationiteration", function () {
    var random = Math.floor(Math.random() * 3) * 130;
    blueCar.style.left = random + "px";
    counter++;
});

window.addEventListener("keydown", function (element) {
    if (element.keyCode == 39) {
        // 39 is keyCode for right Arrow button
        var raceCarLeft = parseInt(
            window.getComputedStyle(raceCar).getPropertyValue("left")
        );
        if (raceCarLeft < 260) {
            raceCar.style.left = raceCarLeft + 130 + "px";
        }
        jumpSound.play();
    }
    if (element.keyCode == 37) {
        // 37 is keyCode for right Arrow button
        var raceCarLeft = parseInt(
            window.getComputedStyle(raceCar).getPropertyValue("left")
        );
        if (raceCarLeft > 0) {
            raceCar.style.left = raceCarLeft - 130 + "px";
        }
        jumpSound.play();
    }
});

setInterval(function Gameover() {
    var blueCarTop = parseInt(
        window.getComputedStyle(blueCar).getPropertyValue("top")
    );
    var blueCarLeft = parseInt(
        window.getComputedStyle(blueCar).getPropertyValue("left")
    );
    var raceCarLeft = parseInt(
        window.getComputedStyle(raceCar).getPropertyValue("left")
    );

    if (blueCarLeft === raceCarLeft && blueCarTop > 350 && blueCarTop < 550) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `Score : ${counter}`;

        counter = 0;
    }
}, 10);
