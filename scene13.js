function drawScene13() {
  drawMountain();
  drawDiogenes(400, 500, "woodBarrel", "pickaxe");

  push();
  textAlign(CENTER);
  textSize(28);
  textStyle(BOLD);
  fill(255, 100, 100);
  text("GAME OVER: The Punctured Vessel", width / 2, 80);
  fill(255);
  textSize(16);
  textStyle(NORMAL);
  text(
    "He winds up for a massive swing with the pickaxe, but misses the cliff.",
    width / 2,
    130,
  );
  text(
    "The sharp tip pierces straight through his barrel, anchoring him to the ground.",
    width / 2,
    160,
  );
  pop();
}
