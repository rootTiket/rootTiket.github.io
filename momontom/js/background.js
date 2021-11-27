const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const main = document.querySelector("#background");
const bgimages = document.createElement("img");

bgimages.src = `img/${chosenImage}`;

main.appendChild(bgimages);