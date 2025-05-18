 class Rock {
  constructor(x_pos, y_pos) {
    this.x = x_pos;
    this.y = y_pos;
    this.size = 40;
    this.color = this.randomColor();
    this.speed = random(3,6);
    this.visible = true;
  }

  randomColor() {
    const colors = ['#FF6F61', '#6B5B93', '#88B04B', '#F7CAC9', '#92A8D1', '#955251'];
    return random(colors);
  }

  render() {
    push();
    if (this.visible) {
      fill(this.color);
      ellipse(this.x, this.y, 70, 70);
      
      fill(255, 255, 200, 150);
      ellipse(this.x - 15, this.y - 10, 20, 10);
      ellipse(this.x + 15, this.y + 5, 15, 8);
      
      noFill();
      stroke(255, 200, 0);
      strokeWeight(4);
      ellipse(this.x, this.y, 80, 80);
      stroke(255, 150, 0);
      strokeWeight(2);
      ellipse(this.x, this.y, 90, 40);
    }
    pop();
  }

  move() {
    this.x -= this.speed;
    if (this.x <= -35) {
      this.x = width + 35;
    }
  }
}

class Car {
  constructor(x_pos, y_pos) {
    this.x = x_pos;
    this.y = y_pos; 
    this.size = 40;
    this.speed = random(3,6); 
    this.color = color(random(255), random(255), random(255)); 
  }

  render() {
    push();
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, 60, 30); 

    fill(0);
    ellipse(this.x - 20, this.y + 15, 20, 20); 
    ellipse(this.x + 20, this.y + 15, 20, 20); 
    
    pop();
  }

  move() {
    this.x += this.speed;
    if (this.x > 630) {
      this.x = 0; 
    }
  }
}

class Bubble{
  constructor(x_pos,y_pos,r){
    this.x = x_pos
    this.y = y_pos
    this.speed = random(1,3)
    this.r = r
  }
   render(){
    push();
    noStroke()
    fill(173, 216, 230, 150);
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
  move(){
    this.y -= this.speed; 
    if (this.y < -this.r) {
      this.y = height + this.r;
    }
  }
}

class Fish{
  constructor(x_pos,y_pos,r){
    this.x = x_pos
    this.y = y_pos
    this.speed = random(2,5)
    this.color = color(random(255), random(255), random(255)); 
  }
   render(){
push();
fill(this.color);
noStroke();
triangle(this.x, this.y, this.x-27, this.y-15, this.x-27, this.y+15); // Tail

fill(this.color);
noStroke();
ellipse(this.x+18, this.y, 45, 24); // Body 
pop();

fill(255); 
noStroke();
ellipse(this.x+30, this.y-3, 9, 9); // Big eye

fill(0); // small eye
ellipse(this.x+30, this.y-3, 4.5, 4.5); 

noStroke();
fill(this.color);
triangle(this.x+12, this.y-12, this.x+9, this.y-21, this.x-18, this.y-15); 
triangle(this.x+12, this.y+12, this.x+9, this.y+21, this.x-18, this.y+15); 
  }
   move() {
    this.x += this.speed;
    if (this.x > 630) {
      this.x = 0; 
    }
   }   
}

class secondFish{
  constructor(x_pos,y_pos,r){
    this.x = x_pos
    this.y = y_pos
    this.speed = random(1,3)
    this.color = color(random(255), random(255), random(255)); 
  }
   render(){push();
    fill(this.color);
    noStroke();
    triangle(this.x, this.y, this.x+27, this.y-15, this.x+27, this.y+15); // Tail
    fill(this.color);
    noStroke();
    ellipse(this.x-18, this.y, 45, 24); // Body
    pop();

    fill(255); 
    noStroke();
    ellipse(this.x-30, this.y-3, 9, 9); // Big eye

    fill(0); // Small eye
    ellipse(this.x-30, this.y-3, 4.5, 4.5); 

    noStroke();
    fill(this.color);

    triangle(this.x-12, this.y-12, this.x-9, this.y-21, this.x+18, this.y-15); // Top fin
    triangle(this.x-12, this.y+12, this.x-9, this.y+21, this.x+18, this.y+15); // Bottom fin
  }    
  move() {
    this.x -= this.speed;
    if (this.x <= -35) {
      this.x = width + 35;
    }
  }
}

class Token{
    constructor(x_pos,y_pos){
    this.x = x_pos
    this.y = y_pos
    this.visible = true
  }
  render(){
    if (this.visible) {
      fill('gold');
      ellipse(this.x, this.y, 30, 30);
    }
  }
}
class Confetti {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.size = random(5, 15);
    this.color = color(random(255), random(255), random(255));
    this.ySpeed = random(1, 5);
    this.xSpeed = random(-2, 2);
    this.rotation = random(TWO_PI);
    this.rotationSpeed = random(-0.05, 0.05);
  }
   move() {
    this.y += this.ySpeed;
    this.x += this.xSpeed;
    this.rotation += this.rotationSpeed;

    if (this.y > height) {
      this.y = random(-50, 0);
      this.x = random(width);
    }
  }
  render() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(this.color);
    if (random(1) > 0.5) {
      rectMode(CENTER);
      rect(0, 0, this.size, this.size / 2);
    } else {
      ellipse(0, 0, this.size, this.size);
    }
    pop();
  }
}


