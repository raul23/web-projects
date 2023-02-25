=====================
Personal web projects
=====================
.. contents:: **Contents**
   :depth: 5
   :local:
   :backlinks: top
   
Timer
=====
.. raw:: html

  <p align="center">
    <img src="./projects/timer/images/timer.png">
  </p>

- **Code:**

  - `./projects/timer (github) <./projects/timer>`_
  - `codepen.io <https://codepen.io/raul23/pen/rNZMyzZ>`_
- **Languages:** JavaScript, HTML, CSS
- **Description:** You can set the timer (its minutes and seconds), start it and stop it.
- **Functionalities**:

  - Minutes must be at least 0
  - Seconds must be between 0 and 59 (inclusive)
  - The minutes and seconds can be incremented/decremented with arrows (up/down) or entered directly into the input field
  - If minutes or seconds are negative or ``NaN`` (when entered directly into the input field), they will be rejected and the previous 
    valid ones will be used to continue the countdown of the timer
    
    Minutes or seconds are ``NaN`` if we enter the plus and minus signs in the input field, e.g. ``+-54``
  - While the timer is running, you can set its minutes and seconds and the timer will start its count from the
    newly entered minutes/seconds
  - If the timer is running and you press start, the START button doesn't have any effect on the timer, i.e. the timer continues its countdown
  - When the seconds are between 0 and 9 (inclusive), the seconds are displayed with a leading zero, e.g. ``07``
  - When the timer runs out of time, the message "Time's up!" is displayed and then the timer displays its initial state (60:00) 
- **NOTES:**

  - ``setInterval()`` calls an anonymous function every second that updates the timer's display (minutes and seconds) and
    shows the appropriate message (e.g. "Timer started...") below the time
  - When the STOP button is pressed, ``setInterval()`` is stopped with ``clearInterval()`` and the timer's display is initialized to 60:00

Timer with Bootstrap
====================
TODO
