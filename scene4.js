function drawScene4() {
  push();
  fill(90, 100, 110);
  triangle(0, 600, 400, 300, 800, 600);
  pop();

  drawDiogenes(400, 350, "cauldron");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("The Iron Cauldron", width / 2, 80);
  textSize(16);
  text(
    "It's a tight fit, but feels indestructible. Now he needs a tool to pull himself up.",
    width / 2,
    120,
  );
  pop();

  drawChoiceButton(240, BTN_Y, BTN_W, BTN_H, "Yosemite Sledgehammer");
  drawChoiceButton(560, BTN_Y, BTN_W, BTN_H, "Smooth Steel Pipe");
}

function clickScene4() {
  if (isMouseOver(240, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 8;
  }
  if (isMouseOver(560, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 9;
  }
}
