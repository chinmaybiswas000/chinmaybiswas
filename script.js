function toggleText(textId, event) {
    event.stopPropagation(); // Stop the event from propagating to the body
    var textElement = document.getElementById(textId);
    var isVisible = textElement.style.display === 'block';
    // Hide all potentially visible elements first (if you have multiple toggles)
    document.querySelectorAll('.hiddenText').forEach(function(elem) {
        elem.style.display = 'none';
    });
    // Toggle based on previous state
    textElement.style.display = isVisible ? 'none' : 'block';
}

// Listener on the document to close the text if clicked outside
document.addEventListener('click', function(event) {
    var openTexts = document.querySelectorAll('.hiddenText');
    openTexts.forEach(function(elem) {
        if (elem.style.display === 'block') {
            elem.style.display = 'none';
        }
    });
});


 function showAlert() {
            alert("This is an alert message!");
        }



   function openModal() {
            var modal = document.getElementById('myModal');
            modal.style.display = "block";
        }

        // Function to close the modal
        function closeModal() {
            var modal = document.getElementById('myModal');
            modal.style.display = "none";
        }

        // Function to play the audio
        function playAudio() {
            var audio = document.getElementById('backgroundAudio');
            audio.muted = false; // Unmute after user interaction
            audio.play().then(function() {
                // Audio playback started successfully
                closeModal(); // Close the modal after playing audio
            }).catch(function(error) {
                console.error('Autoplay was prevented: ', error);
                // Handle autoplay restriction, e.g., display a play button
            });
        }
/*https://coding-week-2024-api.onrender.com/api/data*/



