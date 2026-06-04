function drawScene15() {
  drawMountain();

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
