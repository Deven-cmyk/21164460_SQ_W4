function drawScene1() {
  drawMountain();
  drawDiogenes(400, 320, "none");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  textStyle(BOLD);
  text("The Mountain's Call", width / 2, 70);
  textSize(16);
  textStyle(NORMAL);
  text(
    "Diogenes stands at the base. To climb the sharp rocks, he needs a vessel.",
    width / 2,
    110,
  );
  pop();

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
