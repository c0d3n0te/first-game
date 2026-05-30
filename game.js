window.addEventListener("keydown", function(e) {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
    e.preventDefault();
  }
});

console.log("JS Loaded");

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const pawn = new Image();
pawn.src = "pawn.png";

let x = 50;
let y = 50;

const keys = {};

document.addEventListener("keydown", e=> {
  keys[e.key]=true;
});

document.addEventListener("keyup", e=> {
  keys[e.key]=false;
});

function update() {
  // Arrow Keys
  if (keys["ArrowRight"]) x += 5;
  if (keys["ArrowLeft"]) x -= 5;
  if (keys["ArrowUp"]) y -= 5;
  if (keys["ArrowDown"]) y += 5;
  // WASD Keys
  if (keys["d"]) x += 5;
  if (keys["a"]) x -= 5;
  if (keys["w"]) y -= 5;
  if (keys["s"]) y += 5;
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(pawn,x,y,50,60);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
