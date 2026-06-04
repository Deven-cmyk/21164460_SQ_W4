function drawScene13() {
  push();
  background(40);
  fill(80, 90, 100);
  triangle(100, 600, 700, 600, 400, 200);
  pop();

  drawDiogenes(400, 500, "woodBarrel");

  push();
  textAlign(CENTER);
  textSize(28);
  fill(255, 100, 100);
  text("GAME OVER: The Punctured Vessel", width / 2, 80);
  fill(255);
  textSize(16);
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
