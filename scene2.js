function drawScene2() {
  drawMountain();

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("The Scrapyard", width / 2, 80);
  textSize(16);
  text(
    "He wades through rusted metal. He spots two heavy-duty options.",
    width / 2,
    120,
  );
  pop();

  drawChoiceButton(240, BTN_Y, BTN_W, BTN_H, "Cast-Iron Cauldron");
  drawChoiceButton(560, BTN_Y, BTN_W, BTN_H, "Metal Rain Barrel");
}

function clickScene2() {
  if (isMouseOver(240, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 4;
  }
  if (isMouseOver(560, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 5;
  }
}
