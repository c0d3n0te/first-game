console.log("JS Loaded");

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const pawn = new Image();
pawn.src = "pawn.png";

let x = 50;
let y = 50;

function update() {
  x +=1 ;
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(pawn,x,y,50,50);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();

document.addEventListener("keydown", e=> {
  if (e.key === "ArrowRight") x += 5;
  if (e.key === "ArrowLeft") x -= 5;
  if (e.key === "ArrowUp") y -= 5;
  if (e.key === "ArrowDown") y += 5;
});
