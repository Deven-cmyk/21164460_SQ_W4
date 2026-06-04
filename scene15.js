function drawScene15() {
  push();
  background(80, 150, 80);
  fill(60, 120, 60);
  triangle(100, 600, 700, 600, 400, 200);
  pop();

  drawDiogenes(400, 300, "none", "stick");

  push();
  textAlign(CENTER);
  textSize(28);
  textStyle(BOLD);
  fill(100, 255, 100);
  text("ENDING: The Gentle Hiker", width / 2, 80);
  fill(255);
  textSize(16);
  textStyle(NORMAL);
  text(
    "Realizing his bowl is fragile and his stick is useless for hooking ledges...",
    width / 2,
    130,
  );
  text(
    "He steps out of the bowl and just goes for a normal, pleasant hike.",
    width / 2,
    160,
  );
  pop();
}
