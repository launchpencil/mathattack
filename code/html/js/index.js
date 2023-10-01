function gameover() {
    isplaying = false;
    clearInterval(gametimer);
    time = 10
    console.log('game ended: ' + score)
    setTimeout(function() {
        alert("ゲームオーバー\nスコア：" + score);
        score = 0;
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