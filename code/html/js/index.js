function gameover() {
  isplaying = false;
  clearInterval(gametimer);
  time = 10
  score = 0;
  console.log('game ended: ' + score)
  setTimeout(function() {
      alert("ゲームオーバー\nスコア：" + score);
      gamestart();
  }, 1);
}


let gametimer;
let isplaying = false;

function startCountdown() {
  console.log("game started!");
  isplaying = true;

  let time = 10;
  
  function countdown() {
    window.time = time;
    console.log(time);
    
    if (time === 0) {
      gameover();
      clearInterval(gametimer);
    } else {
      time--;
    }
  }

  countdown(); // 最初の実行

  gametimer = setInterval(countdown, 1000); // 1秒ごとにカウントダウン関数を実行
}

function gamestart() {
    resetbutton();
    don();
}

gamestart();
=======
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

    if (answerstr.startsWith('cos') || answerstr.startsWith('tan')) {
        if (answerstr.replace(/[^0-9]/g, '') > 90) {
            replacebutton();
        } else {
            resetbutton();
        }
    } else {
        resetbutton();
    }
}

don();
resetbutton();

document.querySelectorAll('.select').forEach(function(button) {

    button.addEventListener('click', function (event) {
        var clickedElementId = event.currentTarget.id;

        console.log(clickedElementId);

        if (clickedElementId == answer) {
            score++;
            don();
        } else {
            alert("ゲームオーバー\nスコア：" + score)
        }
    });
});
