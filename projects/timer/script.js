let intervalID;
let messageTimer = document.getElementById("messageTimer");
let minutesTimer = document.getElementById("minutesTimer");
let secondsTimer = document.getElementById("secondsTimer");
let minutes = parseInt(minutesTimer.value);
let seconds = parseInt(secondsTimer.value);
let timerStarted = false;

function displaySeconds() {
  if (seconds < 10) {
      secondsTimer.value = "0" + seconds;
    }
    else {
      secondsTimer.value = seconds;
    }
}

function startTimer() {
  console.log("startTimer clicked!");
  if (timerStarted) {
    return;
  }
  timerStarted = true;
  intervalID = setInterval(function(){
    console.log("Tic toc");
    minutes = parseInt(minutesTimer.value);
    seconds = parseInt(secondsTimer.value);
    let prevSeconds = null;
    if (seconds > 59 || seconds < 0) {
      if (prevSeconds > 59 || prevSeconds < 0 || prevSeconds === null) {
        seconds = 1;
        prevSeconds = seconds;
      }
      else {
        seconds = prevSeconds;
      }
      displaySeconds()
    }
    if (seconds == 0) {
      seconds = 60;
      if (minutes == 0) {
        stopTimer("Time's up!");
        return;
      }
      else {
        minutes -= 1;
        minutesTimer.value = minutes;
      }
    }
    seconds -= 1;
    prevSeconds = seconds;
    displaySeconds()
  }, 1000);
  messageTimer.innerText = "Timer started...";
}
function stopTimer(message=null) {
  console.log("stopTimer");
  timerStarted = false;
  clearInterval(intervalID);
  if (message) {
    messageTimer.innerText = message;
  }
  else {
    messageTimer.innerText = "Timer stopped!";
  }
  minutesTimer.value = 60;
  secondsTimer.value = "00";
  minutes = minutesTimer.value;
  seconds = 0;
}

