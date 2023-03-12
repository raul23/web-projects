=====================
Personal web projects
=====================
.. contents:: **Contents**
   :depth: 5
   :local:
   :backlinks: top

Steering behaviors
==================
A port of Paul Roberts' C# implementation of all steering behaviors
-------------------------------------------------------------------
.. raw:: html

   <div align="center">
    <a href="https://codepen.io/raul23/full/KKxQKzK" target="_blank">
      <img src="https://raw.githubusercontent.com/raul23/steering-behaviors/main/images/combining_fullscreen_with_options.png">
    </a>
    <p align="center">Green "zombies" wandering, flocking and avoiding obstacles including the user-controlled red "zombie"</p>
  </div>

**Description**

`:information_source:` 

 I ported the steering behaviors implemented in C# (+ Unity) code from Paul Roberts' 
 book `Artificial Intelligence in Games <https://www.routledge.com/Artificial-Intelligence-in-Games/Roberts/p/book/9781032033228>`_ to 
 JavaScript using the ``phase.js`` 2D game development library.
 
**JavaScript port:** you can run the JavaScript code (which uses ``phaser.js``) through your browser via codepen.io

- `codepen.io <https://codepen.io/raul23/full/KKxQKzK>`_ (fullscreen)
- `codepen.io <https://codepen.io/raul23/pen/KKxQKzK>`_ (source code)
- `github.com <https://github.com/raul23/steering-behaviors/tree/main/code/combining>`_ (source code)

- The author used zombies invading a shopping mall in search of fresh brains as a backdrop for a simple game where you will
  implement and test different steering behaviors exhibited by the horde of zombies. 
  
  In the C# game, each zombie is represented as a green dot
  on the screen and can be spawned at specific places and at a certain rate during the game. The user controls a 
  black dot that can shoot at the zombies with the spacebar.
  
  .. raw:: html

      <div align="center">
       <a href="https://www.routledge.com/Artificial-Intelligence-in-Games/Roberts/p/book/9781032033228" target="_blank">
         <img src="https://raw.githubusercontent.com/raul23/flocking-algorithms/main/images/book_project.png">
       </a>
       <p align="center">From Paul Roberts' book <i>Artificial Intelligence in Games</i>, p.56</p>
      </div>
  
  `:information_source:` 
  
   - In the JavaScript port, green balls serve as a substitute for zombies.
   - Also for some of the steering behaviors, the user can control a red "zombie". For example, in the case of the 
     avoidance JavaScript implementation, 
     the user can move the red "zombie" anywhere on the canvas and the green "zombies" will try to avoid it like any other
     obstacles.
     
     .. raw:: html

         <div align="center">
          <a href="https://codepen.io/raul23/full/KKxQKzK" target="_blank">
            <img src="https://raw.githubusercontent.com/raul23/steering-behaviors/main/images/avoiding_red.png">
          </a>
          <p align="center">Green "zombies" avoiding the red "zombie" that can be controlled by the user</p>
         </div>
- Each steering behavior has an associated weight. These are the default values:

  - Arrive weight: 0.5
  - Avoidance weight: 0.75
  - Flee weight: 0.5
  - Flocking weight: 0.25
  - Seek weight: 0.5
  - Wander weight: 0.25
- The user can control a red "zombie" (.i.e. ball) with the arrow keys and can move it anywhere around the
  canvas so that the other green "zombies" can use it as a target to avoid or follow.
  
  In the case of the arrive behavior, 
  eventually they will cease all movement once they reach an
  equilibrium state where all green "zombies" will be piled on top of each other.
  
  .. raw:: html

      <div align="center">
       <a href="https://codepen.io/raul23/full/KKxQKzK" target="_blank">
         <img src="https://raw.githubusercontent.com/raul23/steering-behaviors/main/images/avoiding_covered_red.png">
       </a>
       <p align="center">The green "zombies" arrived at destination which is the <br/>user-controlled red "zombie" 
       that is completely covered by them.
     </div>
- More information about this project can be found at my GitHub page: `Steering behaviors <https://github.com/raul23/steering-behaviors>`_

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

Timer with Bootstrap 5 and chime sound
======================================
`:information_source:` It is based on the previous `timer <#timer>`_ project

.. raw:: html

  <p align="center">
    <img src="./projects/timer_bootstrap/images/timer.png">
  </p>

- **Code:**

  - `./projects/timer_bootstrap (github) <./projects/timer_bootstrap>`_
  - `codepen.io <https://codepen.io/raul23/pen/xxaEeEy>`_
- **Languages:** JavaScript, HTML, CSS, Bootstrap 5
- **Description:** You can set the timer (its minutes and seconds), start it and stop it. 
- **Functionalities**: Same functionalities as the previous `timer <#timer>`_ project but this time a
  chime sound is played at the end (twice in a row) when the timer runs out of time. If the timer is stopped
  by pressing on the stop button, no sound is played.
  
  The sound (*mp3*) is taken from `freesoundslibrary.com <https://www.freesoundslibrary.com/ding-ding-sound-effect/>`_
    
     License: `Attribution 4.0 International (CC BY 4.0) <https://creativecommons.org/licenses/by/4.0/>`_. 
     You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or 
     non-commercial purposes.
  
