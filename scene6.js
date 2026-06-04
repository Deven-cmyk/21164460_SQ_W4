function drawScene6() {
  push();
  fill(90, 100, 110);
  triangle(0, 600, 400, 300, 800, 600); // Rock ledge
  pop();

  drawDiogenes(400, 350, "woodBarrel");

  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("The Wooden Barrel", width / 2, 80);
  textSize(16);
  text(
    "It's relatively lightweight, but it risks splintering on sharp rocks.",
    width / 2,
    120,
  );
  text("He needs a tool to carefully hoist himself up.", width / 2, 145);
  pop();

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
