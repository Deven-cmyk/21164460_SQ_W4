function drawScene8() {
  drawMountain();

  drawDiogenes(500, 180, "cauldron");

  push();
  stroke(100);
  strokeWeight(5);
  line(500, 160, 550, 120);
  fill(50);
  noStroke();
  rect(540, 110, 30, 20);
  pop();

  push();
  textAlign(CENTER);
  textSize(28);
  fill(0, 255, 100);
  text("ENDING: The True Ascent", width / 2, 80);
  fill(255);
  textSize(16);
  text(
    "Perfect synergy. The hammer hooks ledges, the cauldron deflects rocks.",
    width / 2,
    130,
  );
  text("Diogenes begins his grueling, legendary ascent.", width / 2, 160);
  pop();
}
