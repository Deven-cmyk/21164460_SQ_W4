function drawScene6() {
  drawMountain();
  drawDiogenes(400, 320, "woodBarrel");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  textStyle(BOLD);
  text("The Wooden Barrel", width / 2, 70);
  textSize(16);
  textStyle(NORMAL);
  text(
    "It's lightweight, but it risks splintering on sharp rocks.",
    width / 2,
    110,
  );
  text("He needs a tool to carefully hoist himself up.", width / 2, 135);
  pop();

  drawComicBurst(240, 400);
  drawTool(240, 400, "broom");
  drawComicBurst(560, 400);
  drawTool(560, 400, "pickaxe");

  drawChoiceButton(240, BTN_Y, BTN_W, BTN_H, "Wooden Broom");
  drawChoiceButton(560, BTN_Y, BTN_W, BTN_H, "Steel Pickaxe");
}
function clickScene6() {
  if (isMouseOver(240, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 12;
  }
  if (isMouseOver(560, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 13;
  }
}
