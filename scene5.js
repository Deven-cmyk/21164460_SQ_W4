function drawScene5() {
  drawMountain();
  drawDiogenes(400, 320, "metalBarrel");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  textStyle(BOLD);
  text("The Metal Rain Barrel", width / 2, 70);
  textSize(16);
  textStyle(NORMAL);
  text(
    "The barrel locks his legs in completely, but the high rims make it awkward.",
    width / 2,
    110,
  );
  text("He needs a tool with good reach.", width / 2, 135);
  pop();

  drawComicBurst(240, 400);
  drawTool(240, 400, "branch");
  drawComicBurst(560, 400);
  drawTool(560, 400, "sledgehammer");

  drawChoiceButton(240, BTN_Y, BTN_W, BTN_H, "Thick Tree Branch");
  drawChoiceButton(560, BTN_Y, BTN_W, BTN_H, "Heavy Sledgehammer");
}
function clickScene5() {
  if (isMouseOver(240, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 10;
  }
  if (isMouseOver(560, BTN_Y, BTN_W, BTN_H)) {
    currentScene = 11;
  }
}
