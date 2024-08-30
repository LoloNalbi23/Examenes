function isDivisible(word,word2){
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    word = word.toUpperCase()
    word2 = word2.toUpperCase() //las pongo en mayuscula para que funcione con el abecedario
//veo si la primera palabra es capicua
    for(let i = 0;i<word.length;i++){
        let letra = word[i];
        let indice = abc.indexOf(letra)     //agrego al arreglo el indice segun el abecedario de cada letra
        palabrac.push(indice)
    }
    for(let i = 4;i>=0;i--){
        let letra = word[i];
        let indice = abc.indexOf(letra)  //hago lo mismo de arriba pero con la palabra al revez
        if (indice !== -1) {
        palabrac01.push(indice)
        }
    }

    if(palabrac[0]===palabrac01[0] && palabrac[1]===palabrac01[1] && palabrac[2]===palabrac01[2] && palabrac[3]===palabrac01[3]){
        for(let i = 0;i<word;i++){
            let acum=0
            acum++
            console.log(acum);
        }    //me pregunto si los elementos son iguales para ver si es capicua
    }
//veo si la segunda palabra es capicua
    for(let i = 0;i<word2.length;i++){
        let letra = word2[i];
        let indice = abc.indexOf(letra)     //agrego al arreglo el indice segun el abecedario de cada letra
        palabrac1.push(indice)
    }
    for(let i = 3;i>=0;i--){
        let letra = word2[i];
        let indice = abc.indexOf(letra)    //hago lo mismo de arriba pero con la palabra al revez
        if (indice !== -1) {
        palabrac2.push(indice)
        }
    }

    if(palabrac2[0]===palabrac1[0] && palabrac2[1]===palabrac1[1] && palabrac2[2]===palabrac1[2]){
        for(let i = 0;i<word2;i++){                                       //me pregunto si los elementos son iguales para ver si es capicua
            let acum=0
            acum++
            console.log(acum);
        }  
    }
}
let palabrac = [];
let palabrac01 = [];
let palabrac1 = [];
let palabrac2 = [];
let word = 'hola'                   //variables auxiliares
let word2 = 'ala'
isDivisible(word,word2,palabrac,palabrac01,palabrac1,palabrac2);














/*for (let i = 0; i < input.length; i++) {
        let index = Abc.indexOf(LetraCode);

        
            let NextlETRA = Abc[(index + n) % Abc.length];
            result += NextlETRA;
        } else {
            result += LetraCode;
        }
    }
*/