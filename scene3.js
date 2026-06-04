function drawScene3() {
  push();
  fill(100, 150, 100); // Green grass
  rect(0, 400, 800, 200);
  pop();

  // Diogenes still has his legs here since he hasn't picked a vessel yet
  drawDiogenes(400, 380, "none");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("The Artisan Village", width / 2, 80);
  textSize(16);
  text(
    "The locals offer handcrafted vessels. Comfortable, but fragile.",
    width / 2,
    120,
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
