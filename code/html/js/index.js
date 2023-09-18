function gameover() {
    document.getElementById('time').innerText = 0;
    console.log('game ended: ' + score)
    setTimeout(function() {
        alert("ゲームオーバー\nスコア：" + score);
    }, 1);
}


function startCountdown() {
    console.log("game started!");
    for (let i = 10; i >= 0; i--) {
      setTimeout(function() {
        document.getElementById('time').innerText = i;
        console.log(i);
        if (i == 0) {
            gameover();
        }
      }, (10 - i) * 1000);
    }
  }

function gamestart() {
    don();
    startCountdown(10);
}

gamestart();