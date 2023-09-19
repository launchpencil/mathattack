var question = [
    ['sin0', 'sin180', 'cos90', 'tan0', 'tan180'],//0
    ['tan30', 'tan150'],//r3 1
    ['tan45', 'tan135', 'sin90', 'cos0', 'cos180'],//1
    ['tan60', 'tan120'],//r3
    ['sin60', 'sin120','cos30', 'cos150'],//2 r3
    ['sin45', 'sin135','cos45', 'cos135'],//2 r2
    ['sin30', 'sin150','cos60', 'cos120'],//2 1
    ['tan90']//none
]

var answer = 5
var score = 0
var time = 10

function don() {
    answer = Math.floor(Math.random() * 8);

    console.log('answer: ' + answer);

    document.getElementById('q').innerText = question[answer][Math.floor(Math.random() * question[answer].length)] + '°';
}

document.querySelectorAll('.select').forEach(function(button) {

    button.addEventListener('click', function (event) {
        var clickedElementId = event.currentTarget.id;

        console.log(clickedElementId);

        if (clickedElementId == answer) {
            score++;
            time += 2
            don();
        } else {
            gameover();
        }
    });
});