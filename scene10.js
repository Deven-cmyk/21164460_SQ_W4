function drawScene10() {
  push();
  background(40);
  fill(80, 90, 100);
  triangle(200, 600, 800, 600, 500, 300);
  pop();

  drawDiogenes(500, 280, "metalBarrel");

  push();
  textAlign(CENTER);
  textSize(28);
  fill(255, 100, 100);
  text("GAME OVER: The Splintered Dream", width / 2, 80);
  fill(255);
  textSize(16);
  text(
    "The sheer weight of the metal barrel is too much for natural wood.",
    width / 2,
    130,
  );
  text(
    "On his first swing, the branch snaps in half, leaving him stranded.",
    width / 2,
    160,
  );
  pop();
}
