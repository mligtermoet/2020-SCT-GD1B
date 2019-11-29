// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "Green";
context.fillStyle = "Green";
context.moveTo(0,600);
context.lineTo(2000,600);
context.lineTo(2000,1000);
context.lineTo(0,1000);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "Grey";
context.fillStyle = "rgb(200,200,200)";
context.moveTo(400,600);
context.lineTo(700,600);
context.lineTo(700,300);
context.lineTo(400,300);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "Grey";
context.fillStyle = "rgb(200,200,200)";
context.moveTo(400,300);
context.lineTo(550,150);
context.lineTo(700,300);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 3;
context.strokeStyle = "White";
context.moveTo(440,600);
context.lineTo(510,600);
context.lineTo(510,480);
context.lineTo(440,480);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 3;
context.strokeStyle = "White";
context.moveTo(590,550);
context.lineTo(660,550);
context.lineTo(660,480);
context.lineTo(590,480);
context.closePath();
context.stroke();
//
// context.beginPath();
// context.lineWidth = 3;
// context.strokeStyle = "red";
// context.moveTo(200,200);
// context.lineTo(580,20);
// context.closePath();
// context.stroke();
//
// context.beginPath();
// context.lineWidth = 10;
// context.strokeStyle = "pink";
// context.
// context.moveTo(300,300);
// context.lineTo(500,400);
// context.lineTo(700,350);
// context.closePath();
// context.stroke();
