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

Timer with Bootstrap 5 and chime sound added
============================================
`:information_source:` It is based on the `timer <#timer>`_ project

.. raw:: html

  <p align="center">
    <img src="./projects/timer_bootstrap/images/timer.png">
  </p>

- **Code:**

  - `./projects/timer_bootstrap (github) <./projects/timer_bootstrap>`_
  - `codepen.io <https://codepen.io/raul23/pen/xxaEeEy>`_
- **Languages:** JavaScript, HTML, CSS, Bootstrap 5
- **Description:** You can set the timer (its minutes and seconds), start it and stop it. 
- **Functionalities**: Same functionalities as the other `timer <#timer>`_ project but this time a
  chime sound is played at the end (twice in a row) when the timer runs out time. If the time is stopped
  by pressing on the stop button, no sound is played.
  
    The sound (*mp3*) is taken from `freesoundslibrary.com <https://www.freesoundslibrary.com/ding-ding-sound-effect/>`_
    
     License: `Attribution 4.0 International (CC BY 4.0) <https://creativecommons.org/licenses/by/4.0/>`_. 
     You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or 
     non-commercial purposes.
  
