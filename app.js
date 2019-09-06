// Function which plays the sound adds the class 'playing' to it
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop the function from running 

    audio.currentTime = 0; // Rewind to the start
    audio.play(); // Play the sound that's associated with the key
    key.classList.add('playing');
}

// Effect is given to the class 'playing', so this is needed to remove the effect after
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // Skip if if it's not transform
    this.classList.remove('playing')
}

// Makes it so the effect is removed immediately following the sound
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', playSound);