let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;

let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}