let current_scene = 1;
let rectX;
let rectY;
let my_rocks = [];
let my_high_rocks = [];
let my_cars = [];
let my_high_cars = [];
let my_low_cars =[];
let my_bubbles = [];
let my_fish = []
let my_second_fish = []
let my_level1_token = []
let my_level2_token = []
let my_level3_token = []
let my_confetti = []
let score = 0
let my_font
let my_second_font


function preload(){
  my_font = loadFont("texts/Gameplay.ttf")
  my_second_font = loadFont("texts/game_over.ttf")
}



function setup() {
  frameRate(40);
  createCanvas(600, 600);
  rectX = width / 2; 
  rectY = height/2+210;
  
  for (let i = 0; i < 5; i++) {
    my_rocks.push(new Rock(random(width), 400));
  }
  for (let i = 0; i < 5; i++) {
    my_high_rocks.push(new Rock(random(width), 150));
  }
  
  for (let i = 0; i < 2; i++) {
    my_cars.push(new Car(random(width), random(170,250)))
  }
  for (let i = 0; i < 2; i++) {
    my_high_cars.push(new Car(random(width), random(260,340)));
  }
  for (let i = 0; i < 2; i++) {
    my_low_cars.push(new Car(random(width), random(350,430)))
  }
  for (let i = 0; i<50; i++){
    my_bubbles.push(new Bubble(random(width), random(height, height + 100), random(10, 30)))
  }
  for (let i = 0; i < 5; i++) {
    my_fish.push(new Fish(random(width), random(0,500)))
  }
  for (let i = 0; i < 5; i++) {
    my_second_fish.push(new secondFish(random(width), random(0,500)))
  }
 for (let i = 0; i < 10; i++) {
    my_level1_token.push(new Token(random(10,500), random(100,400)));
}
 for (let i = 0; i < 10; i++) {
    my_level2_token.push(new Token(random(10,500), random(100,400)));
}
  for (let i = 0; i < 10; i++) {
    my_level3_token.push(new Token(random(10,500), random(100,400)));
}
  for (let i = 0; i < 100; i++) {
    my_confetti.push(new Confetti());
  }
}

function draw() {
  
  switch (current_scene) {
    case 1: 
      startPage();
      break;
    case 2: 
      level1(rectX, rectY);
      break;
    case 3:  
      level2(rectX, rectY);
      break;
    case 4:  
      level3(rectX, rectY);
      break;
    case 5:  
      endPage();
      break;
    case 6:
      losingPage();
      break;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rectX += 5; 
  }
  if (keyIsDown(LEFT_ARROW)) {
    rectX -= 5; 
  }
  if (keyIsDown(UP_ARROW)) {
    rectY -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    rectY += 5;
  }
}

function startPage() {
  push()
  background('black');
  fill('yellow');
  textFont(my_font);
  rect(width / 2 - 50, height / 2, 100, 50, 5);
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(12);
  text("Start Game", width / 2, height / 2 + 23);
  
  push()
  fill('red');
  textFont(my_font);
  textSize(60);
  text('Welcome', 300, 200);
  pop()
}

function mousePressed() {
  if (mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50 && 
      mouseY >= height / 2 && mouseY <= height / 2 + 50) {
    current_scene = 2; 
  }
}

