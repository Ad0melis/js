'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log('----------1-----------');

for(let i = 10; i > 0; --i){
 
    console.log('Likę ratai:', i);
}

console.log('---------2------------');

let vidutinisGreitis = 0;

for (let i = 0; i < 10; i++){
    let greitis = rand(120, 240);
    vidutinisGreitis = vidutinisGreitis + greitis ;
}

console.log('Vidutinis greitis:', vidutinisGreitis / 10);

console.log('---------3------------');

let kuroSanaudos ;
let bakoLikutis = 0;
let pabaiga;

for (let i = 0; i < 10; i++){
    kuroSanaudos = rand (3, 6);
    bakoLikutis = bakoLikutis + kuroSanaudos;
    

    if(bakoLikutis > 44){
        pabaiga ='Lenktynių Nebaigė';
        break; 
    } 
        else{
       pabaiga = 'Lenktynes baige';
    }
       
}

console.log(bakoLikutis, pabaiga);

console.log('---------4------------');


for (let i = 0; i < 10; i++){

let greitisPosukyje = 0;

for (let i = 0; i < 5; i++){
let posukiai = rand(20, 120);
greitisPosukyje = greitisPosukyje + posukiai;

 }
 greitisPosukyje
}
