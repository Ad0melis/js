function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
// console.log('Labas');
// console.log('Labas dar karta');
// console.log('Labas dar dar karta');


// let vaiko1Saldainiai;
// let vaiko2Saldainiai;

// let saldainiuSuma;

// vaiko1Saldainiai = 5; // pirmas vaikas turi 5 saldainius
// vaiko2Saldainiai = 6; // antras vaikas turi 6 saldainius

// vaiko1Saldainiai = rand(1, 10);
// vaiko2Saldainiai = rand(1, 10);

// saldainiuSuma = vaiko1Saldainiai + vaiko2Saldainiai;


// console.log('Vaikas 1:', vaiko1Saldainiai);
// console.log('Vaikas 2:', vaiko2Saldainiai);
// console.log('Bendrai:', saldainiuSuma);

let kiekYraZuvu;
let udra1suvalge;
let udra2suvalge;
let kiekLiko;

udra1suvalge = rand(5, 25);
udra2suvalge = rand(10, 30);
kiekYraZuvu = rand(50, 100);


kiekLiko = kiekYraZuvu - udra2suvalge - udra1suvalge; 


console.log('Kiek yra žuvų', kiekYraZuvu);
console.log('Pirma udra suvalge', udra1suvalge);
console.log('Antra udra suvalge', udra2suvalge);
console.log('Kiek liko', kiekLiko);

console.log(8 % 3);

let skaicius;
skaicius = 5;

// skaicius--;
// skaicius--;
// skaicius--;

let x;

// x = skaicius++ + ++skaicius; 

// skaicius = skaicius + 8;
skaicius += 8 ;


console.log(skaicius);
// console.log(skaicius);

let manoVardas = '<h1>Adomas</h1>';

console.log(manoVardas);
