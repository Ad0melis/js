function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let skaicius = 5;
let stringas = 'bla bla bal';
let loginis = true;

console.log(typeof skaicius, typeof stringas, typeof loginis);

console.log('aritmetika', skaicius * skaicius);
console.log('sujungimas', stringas + ' ' + stringas);
console.log('logika', loginis || loginis);

console.log('skirtingi 1', skaicius * loginis); // loginis -> number
console.log('skirtingi 2', stringas + loginis); // loginis -> string


if(1){
    console.log('Jo');
} else {
    console.log('No');
}

// Kartojimo pabaiga (Recap)

// Comparison operators

console.log('3==4', 3==4);
console.log('3==3', 3==3);

console.log('3 > 4', 3 > 4);
console.log('3 < 4', 3 < 4);
console.log('4 < 4', 4 < 4);

console.log('3 < 4', 3 < 4);
console.log('3 > 4', 3 > 4);
console.log('4 > 4', 4 > 4);

console.log('3 >= 4', 3 >= 4);
console.log('3 >= 4', 3 >= 4);
console.log('4 >= 4', 4 >= 4);


console.log('3 <= 4', 3 <= 4);
console.log('3 <= 4', 3 <= 4);
console.log('4 <= 4', 4 <= 4);

console.log('3 != 4', 3 != 4);
console.log('3 != 4', 3 != 4);
console.log('4 != 4', 4 != 4);

console.log('------------------------------------------');
console.log('3== "3"', 3== '3');
console.log('1 == true', 1 == true);

console.log('3 === "3"', 3 === '3');
console.log('1 === true', 1 === true);
console.log('3 === "3"', 3 === '3');

console.log('3 !== 3', 3 !== 3);
console.log('3 !== "3"', 3 !== '3');

if (13 > 5){
    console.log('JO');
} else{
    console.log('NE');
}


let mokinys = rand(1, 10);

console.log('Pazimys', mokinys);

if(mokinys >=4){
    console.log('Islaikyta');
} else{
    console.log('Neislaikyta');
}

let greitis = rand(30, 120);

if(greitis <= 90){
    console.log('Nevirsija', greitis);
}
else{
    console.log('Greitis virsytas', greitis, 'Bauda', (greitis - 90)*5);
}


let sk1 = rand(1, 3);
let sk2 = rand(1, 3);
let suma = sk1 + sk2;
let sandauga = sk1 * sk2;


if (suma > sandauga){
    console.log( 'Pirmas skaicius', sk1, 'Antras skaicius', sk2 ,'Suma daugiau',);
} else{
    console.log('Pirmas skaicius', sk1, 'Antras skaicius', sk2 ,'Sandauga daugiau');
}

// Kitas uzdavinys

let petras = rand(0, 3);
let jonas = rand(0, 3);

if(petras < jonas){
    console.log( 'Petro taskai', petras, 'Jono taskai', jonas, 'Jonas laimejo')
} else if (petras > jonas){
    console.log( 'Petro taskai', petras, 'Jono taskai', jonas, 'Petras laimejo')
} else{
    console.log( 'Petro taskai', petras, 'Jono taskai', jonas, 'Lygiosios')
}

//kita uzduotis

let ekspermentas = rand(1, 4);
console.log(ekspermentas)

if (ekspermentas<2){
    console.log('Pavyko')
} else if(ekspermentas>3){
    console.log('Pavyko');
} else {
console.log('Nepavyko')
}

// Ekspermentas

let ekspermentas1 = rand(1, 4);

console.log(ekspermentas1);

if (ekspermentas1 == 1 || ekspermentas1 == 4){
    console.log('Pavyko');
} else{
    console.log('Nesigavo');
}

// Kazino

let kauliukas1 = rand(1, 6);
let kauliukas2 = rand(1, 6);


if ((kauliukas2 + kauliukas1) > 5 && kauliukas1 == kauliukas2 ) {
    console.log('Laimejau', kauliukas1, kauliukas2,);
} else{
    console.log('Kazino', kauliukas1, kauliukas2,);
}

// teatras

let sedimaVieta = rand(1, 200);

console.log(sedimaVieta);

if (sedimaVieta % 2 ) {
    console.log('Dešinė');
} else if ( sedimaVieta <= 100){
    console.log('Apacia');
} else if( sedimaVieta > 100){
    console.log('Virsus');
} else{
    console.log('Kaire');
}