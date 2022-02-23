'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pasisveikinimas(par1, par2){
    console.log(par2, ', aš ', par1);
} 

console.log('Startas');


let v = 'Jonas';

pasisveikinimas(v, 'hello');
console.log('---------------');
pasisveikinimas('Murka', 'ciao');
console.log('---------------');
pasisveikinimas();


console.log('Finišas');

console.log('---------------');
function sumavimas(sk1, sk2){
    console.log(sk1 + sk2);
}


sumavimas(rand(0, 50), rand(0, 50))

sumavimas(11, 12)


const linija = function(m = '-'){
    let X10 = '';
    for (let i = 0; i < 10; i++){
        X10 = X10 + m;
    }
    return X10;
}

linija();
linija();
linija();
linija();

linija('+');

const lin = linija('=^_^=   ')

console.log(lin);

console.log('---------------');
const skaiciuotuvas = function(skaiciusOne, skaiciusTwo, simbolis){
 
      let rez = 0;
      if(simbolis == '*'){
          rez = skaiciusOne * skaiciusTwo;
      } else if (simbolis == '+'){
        rez = skaiciusOne + skaiciusTwo;
      }
    return rez;
         
}


const skaiciu = skaiciuotuvas(2, 3, '*');

console.log(skaiciu);

console.log('---------------');


const calc = function(a,b,z){
    if(z =='+'){
        return a + b;
    }
    if(z == '*')
    return a * b;
}

console.log(calc(1,2,'+'));
console.log(calc(1,2,'*'));

console.log('---------------');



const mas = function(c){
    const m = [];
    for ( let i = 0; i < c; i++){
        m.push(rand(0, 7))
    }
    return m ;
}

console.log(mas(3));