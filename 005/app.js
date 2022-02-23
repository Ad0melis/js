'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let ratai = 2;

for (let i = 0; i < ratai; i++) {
    console.log('Rate Nr.', i);
}
console.log('Pabaiga');

for (let i = 0; i < 22 ; i++){
    console.log('Hello');
} 

for ( let i = 0; i < 22; i++ ){
    let skaicius = rand(1, 5);
    console.log(i, skaicius);
}

for ( let i = 0; i < 14; i++ ){
    
    console.log('Hello Afrika');
}

for ( let i = 1; i < 15; i++ ){
    
    console.log(i, 'Hello Afrika');
}

// let cat = "Murklys";
// let stringoIlgis = cat.length;

// console.log(cat[0], cat[2], cat.length);

// let cat2 = 'Batuotas Katinas';
// console.log(cat2, cat2.length);

// for ( let i = 0; i < 16; i++ ){
// console.log(cat2[rand(0, 16)]);
// }

// let cat2 = 'Batuotas Katinas';
// console.log(cat2, cat2.length);

// for (let i = 0; i < 16; i++ ){
//     console.log(cat2[i]);
// }

let cat2 = 'Batuotas Katinas';
console.log(cat2, cat2.length);

let kiekA = 0;

for (let i = 0; i < cat2.length; i++ ){
    let raide = cat2[i];
    console.log(cat2[i]);
}

let kiekYraRaidziu = 0;

for (let i = 0; i < cat2.length; i++ ){
    let raide = cat2[i];
    if(raide == 't'){
        kiekYraRaidziu++
   }
}

console.log(cat2[kiekYraRaidziu], kiekYraRaidziu );





// let kiekYraRaidziu = 0;

// for (let i = 0; i < cat2.length; i++ ){
//     let raide = cat2[i];
//     if(raide == 't'){
//         kiekYraRaidziu++
//    }
   
// }
// console.log(kiekYraRaidziu, cat2.length);


let pirmaA = false;
let paskutineA = false;


for (let i = 0; i < cat2.length; i++) {

    if (cat2[i] == 'a') {
        paskutineA = i;
        if (pirmaA === false) {
            pirmaA = i;
        }
    }

}

console.log(pirmaA, paskutineA);
