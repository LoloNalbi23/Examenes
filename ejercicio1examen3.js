function isDivisible(a,b) {
    if(a%b===0){
        numeros.push(a/b)
    }else {
        return false;
    }
}


let numeros = [3,78,90,45,69,20];
let a = 40;
let b = 20;
console.log(isDivisible(a,b))
console.log(numeros.filter((n)=>n%5===0))