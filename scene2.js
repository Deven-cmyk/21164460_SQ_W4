function drawScene2() {
  push();
  fill(80, 50, 40);
  rect(0, 400, 800, 200);
  fill(120, 120, 120);
  rect(200, 350, 100, 100);
  rect(500, 380, 150, 70);
  pop();

  drawDiogenes(400, 320, "none");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  textStyle(BOLD);
  text("The Scrapyard", width / 2, 70);
  textSize(16);
  textStyle(NORMAL);
  text(
    "He wades through rusted metal. He spots two heavy-duty options.",
    width / 2,
    110,
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
