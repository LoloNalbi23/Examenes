function isDivisible(a,b,numeros) {
    if(a%b===0){
        console.log(a/b)
        console.log(numeros.filter((n)=>n%5===0));
    }else {
        return false;
    }
}
let numeros = [3,78,90,45,69,20];
let a = 40;
let b = 20;
isDivisible(a,b,numeros);