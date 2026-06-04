// Global State Variables
let currentScene = 1;
let bgMusic;

// Shared Button Dimensions
const BTN_W = 260;
const BTN_H = 60;
const BTN_Y = 500;

// Helper: Check if mouse is over a button
function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

// Upgraded Beautiful Buttons with Shadows
function drawChoiceButton(x, y, w, h, label) {
  push();
  rectMode(CENTER);
  let hovered = isMouseOver(x, y, w, h);

  // Drop Shadow
  fill(0, 0, 0, 60);
  rect(x + 4, y + 6, w, h, 12);

  // Button Body
  fill(hovered ? color(220, 235, 255) : color(255));
  stroke(hovered ? color(100, 150, 255) : color(80));
  strokeWeight(3);
  rect(x, y, w, h, 12);

  // Text
  fill(20);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  textStyle(BOLD);
  text(label, x, y);
  pop();
}

// Upgraded Detailed Diogenes Character
function drawDiogenes(x, y, vesselType) {
  push();
  rectMode(CENTER);

  // Animated Breathing Effect
  let breath = sin(frameCount * 0.05) * 2;
  y += breath;

  // Body & Torso
  fill(220, 170, 130);
  rect(x, y - 10, 35, 45, 8); // Shoulders
  ellipse(x, y - 45, 40, 40); // Head

  // Face Details
  fill(0);
  ellipse(x - 8, y - 48, 4, 4); // Eye
  ellipse(x + 8, y - 48, 4, 4); // Eye
  fill(40);
  arc(x, y - 35, 25, 20, 0, PI); // Beard

  // Arms
  stroke(220, 170, 130);
  strokeWeight(12);
  strokeCap(ROUND);
  line(x - 15, y - 20, x - 35, y); // Left arm
  line(x + 15, y - 20, x + 35, y - 10); // Right arm

  noStroke();

  // High-Detail Vessels
  if (vesselType === "cauldron") {
    fill(30);
    arc(x, y + 25, 90, 90, 0, PI, CHORD); // Base
    fill(20);
    rect(x, y + 25, 100, 15, 5); // Thick Rim
    fill(255, 255, 255, 30);
    arc(x - 20, y + 35, 20, 40, PI / 2, PI); // Specular Highlight
  } else if (vesselType === "metalBarrel") {
    fill(90, 100, 110);
    rect(x, y + 30, 70, 80, 5);
    fill(70, 80, 90); // Ribs
    rect(x, y + 10, 70, 5);
    rect(x, y + 30, 70, 5);
    rect(x, y + 50, 70, 5);
  } else if (vesselType === "woodBarrel") {
    fill(139, 69, 19);
    rect(x, y + 30, 80, 70, 15);
    fill(40); // Iron bands
    rect(x, y + 10, 80, 8);
    rect(x, y + 50, 80, 8);
  } else if (vesselType === "bowl") {
    fill(240, 240, 230);
    arc(x, y + 25, 100, 70, 0, PI, CHORD);
    stroke(50, 100, 200); // Ceramic pattern
    strokeWeight(4);
    noFill();
    arc(x, y + 35, 80, 50, 0, PI);
  } else {
    fill(40, 40, 100); // Jeans
    rect(x - 12, y + 25, 14, 45, 3);
    rect(x + 12, y + 25, 14, 45, 3);
  }
  pop();
}

// Gorgeous Procedural Environment (To replace triangles)
function drawMountain() {
  push();
  noStroke();

  // Back Mountain Silhouette
  fill(50, 60, 80);
  beginShape();
  vertex(0, 600);
  vertex(100, 250);
  vertex(300, 350);
  vertex(500, 150);
  vertex(700, 400);
  vertex(800, 600);
  endShape(CLOSE);

  // Midground Rocky Terrain
  fill(80, 90, 110);
  beginShape();
  vertex(0, 600);
  vertex(0, 400);
  vertex(150, 350);
  vertex(350, 420);
  vertex(550, 300);
  vertex(800, 380);
  vertex(800, 600);
  endShape(CLOSE);

  // Foreground Mossy Ledge
  fill(60, 80, 60);
  beginShape();
  vertex(0, 600);
  vertex(0, 500);
  curveVertex(200, 480);
  curveVertex(400, 520);
  curveVertex(600, 490);
  curveVertex(800, 510);
  vertex(800, 600);
  endShape(CLOSE);
  pop();
}
