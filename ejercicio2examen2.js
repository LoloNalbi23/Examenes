let img;
let colorPixel;
let nuevoColor = 0;
let rojo = 0;
let verde = 0;
let azul = 0;

function preload(){
img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgGZb_QyF2xvL82SdGFt2VxeziOR5nr6GunHwujTWGQ&s');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);

    colorPixel = [0,0,0,0];
    nuevoColor = [0,0,0,0];

    loadPixels();
    
    for (let fila = 0; fila < img.width; fila++) {  //Escaner de pixeles
        for (let col = 0; col < img.height; col++) {
        colorPixel += img.get(fila, col);
        
        rojo = 0.393 * colorPixel[0] + 0.769 * colorPixel[1] + 0.189 * colorPixel[2]
        verde = 0.349 * colorPixel[0] + 0.686 * colorPixel[1] + 0.168 * colorPixel[2]  //Hago calculo
        azul = 0.272 * colorPixel[0] + 0.534 * colorPixel[1] + 0.131 * colorPixel[2]
        
        //verifico el rojo
        if(rojo[0] > 255){
            rojo[0] = 255
        }
        if(rojo[1] > 255){
            rojo[1] = 255
        }
        if(rojo[2] > 255){
            rojo[2] = 255
        }

        //verifico el verde
        if(verde[0] > 255){
            verde[0] = 255
        }
        if(verde[1] > 255){
            verde[1] = 255
        }
        if(verde[2] > 255){
            verde[2] = 255
        }

        //verifico el azul
        if(azul[0] > 255){
            azul[0] = 255
        }
        if(azul[1] > 255){
            azul[1] = 255
        }
        if(azul[2] > 255){
            azul[2] = 255
        }

        nuevoColor = [rojo,verde,azul,100];

        //seteo los colores
        img.set(fila,col,nuevoColor);
    }
    }
    img.updatePixels();  //subo los pixeles
}
function draw(){
    image(img, 0, 0);
}








