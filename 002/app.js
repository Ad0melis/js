// RECAP    


let pirmas;
let antras;

let suma;
let dideleSuma;

pirmas = 10;
antras = 20;

pirmas = 25;

suma = pirmas + antras;

dideleSuma = pirmas + antras + 100;


console.log(suma, dideleSuma);

let raideA = 'A';
let raideB = 'B';
let trecias = 'ZZ'

console.log(typeof pirmas);
console.log(typeof trecias);

let operacija;

operacija = raideA + raideB + '--- --- ---' + 'SUPER' + 55;

console.log(operacija);


let cat1 = '=';
let cat2 = '_';
let cat3 = '^';


let katinukas;

katinukas = cat1 + cat3 + cat2 + cat3 + cat1;

console.log(katinukas);


let kintamasis1 = '5';
let kintamasis2 = 5;

console.log(kintamasis1 * kintamasis2);


let namas = 'ABC';

console.log(namas[1], namas[2]);



let catParts = '^_=';

let newCat = catParts[2] + catParts[0] + catParts[1] + catParts[0] + catParts[2];

console.log(newCat)

// console.log(catParts[2] + catParts[0] + catParts[1] + catParts[0] + catParts[2]);

let T = true; //true= 1
let F = false; //false= 0

// Loginei operatoriai || - arba , && - ir , ! - ne

console.log( 'T || T', T || T);
console.log( 'T || F', T || F);
console.log( 'F || T', F || T);
console.log( 'F || F', F || F);


console.log( 'T && T', T && T);
console.log( 'T && F', T && F);
console.log( 'F && T', F && T);
console.log( 'F && F', F && F);

console.log( '!T', !T);
console.log( '!F', !F);

console.log('asilas', !'asilas');
console.log('', !''); //Vienintelis string virstantis i false
console.log(' ', !' ');
console.log('stringas 0', !'0');

console.log(0, !!1); // vienintelis skaicius virstantis i false
console.log(21321, !!21321);

let kodas;


if(25 * 25){
    // block1
    kodas = 'per BLOCK 1 ';
}

else{
    // block2
    kodas = 'per BLOCK 2 ';
}

console.log(kodas);


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let diena;

diena = rand (0, 1);

if(diena){
    kokia = 'Buvo gera diena';
}

else{
    kokia = "Buvo košmariška diena";
}

console.log(kokia);

console.log(100 / 0);


let skaicius = rand(5, 15);
let random = rand(0, 1)

console.log(skaicius);

if(random){
    console.log(skaicius + 1);
}
else{
    console.log(skaicius - 1);
}


let pagrindiniame = 'Labas ';
let salutinis

if(1){
     salutinis = 'Afrika';
    console.log(pagrindiniame + salutinis);
}
else{
     salutinis = 'Amerika';
    console.log(pagrindiniame + salutinis);
}

console.log(pagrindiniame + salutinis);

if (0){
    console.log('green');
}
else if(0){
    console.log('blue');
}
else{
    console.log('red');
}