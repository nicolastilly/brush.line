function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
    noLoop();
    translate(-width / 2, -height / 2);

    background("#fff");
    brush.noStroke();
    brush.field("curved");
    brush.wiggle();
    brush.hatchStyle("pen", "#1c1c1d", 1);
    brush.mass("pastel", "#e03599", { strength: 0.6, gradient: 0.3 });
    brush.hatch(6, 45, { rand: 0.15, continuous: true });

    brush.rect(width / 2, height / 2, 300, 300, "center");
}

function draw() {
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}