// Global State Variables
let currentScene = 1;

// Shared Button Dimensions
const BTN_W = 260;
const BTN_H = 60;
const BTN_Y = 500;

function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

function drawChoiceButton(x, y, w, h, label) {
  push();
  rectMode(CENTER);
  let hovered = isMouseOver(x, y, w, h);

  fill(0, 0, 0, 60);
  rect(x + 4, y + 6, w, h, 12);

  fill(hovered ? color(220, 235, 255) : color(255));
  stroke(hovered ? color(100, 150, 255) : color(80));
  strokeWeight(3);
  rect(x, y, w, h, 12);

  fill(20);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  textStyle(BOLD);
  text(label, x, y);
  pop();
}

// NEW: Spinning Comic Book Starburst
function drawComicBurst(x, y) {
  push();
  translate(x, y);
  rotate(frameCount * 0.02); // Make it spin!
  fill(255, 220, 0); // Bright Yellow
  stroke(255, 100, 0); // Orange outline
  strokeWeight(4);

  beginShape();
  for (let i = 0; i < 16; i++) {
    let angle = (TWO_PI / 16) * i;
    let r = i % 2 === 0 ? 65 : 40; // Jagged edges
    vertex(cos(angle) * r, sin(angle) * r);
  }
  endShape(CLOSE);
  pop();
}

// NEW: Draw all 6 unique tools
function drawTool(x, y, toolType) {
  push();
  translate(x, y);
  rectMode(CENTER);

  if (toolType === "sledgehammer") {
    stroke(80);
    strokeWeight(6);
    line(0, 25, 0, -25); // handle
    fill(50);
    noStroke();
    rect(0, -25, 35, 20, 3); // head
  } else if (toolType === "pipe") {
    stroke(150, 160, 170);
    strokeWeight(12);
    strokeCap(SQUARE);
    line(-15, 30, 15, -30);
  } else if (toolType === "branch") {
    stroke(101, 67, 33);
    strokeWeight(10);
    line(0, 30, 0, -30); // trunk
    strokeWeight(5);
    line(0, 0, 15, -20); // twig
  } else if (toolType === "broom") {
    stroke(180, 150, 100);
    strokeWeight(6);
    line(0, -30, 0, 15); // handle
    fill(200, 180, 50);
    stroke(150, 120, 30);
    strokeWeight(2);
    triangle(0, 5, -20, 35, 20, 35); // bristles
  } else if (toolType === "pickaxe") {
    stroke(100, 70, 40);
    strokeWeight(6);
    line(0, 30, 0, -20); // handle
    fill(180);
    stroke(0);
    strokeWeight(2);
    arc(0, -20, 70, 35, PI, TWO_PI, CHORD); // curved blade
  } else if (toolType === "stick") {
    stroke(120, 90, 50);
    strokeWeight(8);
    strokeCap(ROUND);
    line(5, 30, -5, -30);
  }
  pop();
}

// UPDATED: Diogenes can now hold the tools!
function drawDiogenes(x, y, vesselType, toolType = "none") {
  push();
  rectMode(CENTER);

  let breath = sin(frameCount * 0.05) * 2;
  y += breath;

  fill(220, 170, 130);
  rect(x, y - 10, 35, 45, 8);
  ellipse(x, y - 45, 40, 40);

  fill(0);
  ellipse(x - 8, y - 48, 4, 4);
  ellipse(x + 8, y - 48, 4, 4);
  fill(40);
  arc(x, y - 35, 25, 20, 0, PI);

  // Left arm
  stroke(220, 170, 130);
  strokeWeight(12);
  strokeCap(ROUND);
  line(x - 15, y - 20, x - 35, y);

  noStroke();

  if (vesselType === "cauldron") {
    fill(30);
    arc(x, y + 25, 90, 90, 0, PI, CHORD);
    fill(20);
    rect(x, y + 25, 100, 15, 5);
    fill(255, 255, 255, 30);
    arc(x - 20, y + 35, 20, 40, PI / 2, PI);
  } else if (vesselType === "metalBarrel") {
    fill(90, 100, 110);
    rect(x, y + 30, 70, 80, 5);
    fill(70, 80, 90);
    rect(x, y + 10, 70, 5);
    rect(x, y + 30, 70, 5);
    rect(x, y + 50, 70, 5);
  } else if (vesselType === "woodBarrel") {
    fill(139, 69, 19);
    rect(x, y + 30, 80, 70, 15);
    fill(40);
    rect(x, y + 10, 80, 8);
    rect(x, y + 50, 80, 8);
  } else if (vesselType === "bowl") {
    fill(240, 240, 230);
    arc(x, y + 25, 100, 70, 0, PI, CHORD);
    stroke(50, 100, 200);
    strokeWeight(4);
    noFill();
    arc(x, y + 35, 80, 50, 0, PI);
    noStroke();
  } else {
    fill(40, 40, 100);
    rect(x - 12, y + 25, 14, 45, 3);
    rect(x + 12, y + 25, 14, 45, 3);
  }

  // Right arm and tool
  if (toolType !== "none") {
    drawTool(x + 40, y - 10, toolType); // Draw tool in his hand
    stroke(220, 170, 130);
    strokeWeight(12);
    strokeCap(ROUND);
    line(x + 15, y - 20, x + 35, y - 10); // Hand over tool
  } else {
    stroke(220, 170, 130);
    strokeWeight(12);
    strokeCap(ROUND);
    line(x + 15, y - 20, x + 35, y - 10); // Empty hand
  }
  pop();
}

function drawMountain() {
  push();
  noStroke();
  fill(50, 60, 80);
  beginShape();
  vertex(0, 600);
  vertex(100, 250);
  vertex(300, 350);
  vertex(500, 150);
  vertex(700, 400);
  vertex(800, 600);
  endShape(CLOSE);
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