function level1(x, y) {
  background(24, 39, 64);
  textAlign(CENTER, CENTER);
  fill('white')
  textSize(15);
  text("Level 1", 40, 15);
  
  push();
  
  fill('yellow');
  stroke('orange');
  strokeWeight(0.8); 
  triangle(x, y + 48, x - 8, y + 68, x + 8, y + 68); 
  
  fill('orange');
  triangle(x, y + 48, x - 16, y + 76, x + 16, y + 76);
  
  fill('lightcoral');
  stroke('black');
  strokeWeight(1.6);
  rect(x - 12, y, 24, 48, 8); 
  
  fill('orange');
  stroke('black');
  strokeWeight(1.6);
  triangle(x - 12, y, x + 12, y, x, y - 20); 
  
  fill('royalblue');
  stroke('black');
  strokeWeight(1.6);
  triangle(x - 12, y + 48, x - 24, y + 72, x - 12, y + 48); 
  triangle(x + 12, y + 48, x + 24, y + 72, x + 12, y + 48);
  
  fill('lightblue');
  ellipse(x, y + 16, 12, 12); 
  fill('darkblue');
  ellipse(x, y + 16, 8, 8); 
  
  pop();
  
  fill('white')
  textSize(20)      
  text(`Score: ${score}`, width - 60, 20)
  
  for (let i = 0; i < my_level1_token.length; i++) {
    my_level1_token[i].render();
    
    let rocketRadius = 40;
    let distance = dist(x, y, my_level1_token[i].x, my_level1_token[i].y);
        
    if (distance < rocketRadius && my_level1_token[i].visible) {
      my_level1_token[i].visible = false; 
      score++;
    }  
  }


  for (let i = 0; i < my_rocks.length; i++) {
    my_rocks[i].render();
    my_rocks[i].move();
    
   let rocketRadius = 40;
    let distance = dist(x, y, my_rocks[i].x, my_rocks[i].y);
    
    if (distance < rocketRadius+50) {
      current_scene = 6;
    }
  }
  
  for (let i = 0; i < my_high_rocks.length; i++) {
    my_high_rocks[i].render();
    my_high_rocks[i].move();
    
    let rocketRadius = 40;
    let distance = dist(x, y, my_high_rocks[i].x, my_high_rocks[i].y);
    
    if (distance < rocketRadius+10) { 
      current_scene = 6; 
    }
  }


  if (rectY <= 0) {
    current_scene = 3; 
    rectX = width/2;
    rectY = height/2+270;
    this.visible = true
  }
}

