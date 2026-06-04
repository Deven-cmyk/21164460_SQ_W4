function drawScene9() {
  push();
  background(30, 20, 20);
  fill(80, 90, 100);
  triangle(0, 600, 800, 200, 800, 600); // Steep slope
  pop();

  drawDiogenes(500, 450, "cauldron");

  push();
  textAlign(CENTER);
  textSize(28);
  fill(255, 100, 100);
  text("GAME OVER: The Slippery Slope", width / 2, 80);
  fill(255);
  textSize(16);
  text(
    "The heavy iron cauldron weighs him down, and the smooth pipe offers zero grip.",
    width / 2,
    130,
  );
  text(
    "He slips on the first rock and slides all the way back to the bottom.",
    width / 2,
    160,
  );
  pop();
}
