function preload() {
  soundFormats("mp3");
  bgMusic = loadSound("assets/sounds/backgroundmusicforclass.mp3");
}

function setup() {
  createCanvas(800, 600);
  textFont("sans-serif");
}

function draw() {
  // 1. Draw a beautiful gradient sky
  let topColor = color(20, 30, 60);
  let bottomColor = color(100, 120, 160);
  for (let i = 0; i <= height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(topColor, bottomColor, inter);
    stroke(c);
    line(0, i, width, i);
  }

  // 2. Animated floating clouds in the background
  fill(255, 255, 255, 40);
  noStroke();
  ellipse(((frameCount * 0.5) % (width + 200)) - 100, 150, 150, 50);
  ellipse(((frameCount * 0.3 + 300) % (width + 200)) - 100, 250, 200, 60);

  // 3. Render the active scene
  switch (currentScene) {
    case 1:
      drawScene1();
      break;
    case 2:
      drawScene2();
      break;
    case 3:
      drawScene3();
      break;
    case 4:
      drawScene4();
      break;
    case 5:
      drawScene5();
      break;
    case 6:
      drawScene6();
      break;
    case 7:
      drawScene7();
      break;
    case 8:
      drawScene8();
      break;
    case 9:
      drawScene9();
      break;
    case 10:
      drawScene10();
      break;
    case 11:
      drawScene11();
      break;
    case 12:
      drawScene12();
      break;
    case 13:
      drawScene13();
      break;
    case 14:
      drawScene14();
      break;
    case 15:
      drawScene15();
      break;
  }

  // 4. Render "Press R to Restart" pulse effect on endings
  if (currentScene >= 8) {
    push();
    fill(255, 255, 0, 150 + sin(frameCount * 0.1) * 100); // Pulsing yellow text
    textAlign(CENTER);
    textSize(20);
    textStyle(BOLD);
    text("Press 'R' to Try Again", width / 2, 560);
    pop();
  }
}

function mousePressed() {
  // Safe audio start (required by Chrome)
  userStartAudio();
  if (bgMusic && bgMusic.isLoaded() && !bgMusic.isPlaying()) {
    bgMusic.loop();
  }

  // Route clicks
  switch (currentScene) {
    case 1:
      clickScene1();
      break;
    case 2:
      clickScene2();
      break;
    case 3:
      clickScene3();
      break;
    case 4:
      clickScene4();
      break;
    case 5:
      clickScene5();
      break;
    case 6:
      clickScene6();
      break;
    case 7:
      clickScene7();
      break;
  }
}

// 5. The Restart Mechanic
function keyPressed() {
  // If user presses 'R' AND they are on an ending screen (8-15)
  if ((key === "r" || key === "R") && currentScene >= 8) {
    currentScene = 1; // Send them back to the start!
  }
}
