/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  // create carousel images list
  const carouselImages = ["mountains", "computer", "trees", "turntable"];

  // create elements
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const images = carouselImages.map(() => {
    return document.createElement("img");
  });
  const rightButton = document.createElement("div");

  // add classes to elements
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  // add image src to each image element
  carouselImages.forEach((image, index) => {
    images[index].src = `./assets/carousel/${image}.jpeg`;
  });

  // build component
  carousel.appendChild(leftButton);
  images.forEach(image => {
    carousel.appendChild(image);
  });
  carousel.appendChild(rightButton);

  // add eventListener on click for buttons
  leftButton.addEventListener("click", () => {
    moveImage(-1);
  });

  rightButton.addEventListener("click", () => {
    moveImage(1);
  });

  return carousel;
}

let currentIndex = 1;
let previousIndex = currentIndex;

function moveImage(num) {
  previousIndex = (currentIndex >= 1) ? currentIndex - 1 : 4;
  showImage((currentIndex += num));
}

function showImage(num) {
  const images = document.querySelectorAll(".carousel img");

  if (num > images.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = images.length;
  }

  images[currentIndex - 1].style.display = 'block';
  images[previousIndex].style.display = '';
}

document.querySelector(".carousel-container").appendChild(Carousel());
showImage(currentIndex);
