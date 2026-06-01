function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  noLoop();
  translate(-width / 2, -height / 2);
  randomSeed("v2-demo");

  // Fond plat rapide avec wash
  brush.wash("#fff8e7", 255);
  brush.rect(0, 0, width, height);
  brush.noWash();

  // Remplissages massifs au pastel
  brush.mass("pastel", "#c1502e", { strength: 0.7, gradient: 0.4 });
  brush.circle(width * 0.3, height * 0.5, 180, true);

  brush.mass("crayon", "#2a6f7c", { strength: 0.5, gradient: 0.3 });
  brush.circle(width * 0.65, height * 0.5, 220, true);
  brush.noMass();

  // Quelques arcs au fusain par-dessus
  brush.set("charcoal", "#1a1a1a", 1.2);
  for (let i = 0; i < 5; i++) {
    let r = random(80, 200);
    brush.arc(width / 2, height / 2, r, random(0, 180), random(180, 360));
  }
}

function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}