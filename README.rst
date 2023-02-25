============
web projects
============
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
    valid ones will be used to continue the count of the timer
    
    Minutes or seconds are ``NaN`` if we enter the plus and minus signs in the input field, e.g. ``+-54``
  - While the timer is running, you can set its minutes and seconds and the timer will start its count from the
    newly entered minutes/seconds
  - If the timer is running and you press start, the START button doesn't have any effect on the timer, i.e. the timer continues its count
  
