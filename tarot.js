// Function to hide checkerboard and reveal new content after 10 seconds
function showNewContent() {
    const checkerboard = document.getElementById('checkerboard');
    const movingImage = document.getElementById('movingImage');
    const newContent = document.getElementById('newContent');

    // First, make sure the checkerboard stays visible for 10 seconds
    setTimeout(function() {
        // Now, after 10 seconds, start sliding the checkerboard up and hide the logo
        checkerboard.style.transform = 'translateY(-100%)';  // Slide up the checkerboard
        movingImage.style.display = 'none';

        // After 1 second (allowing checkerboard to slide up), reveal new content
        setTimeout(function() {
            newContent.style.display = 'block';
            newContent.classList.add('slide-up');
        }, 1000); // 1 second delay for content to appear after checkerboard slide-up
    }, 5000); // Delay before sliding up (10 seconds)
}

// Start the process once the page is loaded
window.onload = function() {
    showNewContent();
};





    // Card flip animation
    document.addEventListener("DOMContentLoaded", function () {
      const cards = document.querySelectorAll(".card");
      const newContent = document.querySelector(".new-content");
      let flippedCards = 0;

      setTimeout(() => {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("flipped");
            flippedCards++;

            if (flippedCards === cards.length) {
                setTimeout(() => {
                    cards.forEach(card => {
                        card.classList.add('move-right');
                    });
                }, 3000); // Wait for the flip animation to finish
            }
            }, index * 1000); // Delay each flip slightly
        });
      }, 8000); // Delay before flipping the cards
    });

    





    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
        const fadeImage = document.querySelector(".fade-image");
        const fadeText = document.querySelector(".fade-text");
        const fadeImage2 = document.querySelector(".fade-image2"); // Assuming you have these elements
        const fadeText2 = document.querySelector(".fade-text2");
        const fadeImage3 = document.querySelector(".fade-image3");
        const fadeText3 = document.querySelector(".fade-text3");
        const button1 = document.querySelector(".fade1-button");
        const button2 = document.querySelector(".fade2-button");
        const button3 = document.querySelector(".fade3-button");
    
        let click1 = false; // Track if button1 was clicked
        let click2 = false; // Track if button2 was clicked
        let click3 = false; // Track if button3 was clicked
    
        // Delay before the first flip starts
        setTimeout(() => {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("flipped");
    
                    // Once all cards are flipped, move them right
                    if (index === cards.length - 1) {
                        setTimeout(() => {
                            cards.forEach(card => card.classList.add("move-right"));
                            // Ensure cards have moved before fading in the image and text
                            setTimeout(() => {
                                fadeImage.classList.add("fade-in");
                                fadeText.classList.add("fade-in");
                            }, 500);
                        }, 1500);
                    }
                }, index * 800);
            });
        }, 7000);
    
        button1.addEventListener("click", () => {
            if (!click1) { // Only run if button1 hasn't been clicked yet
                click1 = true; // Mark the button as clicked
                setTimeout(() => {
                    cards.forEach(card => card.classList.add("move-next"));
                    
                    setTimeout(() => {
                        // Adjust the z-index for the cards
                        cards[0].style.zIndex = "1";  // Move the first card to the front
                        cards[1].style.zIndex = "2";  // Move the second card in the middle
                        cards[2].style.zIndex = "3";  // Move the third card behind
        
                        // Hide image2 and text2
                        let img2 = document.getElementById("fadeImage2");
                        let txt2 = document.getElementById("fadeText2");
                        if (img2) {
                            img2.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
                        if (txt2) {
                            txt2.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
        
                        // Hide image3 and text3
                        let img3 = document.getElementById("fadeImage3");
                        let txt3 = document.getElementById("fadeText3");
                        if (img3) {
                            img3.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
                        if (txt3) {
                            txt3.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
        
                        // Show image1 and text1 with fade-in effect
                        let img1 = document.getElementById("fadeImage1");
                        let txt1 = document.getElementById("fadeText1");
                        if (img1) {
                            img1.classList.add("fade-in"); // Add fade-in class to trigger fade-in effect
                        }
                        if (txt1) {
                            txt1.classList.add("fade-in"); // Add fade-in class to trigger fade-in effect
                        }
                    }, 500); // Add a delay before applying styles
                }, 500); // Add a delay for card movement
            }
            click1 = false; // Reset click1 state
        });
        
        button2.addEventListener("click", () => {
            if (!click2) { // Only run if button2 hasn't been clicked yet
                click2 = true; // Mark the button as clicked
                setTimeout(() => {
                    cards.forEach(card => card.classList.add("move-next"));
        
                    setTimeout(() => {
                        // Adjust the z-index for the cards
                        cards[0].style.zIndex = "1";  // Move the first card behind
                        cards[1].style.zIndex = "3";  // Bring the second card to the front
                        cards[2].style.zIndex = "2";  // Move the third card in the middle
        
                        // Hide image1 and text1
                        let img1 = document.getElementById("fadeImage1");
                        let txt1 = document.getElementById("fadeText1");
                        if (img1) {
                            img1.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
                        if (txt1) {
                            txt1.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
        
                        // Hide image3 and text3
                        let img3 = document.getElementById("fadeImage3");
                        let txt3 = document.getElementById("fadeText3");
                        if (img3) {
                            img3.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
                        if (txt3) {
                            txt3.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
        
                        // Show image2 and text2 with fade-in effect
                        let img2 = document.getElementById("fadeImage2");
                        let txt2 = document.getElementById("fadeText2");
                        if (img2) {
                            img2.classList.add("fade-in"); // Add fade-in class to trigger fade-in effect
                        }
                        if (txt2) {
                            txt2.classList.add("fade-in"); // Add fade-in class to trigger fade-in effect
                        }
                    }, 500); // Add a delay before applying styles
                }, 500); // Add a delay for card movement
            }
            click2 = false; // Reset click2 state
        });
        
        button3.addEventListener("click", () => {
            if (!click3) { // Only run if button3 hasn't been clicked yet
                click3 = true; // Mark the button as clicked
                setTimeout(() => {
                    cards.forEach(card => card.classList.add("move-next"));
        
                    setTimeout(() => {
                        // Adjust the z-index for the cards
                        cards[0].style.zIndex = "3";  // Move the first card behind
                        cards[1].style.zIndex = "2";  // Move the second card in the middle
                        cards[2].style.zIndex = "1";  // Bring the third card to the front
        
                        // Hide image1 and text1
                        let img1 = document.getElementById("fadeImage1");
                        let txt1 = document.getElementById("fadeText1");
                        if (img1) {
                            img1.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
                        if (txt1) {
                            txt1.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
        
                        // Hide image2 and text2
                        let img2 = document.getElementById("fadeImage2");
                        let txt2 = document.getElementById("fadeText2");
                        if (img2) {
                            img2.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
                        if (txt2) {
                            txt2.classList.remove("fade-in"); // Remove fade-in class to hide
                        }
        
                        // Show image3 and text3 with fade-in effect
                        let img3 = document.getElementById("fadeImage3");
                        let txt3 = document.getElementById("fadeText3");
                        if (img3) {
                            img3.classList.add("fade-in"); // Add fade-in class to trigger fade-in effect
                        }
                        if (txt3) {
                            txt3.classList.add("fade-in"); // Add fade-in class to trigger fade-in effect
                        }
                    }, 500); // Add a delay before applying styles
                }, 500); // Add a delay for card movement
            }
            click3 = false; // Reset click3 state
        });
        

    });
    
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            document.querySelectorAll(".fade1-button").forEach(button => {
                button.classList.add("show");
            });
        }, 10000);
    });

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            document.querySelectorAll(".fade2-button").forEach(button => {
                button.classList.add("show");
            });
        }, 10000);
    });

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            document.querySelectorAll(".fade3-button").forEach(button => {
                button.classList.add("show");
            });
        }, 10000);
    });

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            document.querySelectorAll(".fade-button").forEach(button => {
                button.classList.add("show");
            });
        }, 10000);
    });
    