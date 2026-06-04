function drawScene7() {
  drawMountain();
  drawDiogenes(400, 320, "bowl");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  textStyle(BOLD);
  text("The Ceramic Bowl", width / 2, 70);
  textSize(16);
  textStyle(NORMAL);
  text(
    "Perfectly smooth and glides on dirt, but incredibly fragile.",
    width / 2,
    110,
  );
  text("He needs a tool that won't cause too much vibration.", width / 2, 135);
  pop();

  drawComicBurst(240, 400);
  drawTool(240, 400, "sledgehammer");
  drawComicBurst(560, 400);
  drawTool(560, 400, "stick");

  drawChoiceButton(240, BTN_Y, BTN_W, BTN_H, "Heavy Sledgehammer");
  drawChoiceButton(560, BTN_Y, BTN_W, BTN_H, "Wooden Walking Stick");
}
function clickScene7() {
  if (isMouseOver(240, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 14;
  }
  if (isMouseOver(560, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 15;
  }
}
