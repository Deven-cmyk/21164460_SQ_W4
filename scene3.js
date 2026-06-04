function drawScene3() {
  push();
  fill(100, 150, 100);
  rect(0, 400, 800, 200);
  pop();

  drawDiogenes(400, 320, "none");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  textStyle(BOLD);
  text("The Artisan Village", width / 2, 70);
  textSize(16);
  textStyle(NORMAL);
  text(
    "The locals offer handcrafted vessels. Comfortable, but fragile.",
    width / 2,
    110,
  );
  pop();

  drawChoiceButton(240, BTN_Y, BTN_W, BTN_H, "Wooden Brewing Barrel");
  drawChoiceButton(560, BTN_Y, BTN_W, BTN_H, "Ceramic Mixing Bowl");
}

function clickScene3() {
  if (isMouseOver(240, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 6;
  }
  if (isMouseOver(560, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 7;
  }
}
