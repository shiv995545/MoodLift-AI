var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.addEventListener("resize", resizeCanvas, false);

resizeCanvas(); /// call the first time page is loaded

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

ctx.lineWidth = 10;
var down = false;

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", function () {
  down = true;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  canvas.addEventListener("mousemove", draw);
});

canvas.addEventListener("mouseup", function () {
  down = false;
});

function draw(e) {
  xPos = e.clientX - canvas.offsetLeft;
  yPos = e.clientY - canvas.offsetTop;

  if (down == true) {
    ctx.lineTo(xPos, yPos);
    ctx.stroke();
  }
}

function changeColor(color) {
  ctx.strokeStyle = color;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
