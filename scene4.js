function drawScene4() {
  drawMountain();
  drawDiogenes(400, 320, "cauldron");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  textStyle(BOLD);
  text("The Iron Cauldron", width / 2, 70);
  textSize(16);
  textStyle(NORMAL);
  text("It's a tight fit, but feels indestructible.", width / 2, 110);
  text("Now he needs a tool to pull himself up.", width / 2, 135);
  pop();

  drawComicBurst(240, 400);
  drawTool(240, 400, "sledgehammer");
  drawComicBurst(560, 400);
  drawTool(560, 400, "pipe");

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
