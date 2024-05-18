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

 fetch('https://coding-week-2024-api.onrender.com/api/data')
            .then(response => response.json())
            .then(data => {
                // Update HTML content with API data
                document.getElementById('dd').innerText = data[0].type;
                document.getElementById('a').innerText = data[0].headline;
                document.getElementById('h').innerText = data[0].date;
                document.getElementById('photo1').src = data[0].image;
                document.getElementById('f').innerText = "Author: " + data[0].author;
                document.getElementById('text155').innerText = data[0].content;
     
     
            
     
     
                document.getElementById('ag').innerText = data[1].type;
                document.getElementById('i').innerText = data[1].headline;
                document.getElementById('k').innerText = data[1].date;
                document.getElementById('photo2').src = data[1].image;
                document.getElementById('ll').innerText = "Author: " + data[1].author;
                document.getElementById('text100').innerText = data[1].content;
     
                  document.getElementById('mmm').innerText = data[2].type;             
                document.getElementById('nnn').innerText = data[2].headline;
                document.getElementById('rrr').innerText = data[2].date;
                document.getElementById('photo3').src = data[2].image;
                document.getElementById('ppp').innerText = "Author: " + data[2].author;
                document.getElementById('text8').innerText = data[2].content;
     
     
                document.getElementById('s').innerText = data[3].type;     
                document.getElementById('u').innerText = data[3].headline;
                document.getElementById('y').innerText = data[3].date;
                document.getElementById('photo4').src = data[3].image;
                document.getElementById('w').innerText = "Author: " + data[3].author;
                document.getElementById('text7').innerText = data[3].content;
     
              
     
     
     
     
     
     
                document.getElementById('theme1').innerText = data[4].type;    
                document.getElementById('bbbc').innerText = data[4].headline;
                document.getElementById('sss').innerText = data[4].date;
                document.getElementById('bbb').src = data[4].image;
                document.getElementById('f').innerText = "Author: " + data[04].author;
                document.getElementById('bbbd').innerText = data[4].content;
     
     
               document.getElementById('theme2').innerText = data[5].type;    
                document.getElementById('gga').innerText = data[5].headline;
                document.getElementById('ggg').innerText = data[5].date;
                document.getElementById('aka').src = data[5].image;
                document.getElementById('f').innerText = "Author: " + data[5].author;
                document.getElementById('ggb').innerText = data[5].content;
     
     
     
                  document.getElementById('theme3').innerText = data[6].type;   
                document.getElementById('head1').innerText = data[6].headline;
                document.getElementById('date1').innerText = data[6].date;
                document.getElementById('img1').src = data[6].image;
                document.getElementById('f').innerText = "Author: " + data[6].author;
                document.getElementById('text1').innerText = data[6].content;
     
     
     
                  document.getElementById('theme4').innerText = data[7].type;    
                document.getElementById('head2').innerText = data[7].headline;
                document.getElementById('date2').innerText = data[7].date;
                document.getElementById('img2').src = data[7].image;
                document.getElementById('f').innerText = "Author: " + data[7].author;
                document.getElementById('text2').innerText = data[7].content;
     
     
     
                    document.getElementById('theme5').innerText = data[8].type; 
                document.getElementById('head3').innerText = data[8].headline;
                document.getElementById('date3').innerText = data[8].date;
                document.getElementById('img3').src = data[8].image;
                document.getElementById('f').innerText = "Author: " + data[8].author;
                document.getElementById('text3').innerText = data[8].content;
     
     
     
     
                     document.getElementById('theme6').innerText = data[9].type;
                document.getElementById('head4').innerText = data[9].headline;
                document.getElementById('date4').innerText = data[9].date;
                document.getElementById('img4').src = data[9].image;
                document.getElementById('f').innerText = "Author: " + data[9].author;
                document.getElementById('text4').innerText = data[9].content;
            })
            .catch(error => console.error('Error fetching data:', error));


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



