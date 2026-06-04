function drawScene7() {
  drawMountain();

  drawDiogenes(400, 350, "bowl");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("The Ceramic Bowl", width / 2, 80);
  textSize(16);
  text(
    "Perfectly smooth and glides on dirt, but incredibly fragile.",
    width / 2,
    120,
  );
  text("He needs a tool that won't cause too much vibration.", width / 2, 145);
  pop();

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
