document.getElementById('createBoxes').addEventListener('click', function() {
    const boxCount = parseInt(document.getElementById('boxCount').value);
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; // Clear previous boxes
    const boxes = [];
    
    // Create boxes
    for (let i = 0; i < boxCount; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.dataset.index = i; // Store index for reference
        boxesContainer.appendChild(box);
        boxes.push(box);
    }

    // Randomly select a winner box
    const winnerIndex = Math.floor(Math.random() * boxCount);
    const winnerBox = boxes[winnerIndex];

    // Hide input and button, show "Choose" text
    document.querySelector('input').style.display = 'none';
    document.getElementById('createBoxes').style.display = 'none';
    document.getElementById('chooseText').style.display = 'block'; // Show "Choose" text

    // Add click event to each box
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            if (this === winnerBox) {
                // Change background to a horror theme
                document.body.style.background = 'linear-gradient(to right, #000000, #ff0000)';
                document.getElementById('heading').style.display='none';
                document.getElementById('chooseText').style.display='none';
                document.getElementById('message').innerText = 'The End';
                document.getElementById('message').style.display = 'block'; // Show the message
                document.getElementById('boxes').style.display = 'none'; // Hide all boxes
                message.style.fontSize = '5em'; // Increase font size for visibility

                // Show the message for 11 seconds
                setTimeout(() => {
                    // Clear the message and reset the game
                    document.getElementById('message').style.display = 'none'; // Hide the message
                    document.body.style.background = 'linear-gradient(to right, #6a11cb, #2575fc)'; // Reset background
                    document.body.addEventListener('click',resetGame)
                    resetGame(); // Call reset function
                }, 11111); // Wait 11 seconds before resetting
            } else {
                // Fade out the clicked box
                this.style.opacity = '0';
                setTimeout(() => {
                    this.style.display = 'none'; // Hide the clicked box after fade out
                }, 300);
            }
        });
    });
});

// Function to reset the game
function resetGame() {
    location.reload(); // Reload the current page

}
