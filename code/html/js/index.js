var isGameover = false;

function gameover() {
    isGameover = true
    document.getElementById('time').innerText = 0;
    console.log('game ended: ' + score)
    setTimeout(function() {
        alert("ゲームオーバー\nスコア：" + score);
        gamestart();
    }, 1);
}


function startCountdown() {
    console.log("game started!");
    for (let time = 10; time >= 0; time--) {
      if (isGameover) {
        break;
      }
      setTimeout(function() {
        document.getElementById('time').innerText = time;
        console.log(i);
        if (time == 0) {
            gameover();
        }
      }, (10 - time) * 1000);
    }
  }

function gamestart() {
    isGameover = false;
    
    resetbutton();
    don();

    time = 10
}

gamestart();
startCountdown();