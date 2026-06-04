function drawScene14() {
  drawMountain();
  drawDiogenes(400, 500, "none", "sledgehammer");

  push();
  fill(240, 240, 230);
  arc(380, 550, 40, 30, PI, TWO_PI);
  arc(420, 560, 50, 20, 0, PI);
  pop();

  push();
  textAlign(CENTER);
  textSize(28);
  textStyle(BOLD);
  fill(255, 100, 100);
  text("GAME OVER: The Shattered Hope", width / 2, 80);
  fill(255);
  textSize(16);
  textStyle(NORMAL);
  text(
    "He hooks the ledge! But as he swings upward, the hammer drops back.",
    width / 2,
    130,
  );
  text(
    "It smashes the ceramic bowl to pieces. His legs are free, but his pride is broken.",
    width / 2,
    160,
  );
  pop();
}
