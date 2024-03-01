var question = [
    [
        "sin<math><mfrac><mn>2</mn><mn>2</mn></mfrac></math>",
        "cos<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>",
        "cos<math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>",
        "sin<math><mfrac><mn>4</mn><mn>2</mn></mfrac></math>",
        "tan<math><mfrac><mn>2</mn><mn>2</mn></mfrac></math>",
        "tan<math><mfrac><mn>4</mn><mn>2</mn></mfrac></math>",
    ],//0
    [
        "tan<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>",
        "tan<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>",
        "tan<math><mfrac><mn>7</mn><mn>6</mn></mfrac></math>",
        "tan<math><mfrac><mn>11</mn><mn>6</mn></mfrac></math>"
    ],//r3 1
    [
        "sin<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>",
        "cos<math><mfrac><mn>4</mn><mn>2</mn></mfrac></math>",
        "cos<math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>",
        "cos<math><mfrac><mn>2</mn><mn>2</mn></mfrac></math>",
        "tan<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>",
        "tan<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>",
        "tan<math><mfrac><mn>5</mn><mn>4</mn></mfrac></math>",
        "tan<math><mfrac><mn>7</mn><mn>4</mn></mfrac></math>"
    ],//1
    [
        "tan<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>",
        "tan<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>",
        "tan<math><mfrac><mn>8</mn><mn>6</mn></mfrac></math>",
        "tan<math><mfrac><mn>10</mn><mn>6</mn></mfrac></math>",
        "tan<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>",
        "tan<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>",
        "tan<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>",
        "tan<math><mfrac><mn>5</mn><mn>3</mn></mfrac></math>"
    ],//r3
    [
        "sin<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>",
        "sin<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>",
        "sin<math><mfrac><mn>8</mn><mn>6</mn></mfrac></math>",
        "sin<math><mfrac><mn>10</mn><mn>6</mn></mfrac></math>",
        "cos<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>",
        "cos<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>",
        "cos<math><mfrac><mn>7</mn><mn>6</mn></mfrac></math>",
        "cos<math><mfrac><mn>11</mn><mn>6</mn></mfrac></math>",
        "sin<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>",
        "sin<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>",
        "sin<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>",
        "sin<math><mfrac><mn>5</mn><mn>3</mn></mfrac></math>"
    ],//2 r3
    [
        "sin<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>",
        "sin<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>",
        "sin<math><mfrac><mn>5</mn><mn>4</mn></mfrac></math>",
        "sin<math><mfrac><mn>7</mn><mn>4</mn></mfrac></math>",
        "cos<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>",
        "cos<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>",
        "cos<math><mfrac><mn>5</mn><mn>4</mn></mfrac></math>",
        "cos<math><mfrac><mn>7</mn><mn>4</mn></mfrac></math>"
    ],//2 r2
    [
        "sin<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>",
        "sin<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>",
        "sin<math><mfrac><mn>7</mn><mn>6</mn></mfrac></math>",
        "sin<math><mfrac><mn>11</mn><mn>6</mn></mfrac></math>",
        "cos<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>",
        "cos<math><mfrac><mn>4</mn><mn>6</mn></mfrac></math>",
        "cos<math><mfrac><mn>8</mn><mn>6</mn></mfrac></math>",
        "cos<math><mfrac><mn>10</mn><mn>6</mn></mfrac></math>",
        "cos<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>",
        "cos<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>",
        "cos<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>",
        "cos<math><mfrac><mn>5</mn><mn>3</mn></mfrac></math>"
    ],//2 1
    [
        "tan<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>",
        "tan<math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>",
    ]//none
    ]

var answer = 5
var score = 0
var time = 10
const regex = /<mn>(\d+)<\/mn>/g;

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

    document.getElementById('q').innerHTML = answerstr + 'π';

    let match;
    let matches = [];

    while ((match = regex.exec(answerstr)) !== null) {
        matches.push(match[1]);
    }
    var number = matches[0] / matches[1]

    if ((answerstr.startsWith('sin') && (1 < number)) ||
        (answerstr.startsWith('cos') && (0.5 < number && number <= 1.5)) ||
        (answerstr.startsWith('tan') && ((0.5 < number && number <= 1) || (1.5 < number && number <= 2)))
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
