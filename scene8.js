function drawScene8() {
  drawMountain();
  drawDiogenes(500, 200, "cauldron", "sledgehammer");

  push();
  textAlign(CENTER);
  textSize(28);
  textStyle(BOLD);
  fill(0, 255, 100);
  text("ENDING: The True Ascent", width / 2, 80);
  fill(255);
  textSize(16);
  textStyle(NORMAL);
  text(
    "Perfect synergy. The hammer hooks ledges, the cauldron deflects rocks.",
    width / 2,
    130,
  );
  text("Diogenes begins his grueling, legendary ascent.", width / 2, 160);
  pop();
}