function level2(x,y) {
  background(105, 157, 250);
  push()
  textAlign(CENTER, CENTER);
  textSize(15);
  fill('black')
  text("Level 2", 40, 15);
  pop()
  
  fill('grey')
  rect(0, 140, 620, 320)
  
  push()
  fill('yellow')
  rect(60,190,20,5,5) 
  fill('yellow')
  rect(140,190,20,5,5)
  fill('yellow')
  rect(220,190,20,5,5)
  fill('yellow')
  rect(300,190,20,5,5)
  fill('yellow')
  rect(380,190,20,5,5)
  fill('yellow')
  rect(460,190,20,5,5)
  fill('yellow')
  rect(540,190,20,5,5)
  
  push()
  strokeWeight(3)
  line(0,140,600,140)
  strokeWeight(3)
  line(0,245,600,245)
  pop() 
  
  
  push()
  fill('yellow')
  rect(60,300,20,5,5) 
  fill('yellow')
  rect(140,300,20,5,5)
  fill('yellow')
  rect(220,300,20,5,5)
  fill('yellow')
  rect(300,300,20,5,5)
  fill('yellow')
  rect(380,300,20,5,5)
  fill('yellow')
  rect(460,300,20,5,5)
  fill('yellow')
  rect(540,300,20,5,5)
  
  push()
  strokeWeight(3)
  line(0,355,600,355)
  pop() 
  
  push()
  fill('yellow')
  rect(60,410,20,5,5) 
  fill('yellow')
  rect(140,410,20,5,5)
  fill('yellow')
  rect(220,410,20,5,5)
  fill('yellow')
  rect(300,410,20,5,5)
  fill('yellow')
  rect(380,410,20,5,5)
  fill('yellow')
  rect(460,410,20,5,5)
  fill('yellow')
  rect(540,410,20,5,5)
  
  push()
  strokeWeight(3)
  line(0,460,600,460)
  pop() 
  
 push();
  // Neck
  fill(255, 220, 185);
  rect(rectX - 4 * 0.80, rectY - 50 * 0.80, 8 * 0.80, 16 * 0.80);
  
  // Head
  fill(255, 220, 185); 
  ellipse(rectX, rectY - 70 * 0.80, 40 * 0.80, 48 * 0.80); 

  // Eyes 
  fill(255); 
  ellipse(rectX - 12 * 0.80, rectY - 78 * 0.80, 12 * 0.80, 16 * 0.80); 
  ellipse(rectX + 12 * 0.80, rectY - 78 * 0.80, 12 * 0.80, 16 * 0.80); 
  
  // Pupils 
  fill(0);
  ellipse(rectX - 12 * 0.80, rectY - 78 * 0.80, 4 * 0.80, 6 * 0.80);
  ellipse(rectX + 12 * 0.80, rectY - 78 * 0.80, 4 * 0.80, 6 * 0.80); 
  
  // Mouth 
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(rectX, rectY - 62 * 0.80, 24 * 0.80, 12 * 0.80, 0, PI); 
  
  // Nose 
  line(rectX, rectY - 70 * 0.80, rectX, rectY - 66 * 0.80);

  // Body 
  fill(50, 50, 255); 
  rect(rectX - 12 * 0.80, rectY - 38 * 0.80, 24 * 0.80, 40 * 0.80); 

  // Arms
  fill(255, 220, 185); // Skin color
  rect(rectX - 20 * 0.80, rectY - 38 * 0.80, 8 * 0.80, 28 * 0.80, 2);
  rect(rectX + 12 * 0.80, rectY - 38 * 0.80, 8 * 0.80, 28 * 0.80, 2);

  // Legs
  fill(100, 100, 255); 
  rect(rectX - 12 * 0.80, rectY + 2 * 0.80, 10 * 0.80, 32 * 0.80); 
  rect(rectX + 2 * 0.80, rectY + 2 * 0.80, 10 * 0.80, 32 * 0.80);

  // Shoes
  fill(100); 
  ellipse(rectX - 7 * 0.80, rectY + 34 * 0.80, 12 * 0.80, 6 * 0.80); 
  ellipse(rectX + 7 * 0.80, rectY + 34 * 0.80, 12 * 0.80, 6 * 0.80); 

 
  fill(0); 
  arc(rectX, rectY - 80 * 0.80, 40 * 0.80, 25 * 0.80, PI, 0);
  
  pop();
    if (rectY <= 0) {
    rectX = width / 2;
    rectY = height / 2+270;
    current_scene = 4; 
  }
  
  fill('black')
  textSize(20)      
  text(`Score: ${score}`, width - 60, 20)
  
  for (let i = 0; i < my_level2_token.length; i++) {
    my_level2_token[i].render();
    
    let rocketRadius = 40;
    let distance = dist(x, y, my_level2_token[i].x, my_level2_token[i].y);
        
    if (distance < rocketRadius && my_level2_token[i].visible) {
      my_level2_token[i].visible = false; 
      score++;
    }  
  }
  
  for (let i = 0; i < 2; i++) {
    my_cars[i].render()
    my_cars[i].move()
    
    let bodyRadius = 40;
    let distance = dist(x, y, my_cars[i].x, my_cars[i].y);
    
    if (distance < bodyRadius+30) {
      current_scene = 6;
    }
  }
  
  for (let i = 0; i < 2; i++) {
    my_high_cars[i].render()
    my_high_cars[i].move()
    
    let bodyRadius = 40;
    let distance = dist(x-10, y, my_high_cars[i].x, my_high_cars[i].y);
    
    if (distance < bodyRadius+30) {
      current_scene = 6;
    }
  }

   for (let i = 0; i < 2; i++) {
    my_low_cars[i].render()
    my_low_cars[i].move()
    
    let bodyRadius = 40;
    let distance = dist(x-10, y, my_low_cars[i].x, my_low_cars[i].y);
    
    if (distance < bodyRadius+30) {
      current_scene = 6;
    }
  }
}

