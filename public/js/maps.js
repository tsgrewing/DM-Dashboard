// const dungeoneer = require("dungeoneer");
const mapForm = $("#mapForm");
const mapHeight = $("#mapHeight");
const mapWidth = $("#mapWidth");
// const mapName = $("#mapName");
const mapCanvas = document.getElementById("mapCanvas");

$(document).ready(() => {
  const ctx = mapCanvas.getContext("2d");
  ctx.font = "30px Gabriola";
  ctx.textAlign = "center";
  ctx.fillText("Generate A Map", mapCanvas.width / 2, mapCanvas.height / 2);
});

// const generateMap = function (w, h) {
//     const cellSize = 4
//     const dungeon = dungeoneer.build({
//       width: w,
//       height: h
//     })

//     console.log('Generated dungeon', dungeon)

//     canvas.width = w * cellSize
//     canvas.height = h * cellSize

//     canvas.style.width = w * cellSize + 'px'
//     canvas.style.height = h * cellSize + 'px'

//     ctx.fillStyle = 'black'
//     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

//     ctx.fillStyle = 'red'

//     dungeon.rooms.forEach((room) => {
//       ctx.fillStyle = 'red'
//       ctx.fillRect(room.x * cellSize, room.y * cellSize, room.width * cellSize, room.height * cellSize)
//     })

//     ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'

//     for (let x = 0; x < dungeon.tiles.length; x++) {
//       for (let y = 0; y < dungeon.tiles[x].length; y++) {
//         if (dungeon.tiles[x][y].type === 'floor') {
//           ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
//           ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
//         }
//         if (dungeon.tiles[x][y].type === 'door') {
//           ctx.fillStyle = 'yellow'
//           ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
//         }
//       }
//     }

//     window.ctx = ctx
//     window.dungeon = dungeon

//     window.border = () => {
//       ctx.beginPath()
//       ctx.moveTo(0, 0)
//       ctx.lineTo(cellSize * w, 0)
//       ctx.lineTo(cellSize * w, cellSize * h)
//       ctx.lineTo(0, cellSize * h)
//       ctx.lineTo(0, 0)
//       ctx.strokeStyle = 'white'
//       ctx.stroke()
//     }
//   }

// mapForm.on("submit", function() {
//     const height = parseInt(mapHeight.val());
//     const width = parseInt(mapWidth.val());
//     console.log(width)

//     if (!height || !width || height === NaN || width === NaN) {
//         alert("please enter valid numbers");
//     }
//     else {
//         generateMap(height, width);
//     }
// });
