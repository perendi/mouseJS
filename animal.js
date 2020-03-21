// JavaScript code for animating a mouse on the canvas
// Written by Daniel Matyas Perendi
// Date: 07/12/2018

// Canvas as a variable and context
var canvas = document.getElementById("canvas_animal");
var context = canvas.getContext('2d');

// Declare canvas width and height as constants
const WIDTH = 500;
const HEIGHT = 500;

// Resets everything to the initial position
function resetCanvas() {
    cancelAnimationFrame(move);
    clear();    
    resetValues();
    beginning();
    clearInterval(interval);
}

// Draw the reset square with an X in it (bottom right corner)
function drawResetRect() {
    context.beginPath();
        context.rect(470,470,30,30);
        context.moveTo(470,500);
        context.lineTo(500,470);
        context.moveTo(470,470);
        context.lineTo(500,500);
        context.strokeStyle = 'rgb(0,0,0)';
    context.stroke();
}

// Reset button
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCanvas);

// Clear function 
function clear() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
}

// On click reset bottom right corner
function onClickReset(evt) {
    var position = getMouseXY(evt);
    if (position.y >= 470 && position.x >= 470)
        resetCanvas();
}
canvas.addEventListener("click",onClickReset);

// Initial values of the different x and y coordinates
var x1=250 , x2=200, x3=340, x4=225, x5=220, x6=215, x7=300;
var y1=250, y2=240, y3=225, y4=245, y5=235;

// Variables reset function 
function resetValues() {
    x1=250 ; x2=200; x3=340; x4=225; x5=220; x6=215; x7=300;
    y1=250; y2=240; y3=225; y4=245; y5=235;
    red = 0, green = 0, blue = 0;
}

// Declare RGB variables
var red = 0, green = 0, blue = 0;

// Draw the mouse
function drawMouse() {
    clear();
    context.beginPath();
        context.arc(x1, y1, 50, 0, Math.PI, true); //  Body
        context.moveTo(x2, y1);
        context.lineTo(x7, y1); // Lower line
        context.lineTo(x3, y1); // Tail line
        context.arc(x3, y2, 10, Math.PI/2, 0, true); // Tail curve
        context.moveTo(x4, y3);
        context.arc(x4, y3, 3, 0, Math.PI * 2, true); // Eye
        context.moveTo(x2, y1); // Whiskers
        context.lineTo(x5, y4);
        context.moveTo(x2, y1);
        context.lineTo(x5, y2);
        context.moveTo(x2, y1);
        context.lineTo(x6, y5);
    context.strokeStyle = 'rgb(' +red+ ',' +green+ ',' +blue+ ')';
    context.stroke();
}

// Mouse beginning position 
function beginning() {
   drawMouse();
   drawResetRect();
}

// Lift tail function
function liftTail() {
    resetCanvas();
    clear();
    drawMouse();
    drawResetRect(); 
    clear();
    context.beginPath();
        context.arc(250, 250, 50, 0, Math.PI, true); // Upper arc
        context.moveTo(200, 250);
        context.lineTo(300,250); // Lower line
        context.moveTo(300, 250); // Where the tail begins
        context.lineTo(335, 230); // Tail part one
        context.moveTo(335, 230); // End of tail part one
        context.arc(335, 220, 10, Math.PI/3, -(Math.PI/6), true); // Tail part two
        context.moveTo(225, 225);
        context.arc(225, 225, 3, 0, Math.PI * 2, true); // Eye
        context.moveTo(200, 250); // some whiskers
        context.lineTo(220, 245);
        context.moveTo(200, 250);
        context.lineTo(220, 240);
        context.moveTo(200, 250);
        context.lineTo(215, 235);
    context.stroke();
    drawResetRect() 
}

// Lift tail button 
var liftTailButton = document.getElementById("lifttail");
liftTailButton.addEventListener("click", liftTail);


// Dance function
var randomNumber;
var randomNumberTwo;
function generateRandom() {
    randomNumber = Math.floor(Math.random()*410)+50;
    randomNumberTwo = Math.floor(Math.random()*500);
}
function randomMouse() {
    clear();
    context.beginPath();
        context.arc(randomNumber, randomNumberTwo, 50, 0, Math.PI, true); //  Body
        context.moveTo(randomNumber-50, randomNumberTwo);
        context.lineTo(randomNumber+50, randomNumberTwo); // Lower line
        context.lineTo(randomNumber+90, randomNumberTwo); // Tail line
        context.arc(randomNumber+90, randomNumberTwo-10, 10, Math.PI/2, 0, true); // Tail curve
        context.moveTo(randomNumber-25, randomNumberTwo-25);
        context.arc(randomNumber-25, randomNumberTwo-25, 3, 0, Math.PI * 2, true); // Eye
        context.moveTo(randomNumber-50, randomNumberTwo); // Whiskers
        context.lineTo(randomNumber-30, randomNumberTwo-5);
        context.moveTo(randomNumber-50, randomNumberTwo);
        context.lineTo(randomNumber-30, randomNumberTwo-10);
        context.moveTo(randomNumber-50, randomNumberTwo);
        context.lineTo(randomNumber-35, randomNumberTwo-15);
    context.strokeStyle = 'rgb(' +red+ ',' +green+ ',' +blue+ ')';
    context.stroke();
}
function dance() {
    generateRandom();
    randomMouse();
    drawResetRect();
}
var interval;
function timedDance (){
        interval=setInterval(dance,700);
} 

