canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
//var lastPositionOfx, lastPositionOfy;
colour = "black";
widthOfLine = 1;
radius = 5;

canvas.addEventListener("mousedown", mouseIsDown);

function mouseIsDown(e) {
    mouseEvent = "MouseDown";
    colour = document.getElementById("color").value;
    widthOfLine = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", mouseIsMoving);

function mouseIsMoving(e) {
    currentPositionOfX = e.clientX - canvas.offsetLeft;
    currentPositionOfY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "MouseDown") {
        ctx.beginPath();
        console.log("mouseMove + mouseDown")
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfX, currentPositionOfY, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    lastPositionOfx=currentPositionOfX;
    lastPositionOfy=currentPositionOfY;
}

canvas.addEventListener("mouseup", mouseIsUp);

function mouseIsUp(e){
    mouseEvent="MouseUp";
}

canvas.addEventListener("mouseleave", MouseHasLeft);

function MouseHasLeft(e){
    mouseEvent="MouseLeave";
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}