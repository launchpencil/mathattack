var question = [
    [],//0
    [],//r3 1
    [],//1
    [],//r3
    [],//2 r3
    [],//2 r2
    [],//2 1
    []//none
]

var answer = 5
var score = 0
var time = 10

window.onload = setInterval(function () {
    document.getElementById('time').innerText = time;
}, 100);

function resetbutton() {
    var moTags = document.getElementsByTagName("mo");

    for (var i = 0; i < moTags.length; i++) {
    moTags[i].textContent = "";
    }
}

function replacebutton() {
    var moTags = document.getElementsByTagName("mo");

    for (var i = 0; i < moTags.length; i++) {
    moTags[i].textContent = "-";
    }
}

function don() {
    answer = Math.floor(Math.random() * 8);
    answerstr = question[answer][Math.floor(Math.random() * question[answer].length)]

    console.log('answer: ' + answer);

    document.getElementById('q').innerText = answerstr + '°';

    var number = parseInt(answerstr.replace(/[^0-9]/g, ''))

    if ((answerstr.startsWith('sin') && (180 < number)) ||
        (answerstr.startsWith('cos') && (90 < number && number <= 270)) ||
        (answerstr.startsWith('tan') && ((90 < number && number <= 180) || (270 < number && number <= 360)))
    ) {
        replacebutton();
    } else {
        resetbutton();
    }
}

document.querySelectorAll('.select').forEach(function(button) {

    button.addEventListener('click', function (event) {

        var clickedElementId = event.currentTarget.id;

        console.log(clickedElementId);

        if (clickedElementId == answer) {
            if (!isplaying) {
                startCountdown();
            }
            score++;
            time += 1
            don();
        } else {
            gameover();
        }
    });
});
