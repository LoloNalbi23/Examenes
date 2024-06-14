let ranita;
let autos;
let autos2;
let vidas = 3;
let puntos = 0;

function setup(){
    createCanvas(800,600);

    ranita = new Sprite();
    ranita.width = 20;
    ranita.height = 20;
    ranita.position.x = 600;
    ranita.position.y = 600;
    ranita.shapeColor = color(0, 255, 0);

autos = new Group();
autos2 = new Group();

for(let i = 0;i < 5;i++){
    let a = new Sprite();
    a.width = 50;
    a.height = 50;
    a.position.x = 0;
    a.position.y = random(50,250);
    a.shapeColor = color(255, 0, 0);
    autos.add(a);
}

for(let i = 0;i < 5;i++){
    let v = new Sprite();
    v.width = 50;
    v.height = 50;
    v.position.x = width + 50;
    v.position.y = random(350,550);
    v.shapeColor = color(0, 0, 255);
    autos2.add(v);
}
}

function draw(){
background(0);

stroke('white');
strokeWeight(5);
line(0,height/2,800,height/2);

if(ranita.position.y < 50){
    textSize(40);
    fill(255, 0, 0);
    text("OSAAAA, GANASTEEE", 150, height / 2)
}

if(ranita.position.y > height - 50){
    ranita.position.y = height - 50
    }

    if(ranita.position.x < 50){
        ranita.position.x = 50
        }
        
        if(ranita.position.x > width - 50){
            ranita.position.x = width - 50
            }

if(vidas > 0){
    for (let i = 0; i < autos.length; i++) {
    autos[i].position.x -= autos[i].width * 0.2;
    if (autos[i].position.x < 0) {
    autos[i].position.x = width + 100;
    
}
}}

if(vidas > 0){
    for (let i = 0; i < autos2.length; i++) {
    autos2[i].position.x += autos2[i].width * 0.2;
    if (autos2[i].position.x > width) {
    autos2[i].position.x = -100;
}
}}

if (ranita.overlap(autos)) {
    for(let i = 0;i < autos.width;i++){
    autos[i].position.y = 900;
    autos2[i].position.y = 900;
    }
    ranita.position.x = width / 2
    ranita.position.y = height
    vidas -= 1
    console.log(vidas);
} else if(ranita.overlap(autos2)){
    for(let i = 0;i < autos.width;i++){
        autos2[i].position.y = 900;
        autos[i].position.y = 900;
        }
        ranita.position.x = width / 2
        ranita.position.y = height
        vidas -= 1
        console.log(vidas);
}

if (vidas === 0) {
    textSize(40);
    fill(255, 0, 0);
    text("DALE CHABON, ES RE FÁCIL", 100, height / 2)
    textSize(20);
    fill(0, 255, 0);
    text("Puntos"+ puntos, 400, (height / 2) + 30)
    ranita.position.x = width / 2
    ranita.position.y = height / 2
    for(let i = 0;i< autos.length;i++){
    autos[i].position.y = 900;
    autos2[i].position.y = 900;
    }
}
drawSprites();
}

function keyPressed(){
    if(keyIsDown(UP_ARROW)) {
        ranita.position.y -= 30;
    }
    if(keyIsDown(DOWN_ARROW)) {
        ranita.position.y += 30;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        ranita.position.x += 30;
    }
    if(keyIsDown(LEFT_ARROW)) {
        ranita.position.x -= 30;
    }
}



