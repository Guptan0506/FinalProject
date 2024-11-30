// Get the audio player and play button
const audio = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

// Function to play audio and save state in localStorage
function playAudio() {
    audio.play().then(() => {
        // If the audio starts successfully, save the state
        localStorage.setItem('audioState', 'playing');
    }).catch((err) => {
        console.log("Error playing audio: ", err);
    });
}

// Check if audio is already playing in localStorage on page load
window.addEventListener('load', () => {
    if (localStorage.getItem('audioState') === 'playing') {
        // If audio was playing, attempt to play automatically (if the user has interacted before)
        audio.play().catch((err) => {
            console.log("Audio could not start automatically due to browser restrictions: ", err);
        });
    } else {
        // Otherwise, ensure it's paused
        audio.pause();
    }
});

// Event listener to play audio when the user clicks the play button
playButton.addEventListener('click', playAudio);

// Event listener for when the audio starts playing
audio.addEventListener('play', () => {
    localStorage.setItem('audioState', 'playing');  // Save the 'playing' state in localStorage
    console.log('Audio is playing');
});

// Event listener for when the audio is paused
audio.addEventListener('pause', () => {
    localStorage.setItem('audioState', 'paused');  // Save the 'paused' state in localStorage
    console.log('Audio is paused');
});

// Optional: Listen for the audio to finish and set it to paused
audio.addEventListener('ended', () => {
    console.log('Audio has finished playing');
    localStorage.setItem('audioState', 'paused');  // Set the state to 'paused' when the audio ends
});

// Hide play button if audio is already playing
if (localStorage.getItem('audioState') === 'playing') {
    playButton.style.display = 'none';
} else {
    playButton.style.display = 'block';
}
