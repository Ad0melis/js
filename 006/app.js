'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// let ratai = 2;

// for (let i = 0; i < ratai; i++) {
//     console.log('Rate Nr.', i);
// }
// console.log('Pabaiga');



for (let i = 1; i <= 5; i++){
    console.log(i);
}



let raidynas = 'ABCDEF'
for (let p = 0; p < raidynas.length; p++){
    console.log(raidynas[p]);
}


for (let i = 1; i <= 5; i++){
    console.log(i * 10);
}

let skaiciai1 = 0;
let skaiciai2 = '';

for (let a = 1; a <= 15; a++){   
    
    skaiciai2 = skaiciai2 + a;
}

console.log(skaiciai2);

let zvaigzde = '';
for (let a = 1; a <= 400; a++){   
    
    zvaigzde = zvaigzde + "*";
}
console.log(zvaigzde);


let atvirksciai = '';

for (let i = 1; i < 16; i++){   
    console.log(i);
    atvirksciai = i + atvirksciai;
}

console.log(atvirksciai);


let atvirksciai1 = '';
for(let  i = 15; i >= 1 ; i--){
    atvirksciai1 = atvirksciai1 + i;
}

console.log(atvirksciai1);


// let kiekIskrito = 0;


// for (let i = 0; i < 10; i++){
//     let kauliukas1 = rand(1, 6) ;
//     if( kauliukas1 == 3){
//         kiekIskrito++
//     }
// }

// console.log(kiekIskrito);

let trejetai = 0;

for (let i = 0; i < 10 ; i++){
    let kauliukas = rand(1, 6);
    if( kauliukas == 3){
        trejetai++;
    }
}
console.log('trejetai', trejetai)


let suma = 0;

for(let i = 0; i < 10 ; i++){
    let kauliukas1 = rand(1, 6);
    let kauliukas2 = rand(1, 6);

    if( kauliukas1 + kauliukas2 == 6 || kauliukas1 + kauliukas2 == 7)
        suma++;
}

console.log('Kiek iskriro suma lygi 6 arba 7:', suma);

let max = 1;

for(let i = 0; i < 10 ; i++){
    let atsitik = rand (1, 100);
    if(atsitik > max){
        max = atsitik;
    }
    console.log(atsitik);
}
console.log('didziausias skaicius', max);

let max1 = 1;

for(let i = 0; i < 10 ; i++){
    let atsitiko = rand (1, 10);
    if(atsitiko > max1){
        max = atsitiko;
    }
    console.log(atsitiko);
}
console.log('didziausias skaicius', max1);