function level3(x,y) {
  background(0, 0, 100);
  textAlign(CENTER, CENTER);
  fill('white')
  textSize(15);
  text("Level 3", 40, 15);
  
   for (let i = 0; i < 50; i++) {
    my_bubbles[i].render()
    my_bubbles[i].move()
  }
  
push()
push();
  noStroke();
  fill('black');
  rect(rectX + 1 * 0.6, rectY - 80 * 0.6, 7 * 0.6, 30 * 0.6, 2 * 0.6);
pop();

push();
  noStroke();
  fill('black');
  rect(rectX + 1 * 0.6, rectY - 80 * 0.6, 20 * 0.6, 7 * 0.6, 4 * 0.6);
pop();

push();
  noStroke();
  fill('black');
  rect(rectX + 70 * 0.6, rectY, 30 * 0.6, 7 * 0.6, 2 * 0.6);
pop();

push();
  noStroke();
  fill('orange');
  translate(rectX + 90 * 0.6, rectY + 2 * 0.6);
  rotate(HALF_PI); 
  arc(0, 0, 50 * 0.6, 35 * 0.6, PI, 0); 
pop();

push();
  noStroke();
  fill('orange');
  rect(rectX - 5 * 0.6, rectY - 52 * 0.6, 20 * 0.6, 10 * 0.6, 5 * 0.6);
pop();

push();
  noStroke();
  fill('yellow');
  rect(rectX - 20 * 0.6, rectY - 45 * 0.6, 50 * 0.6, 20 * 0.6, 5 * 0.6);
pop();

push();
  noStroke();
  fill('yellow');
  rect(rectX - 70 * 0.6, rectY - 30 * 0.6, 150 * 0.6, 60 * 0.6, 30 * 0.6);
pop();

strokeWeight(2 * 0.6);
line(rectX - 20 * 0.6, rectY - 36 * 0.6, rectX + 30 * 0.6, rectY - 36 * 0.6);

push();
  noStroke();
  fill('orange');
  rect(rectX - 38 * 0.6, rectY - 30 * 0.6, 85 * 0.6, 60 * 0.6, 2 * 0.6);
pop();

fill('blue');
ellipse(rectX + 3 * 0.6, rectY, 10 * 0.6, 10 * 0.6);
ellipse(rectX - 25 * 0.6, rectY, 10 * 0.6, 10 * 0.6);
ellipse(rectX + 30 * 0.6, rectY, 10 * 0.6, 10 * 0.6);

pop()
  
  fill('white')
  textSize(20)      
  text(`Score: ${score}`, width - 60, 20)
  
    for (let i = 0; i < my_level3_token.length; i++) {
    my_level2_token[i].render();
    
    let submarineRadius = 60;
    let distance = dist(x, y, my_level3_token[i].x, my_level3_token[i].y);
        
    if (distance < submarineRadius && my_level3_token[i].visible) {
      my_level3_token[i].visible = false; 
      score++;
    }  
  }
  
  for (let i = 0; i < 5; i++) {
    my_fish[i].render()
    my_fish[i].move()
    
    let bodyRadius = 40;
    let distance = dist(x-10, y, my_fish[i].x, my_fish[i].y);
    
    if (distance < bodyRadius+30) {
      current_scene = 6;
    }
  }
  for (let i = 0; i < 5; i++) {
    my_second_fish[i].render()
    my_second_fish[i].move()
    
    let bodyRadius = 40;
    let distance = dist(x-10, y, my_second_fish[i].x, my_second_fish[i].y);
    
    if (distance < bodyRadius+30) {
      current_scene = 6;
    }
  }

  if (rectY <= 0) {
    rectX = 300;
    rectY = 500; 
    current_scene = 5; 
  }
}

function endPage() {
  background('black');
  textAlign(CENTER, CENTER);
  textSize(50);
  fill ('white')
  text("You Won!", width / 2, height / 2-100);
  fill('yellow');
  textFont(my_font);
  rect(width / 2 - 50, height / 2, 100, 50, 5);
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(12);
  text("Play again", width / 2, height / 2 + 23);
  
   for (let i = 0; i < my_confetti.length; i++) {
    my_confetti[i].render();
    my_confetti[i].move();
  }
  
  function mousePressed() {
  if (mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50 && 
      mouseY >= height / 2 && mouseY <= height / 2 + 50) {
    current_scene = 1; 
    score = 0
    visible = true
  }
}
  
}

function losingPage(){
  push()
  background ('black')
  loadFont(my_second_font)
  fill('red')
  textAlign(CENTER, CENTER);
  textSize(50);
  text("Game Over",300 , 250);
  fill('green');
  rect(width / 2 - 50, height / 2, 100, 50, 5);
  fill('white');
  textAlign(CENTER, CENTER);
  strokeWeight(2)
  textSize(15);
  text("Restart", width / 2, height / 2 + 23);
  pop()
}

function mousePressed() {
  if (mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50 && 
      mouseY >= height / 2 && mouseY <= height / 2 + 50) {
    rectX = width / 2; 
    rectY = height/2+210;
    current_scene = 2; 
    score = 0
  }
}