const buttonPrevious = document.getElementById("previous");
const buttonNext = document.getElementById("next");

let count = 0;

const images = ["./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg", "./images/img4.jpg"];
//Initializing the image
let currentImage = images[0];

function changeImage(image) {
    let imageLocation = document.getElementById("square");
    console.log(imageLocation)
    imageLocation.innerHTML = `<img src=${image} alt="a cute picture of a cat">`; 
    console.log(count)
}

buttonPrevious.onclick = function() {
    count--;
    currentImage = images[((count%images.length)+images.length)%images.length];
    changeImage(currentImage);
} 

buttonNext.onclick = function() {
    count++;
    currentImage = images[((count%images.length)+images.length)%images.length];
    changeImage(currentImage);
}




