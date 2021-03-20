# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Timothy Alexander**

Time spent: **10** hours spent in total

Link to project: (https://glitch.com/edit/#!/light-sound-memory-game)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/4a8bb866-3ea3-4415-b224-3d0e67a781ae%2FGlitchWalkthrough.gif?v=1616276097042)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I did not use any outside resources. I rely on previous experience to create this app.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One of the challenges I encountered was getting the timer to work properly and to have it sequence depending on the event itself.
I thought about sequencing the events since the JavaScript code did not run synchronous functions as reliably as I thought or execute them.
I tried using Promises to leverage the ".then" method to sequence once a Promise has been fulfilled but that turned out to be a little too complicated
to implement in a simple app like this. At the end, I chose to use setTimeout as that was the most simple way to implement the starting and ending of a clock
and try to sequence my code in a way that would help delay the starting of the clock.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
One of my questions would be more involved in how to setup an environment to run web development technologies. That includes the use of VPS, servers,
and proxies to make web development much easier and connect different components such as APIs and static assets in a much cleaner and efficient way.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours I would try to implement the different buttons changing images as well as find more tones to integrate to make it more pleasing and appealing for people. I would also try to make the
game less repetitive and more interactive in the buttons as well as welcoming the players into the game itself.



## License

    Copyright [Timothy Alexander]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.