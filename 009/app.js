'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const namas = ['Petras', 'Birute', 'Bebras'];

console.log(typeof namas);

console.log(namas[2]);

console.log(namas[0]);

namas [3] = 'Barsukas';

namas [9] = 'Zirafa';

namas [6] = true;

namas [7] = [1, 2, 3];

console.log(namas);

for(let i = 0; i < namas.length; i++ ){
    console.log(namas[i]);
}

console.log('-------------------');
const cats = ['Pilkis', 'Murka', 'Keris', 'Ukas']

for(let i = 0; i < cats.length; i++ ){
    console.log(cats[i][0],'-', cats[i]);
    
}

console.log('-------------------');
const digits = [5, 8, 9, 45, 13, 78, 9, 10];
console.log(digits);

let digitsSum = 0

for(let i = 0; i < digits.length; i++ ){
  
    digitsSum = digitsSum + digits[i];
   
}
console.log(digitsSum);

console.log('-------------------');

// Pristatymas ant virsaus arba auksto pridejimas

namas.push('Krokodilas')

namas.unshift('Zuikis')

console.log(namas);

console.log('-------------------');


const masyvas = []; 

for(let i = 0; i < 20; i++ ){
  let kauliukas = rand(1,6);
  masyvas.push(kauliukas)
}

console.log(masyvas);
console.log('-------------------');

// const trimTrys = []; 

// for(let i = 0; i < 33; i++ ){
 
//   let kaulas = rand(0,1);

//   if(kaulas == 0){
//     kaulas = 'A' ;
//   }else {
//       kaulas = 'B'
//   }
//   trimTrys.push(kaulas)
// }

//console.log(trimTrys);
console.log('-------------------');


// const trimTrys = []; 

// for(let i = 0; i < 33; i++ ){
 
//   let kaulas = rand(0,1);

//   if(kaulas == 0){
//     kaulas = 'A' ;
//   }else if(kaulas ==1){
//       kaulas = 'B';
//   } else{
//       kaulas = 'C';
//   }
//   trimTrys.push(kaulas)
// }

// console.log(trimTrys);

const arrayAB = [];

for (let i = 0; i < 33; i++) {
    const ab = rand(0, 1) ? 'A' : 'B';
    arrayAB.push(ab);
}

// console.table(arrayAB);


for (let i = 1; i < arrayAB.length; i++) {

    if (arrayAB[i] == 'A' && arrayAB[i - 1] == 'B') {
        arrayAB[i] = 'C';
    }

}


const arrayA = [];
const arrayB = [];
const arrayC = [];
for (let i = 1; i < arrayAB.length; i++) {

    if (arrayAB[i] == 'A') {
        arrayA.push('A');
    } else if(arrayB[i] == 'B') {
        arrayB.push('B');
    } else{
        arrayC.push('C')
    }

}
console.log(arrayA, arrayB, arrayC);

console.log('-------------------');
const penkiosA = []

for (let i = 0; i < 5; i++){
    penkiosA.push ('A')
}

for (let i = 0; i < 5; i++){
    penkiosA.push ('B')
}

for (let i = 0; i < 5; i++){
    penkiosA.unshift ('C')
}

console.log(penkiosA);
console.log('-------------------');
for (let i = 0; i < 3; i++){
    penkiosA.pop ();
    penkiosA.shift();
}

console.log(penkiosA);