// const map = require("dungeoneer");
const mapBtn = $("#mapBtn");
// const mapHeight = $("#mapHeight");
// const mapWidth = $("#mapWidth");
// const mapName = $("#mapName");
// const mapCanvas = document.getElementById("mapCanvas");
// const ctx = mapCanvas.getContext("2d");
const mapDiv = $("#mapDiv");

// $( document ).ready(function() {
//     ctx.font = "30px Gabriola";
//     ctx.textAlign = "center";
//     ctx.fillText("Generate A Map",mapCanvas.width/2, mapCanvas.height/2);
// });

mapBtn.click(event => {
  // event.preventDefault();
  // ctx.clearRect(0,0, mapCanvas.width, mapCanvas.height)
  console.log("Mapping");
  const mapNum = Math.floor(Math.random() * 15) + 1;
  showMap(mapNum);
});

const showMap = mapNum => {
  const imgSrc = `../images/map-${mapNum}.jpg`;
  mapDiv.attr("src", imgSrc);
  console.log(imgSrc);
};

// const drawMap = mapNum => {
//   image = new Image();
//   image.src = `../images/map-${mapNum}.jpg`;
//   image.onload = function(){
//     ctx.drawImage(image, 300, 300);
//   };
//   console.log(image);
// };
