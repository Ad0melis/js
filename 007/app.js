'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//for ciklas 12 kartų, jo viduje matamas kauliukas ran 1 - 6 gautus random skaičius spausdinkit ir paskaičiuokit ir atspausdinkit tų skaičių sumą.

let suma = 0;

for(let i = 0; i < 12 ; i++){
    let kaul = rand(1, 6);
    
    console.log(kaul);

    suma = suma + kaul; //Suma = 0, ir sukamas ciklas 12 kartu

}
console.log('Suma:', suma);
console.log('------------');

//for ciklas 12 kartų, jo viduje matamas kauliukas ran 1 - 6 gautus random skaičius spausdinkit ir paskaičiuokit ir atspausdinkit tų skaičių sumą. Jeigu suma nepasibaigus ciklui viršina 35 (t.y. suma > 35), ciklo sukti daugiau nebereikia. DONE!
let suma1 = 0;

for(let i = 0; i < 12 ; i++){
    let kaul1 = rand(1, 6);
    
    console.log(kaul1);
    if (suma1 + kaul1 > 35) {
        break;
    }

    suma1 = suma1 + kaul1;


    
}
console.log('Suma:', suma1);

console.log('------------');



let suma2 = 0;
let ratai = 0;

for(let i = 0; i < 17 ; i++){
    let kaul2 = rand(1, 6);
    
    console.log(kaul2);

    if (suma2 + kaul2 > 35) {
        break;
    }

    suma2 = suma2 + kaul2;

    ratai = i ;
    
}

console.log('Suma:', suma2, 'Is viso ratu:', ratai, 'Iki 17 ratu truko', 17 - ratai);


console.log('------------');

let suma3 = 0;
let ratai3 = 0;
for(let i = 0; i < 12 ; i++){
    let kaul3 = rand(1, 6);
    
    if (kaul3 === 3) {
        continue;
    }
    
    console.log(kaul3);
    suma3 = suma3 + kaul3;
    ratai3 = i;
}

console.log('Suma be trejetų:', suma3, 'Ratai be trejetų:', ratai);

console.log('------------');

let pliusas = '';
for (let i = 0; i < 10; i++){   
    
    pliusas = pliusas + '+';
}
console.log(pliusas);

console.log('------------');

// for (let i = 0; i < 3; i++){
//     console.log('Eina DIDELIS ratas Nr.', i + 1);
//     for (let k = 0; k < 3; k++){
//         console.log('Eina mazasis ratas Nr.', k + 1);
//         for (let l = 0; l < 3; l++){
//             console.log('myzyliukas Nr.', l + 1);
            
//         } 
//     }
// }
console.log('------------');


for (let l = 0; l < 10; l++){
let kvad = '';

    for (let i = 0; i < 10; i++){   
    kvad = kvad + '+';
}

console.log(kvad);
}

console.log('------------'); // laikrodis



// let minutes = 0;

// for (let i = 0; i < 4 ; i++){

//    minutes = minutes + 15;
// }

// console.log(minutes);
console.log('------------'); // laikrodis be formatavimo

for(let valandos = 0; valandos < 24; valandos++){

    for (let minutes = 0; minutes < 60; minutes = minutes + 15)

    console.log(valandos + ':' + minutes);
}

console.log('------------'); // laikrodis su formatavimo

for(let valandos1 = 0; valandos1 < 24; valandos1++){

    for (let minutes1 = 0; minutes1 < 60; minutes1 = minutes1 + 15)

    console.log(
        valandos1.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false
     }) + 
     ':' +  
     minutes1.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false
    }));
}