var danceButton = document.getElementById("dance");
danceButton.addEventListener("click", timedDance);
// End of dance function

// Make the mouse fall asleep
function drawSleepingMouse(){
    resetCanvas();
    clear();
    context.beginPath();
        context.arc(x1, y1, 50, 0, Math.PI, true); // Body
        context.moveTo(x2, y1);
        context.lineTo(x7, y1); // Lower line
        context.lineTo(x3, y1); // Tail line
        context.arc(x3, y2, 10, Math.PI/2, 0, true); // Tail curve
        context.moveTo(x4-3, y3);
        context.lineTo(x4+3, y3); // Eye
        context.moveTo(x2, y1); // Whiskers
        context.lineTo(x5, y4);
        context.moveTo(x2, y1);
        context.lineTo(x5, y2);
        context.moveTo(x2, y1);
        context.lineTo(x6, y5);
    context.strokeStyle = 'rgb(' +red+ ',' +green+ ',' +blue+ ')';
    context.stroke();
}
function goSleep(){
    drawSleepingMouse();
    drawResetRect();
}
var fallAsleep = document.getElementById("sleep");
fallAsleep.addEventListener("click", goSleep);

// On-click functions

// Get mouse(click) position on the canvas
function getMouseXY(p) {
    var boundingRect = canvas.getBoundingClientRect();
    var offsetX = boundingRect.left;
    var offsetY = boundingRect.top;
    var w = (boundingRect.width-canvas.width)/2;
    var h = (boundingRect.height-canvas.height)/2;
    offsetX += w;
    offsetY += h;
    var mx = Math.round(p.clientX-offsetX);
    var my = Math.round(p.clientY-offsetY);
    return {x: mx, y: my};
}
 //Change colour function

// Generating a random colour
function randomColour(){
    red = Math.floor(255*Math.random());
    green = Math.floor(255*Math.random());
    blue = Math.floor(255*Math.random());
}

// On click change to a random colour
function onClickChangeColour(evt) {
    var position = getMouseXY(evt);
    if (position.x >= 200 && position.x<=300 && position.y>=200 && position.y<=250) {
        clearInterval(interval);
        randomColour();
        drawMouse();
        drawResetRect();
    }
}
canvas.addEventListener("click",onClickChangeColour);

// Move to the bottom left corner animation 

// Decrementing and incrementing x and y values of the mouse --> update at every new frame
function updateMoveBottomLeft(){
    x1 -= 1;
    x2 -= 1;
    x3 -= 1;
    x4 -= 1;
    x5 -= 1;
    x6 -= 1;
    x7 -= 1;
    y1 += 1;
    y2 += 1;
    y3 += 1;
    y4 += 1;
    y5 += 1;
    if (x1 <= 60)
    cancelAnimationFrame(move);
}

var move;
function moveCorner() {
    clearInterval(interval);
    move = window.requestAnimationFrame(moveCorner);
    drawMouse();
    drawResetRect();
    updateMoveBottomLeft();
}

// On click move to the bottom corner function
function onClickBottomCorner(evt) {
    var position = getMouseXY(evt);
    if (position.y > 270 && position.x <= 250) // -20px for easier onClickChaseCheese
        moveCorner();
}
canvas.addEventListener("click",onClickBottomCorner);

// Chase the cheese function

// Draw the cheese 
function drawCheese() {
    context.beginPath();
        context.moveTo(x1-150,y1);
        context.lineTo(x1-100,y1-20);
        context.lineTo(x1-100,y1);
        context.moveTo(x1-100,y1);
        context.lineTo(x1-150,y1);
        context.fillStyle = "rgb(237,185,37)";
    context.fill();
}

// Update for ChaseCheese function 
function updateChaseCheese() {
    x1 -= 5;
    x2 -= 5;
    x3 -= 5;
    x4 -= 5;
    x5 -= 5; 
    x6 -= 5;
    x7 -= 5;
    if (x1<= -80 ) {
    x1 = 600;
    x2 = 550;
    x3 = 690;
    x4 = 575;
    x5 = 570;
    x6 = 565;
    x7 = 650;
    }
}

// Chase Cheese function
function chaseCheese() {
    clearInterval(interval);
    move = window.requestAnimationFrame(chaseCheese);
    drawMouse();
    drawCheese();
    drawResetRect();
    updateChaseCheese();
}


// On click chase cheese function
function onClickChaseCheese(evt) {
    var position = getMouseXY(evt);
    if (position.y <= 270 && position.x <= 200) // Extra 20 px to extend the range of the area "in front of the mouse"
        chaseCheese();
}
canvas.addEventListener("click",onClickChaseCheese);

// Starting position
beginning();