function setup() {
  // On crée un canvas plein écran. Le mode WEBGL est OBLIGATOIRE avec p5.brush.
  createCanvas(windowWidth, windowHeight, WEBGL);

  angleMode(DEGREES); // on travaille en degrés, c'est plus simple
  noLoop();           // un dessin fixe (on n'anime pas pour l'instant)

  // On replace l'origine en haut à gauche (voir l'explication juste en dessous).
  // Avec p5.brush v2, les transformations p5 marchent directement avec les pinceaux.
  translate(-width / 2, -height / 2);

  // ----- VOTRE DESSIN COMMENCE ICI -----
  background("#f2efe6");
  brush.set("HB", "#1a1a1a", 1);
  brush.line(100, 100, 400, 300);
}

// La fonction draw est appelée en boucle (utile pour animer)
// Pour l'instant on la laisse vide : tout se passe dans setup()
function draw() {
}

// Garde le dessin plein écran si vous redimensionnez la fenêtre
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}