const playButton = document.getElementById('play-button')
const clearButton = document.getElementById('clear-button')
const pauseButton = document.getElementById('pause-button')
const stopButton = document.getElementById('stop-button')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter

playButton.addEventListener('click', () => {
    playText(textInput.value)
})
clearButton.addEventListener('click', clearText)
pauseButton.addEventListener('click', pauseText)
stopButton.addEventListener('click', stopText)
speedInput.addEventListener('input', () => {
    stopText()
    playText(utternance.text.substring(currentCharacter))
})


const utternance = new SpeechSynthesisUtterance(text)
utternance.addEventListener('end', () => {
    textInput.disabled = false
})
utternance.addEventListener('boundary', e => {
    currentCharacter = e.charIndex
})

function playText(text) {
    if (speechSynthesis.pause && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }
    if (speechSynthesis.speaking) return
    utternance.text = text
    utternance.rate = speedInput.value || 1
    textInput.disabled = true
    speechSynthesis.speak(utternance)
}

function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause()
}

function clearText() {
    console.log("heyu")
    clear = document.getElementById("text")
    clear.value = ""
}

function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}