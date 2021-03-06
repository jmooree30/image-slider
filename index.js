let arrowLeft = document.querySelector("#left");
let arrowRight = document.querySelector("#right");
let counter = 1;
let container = document.querySelector(".container");

arrowLeft.addEventListener("click", function() {
  clearInterval(start);
  if (counter < 1) {
    counter = 3;
  }
  if (counter == 1) {
    container.style.opacity = "0";
    setTimeout(function() {
      container.style.backgroundImage = "url('3.jpg')";
      container.style.opacity = "1";
    }, 1010);
  }
  if (counter == 2) {
    container.style.opacity = "0";
    setTimeout(function() {
      container.style.backgroundImage = "url('2.png')";
      container.style.opacity = "1";
    }, 1010);
  }
  if (counter == 3) {
    container.style.opacity = "0";
    setTimeout(function() {
      container.style.backgroundImage = "url('1.jpg')";
      container.style.opacity = "1";
    }, 1010);
  }
  counter -= 1;
});

arrowRight.addEventListener("click", function() {
  clearInterval(start);
  container = document.querySelector(".container");
  if (counter > 3) {
    counter = 1;
    imageIndex = 0;
  }
  if (counter == 1) {
    container.style.opacity = "0";
    setTimeout(function() {
      container.style.backgroundImage = "url('2.png')";
      container.style.opacity = "1";
    }, 1010);
  }
  if (counter == 2) {
    container.style.opacity = "0";
    setTimeout(function() {
      container.style.backgroundImage = "url('3.jpg')";
      container.style.opacity = "1";
    }, 1010);
  }
  if (counter == 3) {
    container.style.opacity = "0";
    setTimeout(function() {
      container.style.backgroundImage = "url('3.jpg')";
      container.style.opacity = "1";
    }, 1010);
  }
  counter += 1;
});

var imageArray = ["2.png", "3.jpg", "1.jpg"];
var imageIndex = 0;

function changeImage() {
  container.style.backgroundImage = `url(${imageArray[imageIndex]})`;
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

window.onload = function() {
  start = setInterval(changeImage, 2000);
};
