'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const katinukas = [];

for(let i = 0; i < 10; i++ ){
    let lyginis = rand(6, 26) % 2;
    katinukas.push(lyginis);
 const namas1 = [];
}


katinukas[rand(0,9)] = 'Katinukas';

console.log(katinukas);

for(let i = 0; i < katinukas.length; i++ ){
    if(katinukas[i] == 'Katinukas'){
        console.log('Vieta:', i);
        break;
    }
}


console.log('-----------------');

// const catsVsRand = [];

// for (let i = 0; i < 5; i++){
    
//     catsVsRand.push('Katinukas');
//     catsVsRand.push(rand(6, 26));
// }

// console.log(catsVsRand);


const catsVsRand = [];
let suma = 0;
for (let i = 0; i < 5; i++){
    
    catsVsRand.push('Katinukas');
    catsVsRand.push(rand(6, 26));

   
}

console.table(catsVsRand);

let sumaRand = 0;

for (let i = 0; i < 5; i++){

    catsVsRand.shift();
    sumaRand = sumaRand +catsVsRand.shift();
}

console.log(sumaRand);