'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// const abcdz = () => {

//     let raide = rand(0,4);
// for(let i=0; i<2; i++){
//     if(raide == 0){
//         return 'a';
//     }
//     if(raide == 1){
//         return 'b';
//     }
//     if(raide == 2){
//         return 'c';
//     }
//     if(raide == 3){
//         return 'z';
//     }
// }
// console.log(raides);
// }
// let callback;
// const abcdz = () => 'abcdz' [rand(0, 4)];

// console.log(abcdz());

// callback = callback || (() => {'abcdz' [rand(0, 4)]})

// console.log(callback);



const abcdz = () => {
    const word = 'abcdz';
    const random = rand(0,word.length - 1);
    return word[random];
}
console.log(abcdz(2))

// 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' [rand(0, 28)];

const az = () => {
    const word = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const random = rand(0,word.length - 1);
    return word[random];
}

const aPlius = () => {
    const word = 'ąčęėįšųūž';
    const random = rand(0,word.length - 1);
    return word[random];
}
const _123 = () => {
    const word = '0123456789';
    const random = rand(0,word.length - 1);
    return word[random];
}

const line = l => { 
let returnStr = '';
for (let i = 0; i < l; i++){
    returnStr = returnStr + abcdz();
}
return returnStr;
}
console.log(line(22));
console.log(az(3));

const fancyLine = (l, f) => { 
    let returnStr = '';
    for (let i = 0; i < l; i++){
        returnStr = returnStr + f();
    }
    return returnStr;
    }

    console.log(fancyLine(10, az));
    console.log(fancyLine(10, aPlius));
    console.log(fancyLine(10, _123));



    const  sumavimas = (a,b) => a + b;
    const  daugyba = (a,b) => a * b;  
    const  atimtis = (a,b) => a - b;
    const  dalybas = (a,b) => a / b;
    // const liekana = (a,b) => (a / b)%2


    const calculator = (a, b, c) => c(a,b);

console.log(calculator(6,3,(a,b) => a%b));

const print = () => {
    console.log(aPlius());
}

// setInterval(print, 1000);


// setInterval( () => {
//     console.log('~!@#$%^&*'[rand(0,7)]);
// }, 1000)

// clearInterval(10);



// for (let i = 0; i < girls.length; i++){
//     console.log(girls[i]);
// }

// girls.forEach(i => console.log(i))

const girls = ['Lina', 'Birutė', 'Justė', 'Brigita', 'Deimantė'];

const printGirl = (girls) => {
    console.log(girls);
}

girls.forEach(printGirl);




const masyvas = []; 

for(let i = 0; i < 10; i++ ){ 
  masyvas.push(rand(0,11))
  
}

console.table(masyvas);

let suma = 0
masyvas.forEach(s => suma = suma + s)



let maziausias = 11;
let maziausiasVieta = 0;

masyvas.forEach((s, i) => {     // (s, i) -> Antras kintamasis parodo vieta
    if(s < maziausias) {
        maziausias = s;
        maziausiasVieta = i;
    }
})

let penki = 5;
let penkiVieta = 0;
masyvas.forEach((s, i) => {     // (s, i) -> Antras kintamasis parodo vieta
    if(s == penki) {
        penkiVieta = i;
        // console.log(penkiVieta); Suraso visus penketus
    }
})
console.log('suma', suma);
console.log('Maiziausias skaicius',maziausias);
console.log('Maziausio skaiciaus vieta', maziausiasVieta);
console.log('Penket vieta:',penkiVieta);



const allGirls = [];

for (let i = 0; i < girls.length; i++){
    const svoriai = rand(45, 95)
    const vardai = girls[i];
    const tarpinis = [];
    
    tarpinis.push(vardai);
    tarpinis.push(svoriai);
    tarpinis.push(rand(0, 1) ? 'soka' : 'nesoka')
    allGirls.push(tarpinis)

}



console.table(girls)

girls.sort((a, b) => {
    if(a > b){
        return 1;
    }
    if(a < b){
        return -1;
    }
    return 0;
});

console.table(allGirls)

// allGirls.sort((a, b) => b[1] - a[1])
allGirls.sort((a, b) => { 
    
    if(b[2] > a[2]){
        return 1;
       
    }
    if(b[2] < a[2]){
        return -1;
    }
    return 0;
});

console.table(allGirls)
