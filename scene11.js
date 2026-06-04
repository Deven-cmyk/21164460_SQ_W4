function drawScene11() {
  drawMountain();
  drawDiogenes(400, 250, "metalBarrel", "sledgehammer");

  push();
  textAlign(CENTER);
  textSize(28);
  textStyle(BOLD);
  fill(255, 100, 100);
  text("GAME OVER: The Clunky Climb", width / 2, 80);
  fill(255);
  textSize(16);
  textStyle(NORMAL);
  text(
    "The high rims of the rain barrel prevent him from getting a full rotation.",
    width / 2,
    130,
  );
  text(
    "He gets stuck just three feet off the ground, awkwardly flailing.",
    width / 2,
    160,
  );
  pop();
}
