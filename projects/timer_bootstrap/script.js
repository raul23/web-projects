let intervalID;
let messageTimer = document.getElementById("messageTimer");
let minutesTimer = document.getElementById("minutesTimer");
let secondsTimer = document.getElementById("secondsTimer");
let minutes = parseInt(minutesTimer.value);
let seconds = parseInt(secondsTimer.value);
let prevMinutes = null;
let prevSeconds = null;
let timerStarted = false;
let sound = new Audio("https://raw.githubusercontent.com/raul23/web-projects/main/projects/timer_bootstrap/audio/ding-ding-sound-effect.mp3");
let sound2 = sound.cloneNode(true);

function displaySeconds() {
  if (seconds < 10) {
      secondsTimer.value = "0" + seconds;
    }
    else {
      secondsTimer.value = seconds;
    }
}

function playSound2() {
    sound2.play();
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
    if (seconds > 59 || seconds < 0 || isNaN(seconds)) {
      if (prevSeconds > 59 || prevSeconds < 0 || prevSeconds === null) {
        seconds = 1;
        prevSeconds = seconds;
      }
      else {
        seconds = prevSeconds;
      }
      displaySeconds();
    }
    if (minutes < 0 || isNaN(minutes)) {
      if (prevMinutes < 0 || prevMinutes === null) {
        minutes = 60;
        prevMinutes = minutes;
      }
      else {
        minutes = prevMinutes;
      }
      minutesTimer.value = minutes;
    }
    if (seconds == 0) {
      seconds = 60;
      if (minutes == 0) {
        stopTimer("Time's up!");
        sound.play();
        setTimeout(playSound2, 1000);
        return;
      }
      else {
        minutes -= 1;
        minutesTimer.value = minutes;
      }
    }
    seconds -= 1;
    prevMinutes = minutes;
    prevSeconds = seconds;
    displaySeconds();
  }, 1000);
  messageTimer.placeholder = "Timer started...";
}

function stopTimer(message=null) {
  console.log("stopTimer");
  timerStarted = false;
  clearInterval(intervalID);
  if (message) {
    messageTimer.placeholder = message;
  }
  else {
    messageTimer.placeholder = "Timer stopped!";
  }
  minutesTimer.value = 60;
  secondsTimer.value = "00";
  minutes = minutesTimer.value;
  seconds = 0;
}
