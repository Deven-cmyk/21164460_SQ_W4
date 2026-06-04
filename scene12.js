function drawScene12() {
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
  text("GAME OVER: The Sweeper's Sorrow", width / 2, 80);
  fill(255);
  textSize(16);
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
