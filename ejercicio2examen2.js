let img;
let colorPixel;
let brillo;
let nuevoColor;
let rojo = 0;
let verde = 0;
let azul = 0;

function preload(){
img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgGZb_QyF2xvL82SdGFt2VxeziOR5nr6GunHwujTWGQ&s');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    for (let fila = 0; fila < img.width; fila++) {
        for (let col = 0; col < img.height; col++) {
        colorPixel = img.get(fila, col);
        
        rojo = 0.393 * colorPixel(0) + 0.769 * colorPixel(1) + 0.189 * colorPixel(2)
        verde = 0.349 * colorPixel(0) + 0.686 * colorPixel(1) + 0.168 * colorPixel(2)
        azul = 0.272 * colorPixel(0) + 0.534 * colorPixel(1) + 0.131 * colorPixel(2)

        if(rojo > 255){
            rojo = 255
        }
        if(verde > 255){
            verde = 255
        }
        if(azul > 255){
            azul = 255
        }
    }
    }
    img.updatePixels();
}
function draw(){
    image(img, 0, 0);
}







if (brillo < 99) {
nuevoColor = 0;
} else {
nuevoColor = 255;
}

img.set(pixelX, pixelY, nuevoColor);





