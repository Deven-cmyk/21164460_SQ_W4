function drawScene1() {
  push();
  fill(100, 110, 130);
  triangle(100, 600, 700, 600, 400, 100);
  pop();

  drawDiogenes(400, 400, "none");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("The Mountain's Call", width / 2, 80);
  textSize(16);
  text(
    "Diogenes stands at the base. To climb the sharp rocks, he needs a vessel.",
    width / 2,
    120,
  );
  pop();

  // Center coordinates for buttons
  drawChoiceButton(240, BTN_Y, BTN_W, BTN_H, "Scavenge Scrapyard");
  drawChoiceButton(560, BTN_Y, BTN_W, BTN_H, "Visit Artisan Village");
}

function clickScene1() {
  if (isMouseOver(240, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 2;
  }
  if (isMouseOver(560, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 3;
  }
}
