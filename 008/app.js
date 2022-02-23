'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let siuntinys = 'S';


// if(siuntinys == 'S'){
//     console.log('Galima deti i S');
// }


// if(siuntinys == 'S' || siuntinys == 'M'){
//     console.log('Galima deti i M');
// }

// if(siuntinys == 'S' || siuntinys == 'M' || siuntinys == 'L'){
//     console.log('Galima deti i L');
// }

console.log('--------------------');

switch(siuntinys){
    case 'S' : 
    console.log('Galima deti i S');
    break
    case 'M' : 
    console.log('Galima deti i M');
    break
    case 'L' : 
    console.log('Galima deti i L');
    break
    default: 
    console.log('Galima deti i XL');
}

console.log('--------------------');

let kauliukas = rand(1, 6);

console.log(kauliukas);


switch(kauliukas){
    case  1 :
    case  5 :
        console.log('Televizorius');
        break;

    case 3 :
    case 4 : 
        console.log('Skalbenke');
        break;

    case 2 :
    case 6 :
        console.log('Saldytuviuks');
}
console.log('----------While----------');
// for (let i = 0; i < 3; i++){
//     console.log('Valio', i);
// }

let i = 8;
while (i < 3){
    
    console.log('Valio', i);
    i++;
}

console.log('----------Do while----------');

let k = 8;

do {
    
    console.log('Valio', k);
    k++;
}while( k < 3);


console.log('--------------------');
// while gali suktis nuo 0 iki begalybes
// do while nuo 1 iki begalybes

// for naudojamas kai is anksto YRA zinoma kiek ciklu bus
// while ir do while naudojams kai is ankto NERA zinoma kiek ciklu bus

let kartai = 0;
let iskrito;

do {
    kartai++;
    iskrito = rand(0, 1); // 0 -> Herbas, o 1 -> Skaicius
    console.log(iskrito);

}while(iskrito == 1);

console.log('Kartai', kartai);

console.log('--------------------');

let kartai1 = 0;

let iskrito1;
let suma = 0;
do{
    iskrito1 = rand(1, 6);
    kartai1++;
    console.log(iskrito1);
    suma = suma + iskrito1;
    
}while(suma  <= 21);

console.log('Kiek kartu ', kartai1, 'Suma', suma);

console.log('--------------------');




// let kauliukas2;

// do{
//     kauliukas2 = rand(1, 6);
//     console.log(kauliukas2);
// } while(kauliukas2 != 1 && kauliukas2 != 4);



// let sesetas = 0;

// do {
//     let kauliukas = rand(1, 6);
//     console.log(kauliukas);
//     if(kauliukas == 6){
//         sesetas++;
//         console.log('-');
//     }
// } while (sesetas != 3);


// let sesetas1 = 0;

// do {
//     let kauliukas = rand(1, 6);
//     console.log(kauliukas);
//     if(kauliukas == 6){
//         sesetas1++;
//     }else{
//         sesetas1 = 0;
//     }
// } while (sesetas1 != 3);




for(i = 0; i < 10; i++){


    let porinisRandomas;

    do{
        porinisRandomas = rand(100, 300);

    }
    while ( porinisRandomas % 2);
    
    console.log(porinisRandomas);
}






