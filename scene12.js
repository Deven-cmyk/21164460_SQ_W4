function drawScene12() {
  drawMountain();
  drawDiogenes(400, 500, "woodBarrel", "broom");

  push();
  textAlign(CENTER);
  textSize(28);
  textStyle(BOLD);
  fill(255, 100, 100);
  text("GAME OVER: The Sweeper's Sorrow", width / 2, 80);
  fill(255);
  textSize(16);
  textStyle(NORMAL);
  text(
    "The bristles of the broom crush instantly against the rock face.",
    width / 2,
    130,
  );
  text(
    "Unable to climb, he spends the rest of his days sweeping the base of the mountain.",
    width / 2,
    160,
  );
  pop();
}
