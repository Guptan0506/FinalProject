// Get the menu toggle button and the nav links
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Toggle the 'active' class on the nav links when the menu toggle is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioPlayer');

    // Function to play audio
    function playAudio() {
        audio.play().then(() => {
            console.log("Audio started playing");
            localStorage.setItem('audioState', 'playing'); // Save the state in localStorage
        }).catch((err) => {
            console.error("Error playing audio: ", err);
        });
    }

    // Add a click event listener to the body
    document.body.addEventListener('click', () => {
        playAudio();  // Play audio on any click on the page
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioPlayer');

    // Function to play audio
    function playAudio() {
        audio.play().then(() => {
            console.log("Audio started playing");
            localStorage.setItem('audioState', 'playing'); // Save the state in localStorage
        }).catch((err) => {
            console.error("Error playing audio: ", err);
        });
    }

    // Add a click event listener to the body
    document.body.addEventListener('click', () => {
        playAudio();  // Play audio on any click on the page
    });
});
