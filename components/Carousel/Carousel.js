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

// Create carousel component
function carouselMaker() {
  // Add elements
  let carousel = document.createElement('div');
  let leftButton = document.createElement('div');
  let img1 = document.createElement('img');
  let img2 = document.createElement('img');
  let img3 = document.createElement('img');
  let img4 = document.createElement('img');
  let rightButton = document.createElement('div');
  // Add classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  // Add text content and img src
  leftButton.textContent = '<';
  rightButton.textContent = '>';
  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";
  // Append them
  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  let index = 0;
  let imgArr = [img1, img2, img3, img4];
  imgArr[index].style.display = 'inline-block';
  
  leftButton.addEventListener('click', () => {
    if (index === 0) {
      index = 0;
      imgArr[index].style.display = 'inline-block';
    } else {
      imgArr[index].style.display = 'none';
      index -= 1;
      imgArr[index].style.display = 'inline-block';
    }
  })
  rightButton.addEventListener('click', () => {
    if (index === 3) {
      index = 3;
      imgArr[index].style.display = 'inline-block';
    } else {
      imgArr[index].style.display = 'none';
      index += 1;
      imgArr[index].style.display = 'inline-block';
    }
  })

  return carousel;
}

let carouselCont = document.querySelector('.carousel-container');
carouselCont.appendChild(carouselMaker(image1))