/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var pattern = []
var progress = 0
var gamePlaying = false
var tonePlaying = false
var volume = 0.5
var guessCounter = 0

var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)

var interval
var strikes = 3
var clueHoldTime = 0 // how long to hold each clue's light/sound
var decayTime = 0
const holdMaxTime = 200
var timer = 10000;

const cluePauseTime = 333  // pause between clues
const nextClueWaitTime = 1000  // how long to wait before starting playback of clue sequence

var getRandomChoice = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min))

var freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 530.2
}

function playTone(btn, len) {
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  tonePlaying = true
  setTimeout(function() {
    stopTone()
  }, len)
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    tonePlaying = true
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
}

function startGame() {
  progress = 0
  gamePlaying = true
  createRandomPattern();
  console.log(pattern)
  document.getElementById("startBtn").classList.add('hidden')
  document.getElementById("stopBtn").classList.remove('hidden')
  resetChances()
  playClueSequence()
  startClock()
}

function stopGame() {
  progress = 0
  gamePlaying = false
  document.getElementById("startBtn").classList.remove('hidden')
  document.getElementById("stopBtn").classList.add('hidden')
  resetClock()
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.")
}

function winGame() {
  stopGame();
  alert("Game Over. You won!")
  resetClock()
}

function lightButton(btn) {
  document.getElementById("btn" + btn).classList.add('lit')
}

function clearButton(btn) {
  document.getElementById("btn" + btn).classList.remove('lit')
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  resetClock()
  guessCounter = 0
  let delay = nextClueWaitTime
  for (let i = 0; i <= progress; i++) {
    console.log("Play single clue: " + pattern[i])
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime
    timer = 10000
  }
  clueHoldTime -= decayTime;
  console.log(clueHoldTime, decayTime)

}

function guess(btn) {
  console.log("User guessed: " + btn)
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    // Guess is correct
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame()
      } else {
        // Advance if correct guess
        progress++
        strikes = 3
        timer = 10000
        resetClock()
        playClueSequence()
        setTimeout(startClock, 1000)
        // setTimeout(startClock, 100)
      }
    } else {
      // Make another guess
      guessCounter++
    }
  } else {
    reduceChances()
    
    if (strikes == 0) {
      loseGame()
      resetChances()
      resetClock()
    }
  }
}

function createRandomPattern() {
  for (let i = 0; i <= 6; i++) {
    pattern[i] = getRandomChoice(1, 6)
  }
  clueHoldTime = pattern.length * 140;
  decayTime = (clueHoldTime - holdMaxTime) / (pattern.length - 1)
}


function resetChances() {
  strikes = 3
  document.getElementById("chances").innerHTML = `You have ${strikes} tries left`
}

function reduceChances() {
  strikes--
  document.getElementById("chances").innerHTML = `You have ${strikes} tries left`
}

function startClock() {
  interval = setInterval(function() {
    document.getElementById("clock").innerHTML = `${timer / 1000}`
    timer -= 1000
    if (timer < 0) {
      resetClock()
      timer = 10000
      loseGame()
    }
  }, 1000)
}

function resetClock() {
  clearInterval(interval) 
}