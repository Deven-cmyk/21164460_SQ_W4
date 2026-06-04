function preload() {
  // soundFormats('mp3');
  // bgMusic = loadSound('assets/sounds/backgroundmusicforclass.mp3');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(40, 50, 60);

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
}

function mousePressed() {
  // if (bgMusic && !bgMusic.isPlaying()) {
  //  bgMusic.loop();
  // }

  switch(currentScene) {
    case 1: clickScene1(); break;
    case 2: clickScene2(); break;
    // ... rest of your switch statement
  }
}

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
