function drawScene10() {
  drawMountain();
  drawDiogenes(500, 280, "metalBarrel", "branch");

  push();
  textAlign(CENTER);
  textSize(28);
  textStyle(BOLD);
  fill(255, 100, 100);
  text("GAME OVER: The Splintered Dream", width / 2, 80);
  fill(255);
  textSize(16);
  textStyle(NORMAL);
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
