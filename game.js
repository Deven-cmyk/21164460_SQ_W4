// Global State Variables
let currentScene = 1;
let bgMusic;

// Shared Button Dimensions
const BTN_W = 240;
const BTN_H = 60;
const BTN_Y = 500;

// Helper: Check if mouse is over a button using CENTER coordinates
function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

// Helper: Draw buttons using push() and pop() to isolate styles
function drawChoiceButton(x, y, w, h, label) {
  push();
  rectMode(CENTER);

  let hovered = isMouseOver(x, y, w, h);
  fill(hovered ? color(200) : color(255));
  stroke(0);
  strokeWeight(3);
  rect(x, y, w, h, 10);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text(label, x, y);
  pop();
}

// Helper: Draw Diogenes procedurally
function drawDiogenes(x, y, vesselType) {
  push();
  rectMode(CENTER);

  // Body
  fill(220, 180, 140);
  ellipse(x, y - 40, 40, 40); // Head
  fill(50);
  rect(x, y - 10, 30, 40, 5); // Torso

  // Vessel Logic
  if (vesselType === "cauldron") {
    fill(40);
    arc(x, y + 20, 80, 80, 0, PI, CHORD);
  } else if (vesselType === "metalBarrel") {
    fill(100, 110, 120);
    rect(x, y + 20, 60, 70, 5);
  } else if (vesselType === "woodBarrel") {
    fill(139, 69, 19);
    rect(x, y + 20, 70, 60, 10);
  } else if (vesselType === "bowl") {
    fill(240, 240, 230);
    arc(x, y + 20, 90, 60, 0, PI, CHORD);
  } else {
    fill(20, 20, 80); // Default legs
    rect(x - 10, y + 20, 12, 40);
    rect(x + 10, y + 20, 12, 40);
  }
  pop();
}
