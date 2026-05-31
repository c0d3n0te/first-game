window.addEventListener("keydown", function(e) {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
    e.preventDefault();
  }
});

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const pawn = new Image();
pawn.src = "images/sprites/pawn.png";

const background = new Image();
background.src = "Untitled227_20260531144236.png"

let playerX = 35;
let playerY = 225;
let cameraX = 0;

const pawnWidth = 390;
const pawnHeight = 455;

const keys = {};

document.addEventListener("keydown", e=> {
  keys[e.key]=true;
});

document.addEventListener("keyup", e=> {
  keys[e.key]=false;
});

background.onload = () => {
  worldWidth = background.width;
};

function update() {
  if (keys["ArrowRight"] || keys["d"]) playerX += 5;
  if (keys["ArrowLeft"] || keys["a"]) playerX -= 5;
  if (playerX < 0) playerX = 0;
  if (playerX > worldWidth - pawnWidth) playerX = worldWidth - pawnWidth;
  // centers "camera" to player
  cameraX = playerX - canvas.width / 2;
  if (cameraX < 0) cameraX = 0;
  if (cameraX > worldWidth - canvas.width) {
    cameraX = worldWidth - canvas.width;
  }
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(background,-cameraX,0);
  ctx.drawImage(pawn,canvas.width/2,playerY,390,455);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();

console.log("JS Loaded 2");
