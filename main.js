// Global Variable
let imgPaths = [
  "po.png",
  "tigress.png",
  "viper.png",
  "monkey.png",
  "mantis.png",
  "crane.png"
];
let imgIndex = 0;

// Kung Fu Panda Gallery

// Create image gallery
let imgContainerEl = document.getElementById("img-container-one");
// using ___.length allows you to add more images and it will update automatically
for (let i = 0; i < imgPaths.length; i++) {
  imgContainerEl.innerHTML += "<img src ='images/" + imgPaths[i] + "'>";
}

// 
// Kung Fu Panda Slideshow

// Event Listeners
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);
document.getElementById("random").addEventListener("click", randomSlide);

// Event Functions

// Next Slide
function nextSlide() {
  // Increment Index, loop if necessary
  imgIndex++;
  // imgIndex == imgPaths.length updates whenever new indexes are added
  // == is the comparison operator, = is the assignment operator
  if (imgIndex == imgPaths.length) {
    imgIndex = 0;
  }

  // Display the new image
  document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
}

// Previous Slide
function prevSlide() {
  // increment index
  imgIndex--;

  // loop to reset
  if (imgIndex < 0) {
    imgIndex = imgPaths.length - 1;
  }

  // Display new image
  document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
}

// Random Slide
function randomSlide() {
  // Get a random index: integer b/t 0 and up to the length of the array (exclusive)
  imgIndex = Math.randomInt(0, imgPaths.length);

  // Display new image
  document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
}
