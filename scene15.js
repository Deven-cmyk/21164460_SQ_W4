function drawScene15() {
  push();
  background(80, 150, 80); // Pleasant green forest
  fill(60, 120, 60);
  triangle(100, 600, 700, 600, 400, 200); // Green hill
  pop();

  drawDiogenes(400, 300, "none"); // Just walking

  push();
  textAlign(CENTER);
  textSize(28);
  fill(100, 255, 100); // Peaceful Green
  text("ENDING: The Gentle Hiker", width / 2, 80);
  fill(255);
  textSize(16);
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
