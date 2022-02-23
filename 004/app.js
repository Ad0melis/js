function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Teatre keturi iejimai. Vietos random nuo 1 iki 200.
// per kuri iejima eiti?
// porines vietos i desine, neporines - i kaire.
// iki 100 (iskaitant) i apacia, virs 100 - i virsu.
let vieta = rand (1, 200);
console.log(vieta);

if(vieta % 2 ){
    // neporinis/ nelyginis i kaire
    if(vieta <= 100){
        console.log('Kaire-Apacia')
    }
    else{
        console.log('Kaire-Virsus');
    }
} else{
    // porinis/lyginis i desine
    if(vieta > 100){
        console.log('Desine-Apacia');
    }
    else{
        console.log('Desine-Virsus');
    }
}
// ternery opertor
let kokiaSpalva;

console.log(typeof kokiaSpalva);

if(0){
    kokiaSpalva = 'Raudona';
} else{
    kokiaSpalva = 'Geltona';
}

console.log(kokiaSpalva);

// Priskiriama reiksme 

let katinoVardas;

console.log(katinoVardas);

katinoVardas = (1) ? 'Rudis' : 'Pilkis'; // if'o elso' uzrasymas sutrumpintai
console.log(katinoVardas);

// 1 - A, 2 - B, 3 - C

let number = 1;
let letter;

console.log(letter);

letter = (number == 1) ? 'A' : ((number == 2) ? 'B' : 'C'); // idetas dar vienas else ifas

// letter = number == 1 ? 'A' : number == 2 ? 'B' : 'C';

console.log(letter);

// Jei true Didinam +1, jei false Mazinam -1

let didMaz = 5;

if(0){
    didMaz++;
} else{
    didMaz--;
}

true ? didMaz++ : didMaz--; // ? true ++ : false --

console.log(didMaz);

console.log('z' < 'a'); 
console.log(122 < 97); 

let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirkles') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirkles') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu

console.log('As', as);
console.log('Tu', tu);

if (as == tu ){
    console.log('lygiosios');
} 
else{
    if (as == 'popierius'){
        console.log(tu == 'zirkles' ? 'Tu' : 'As');
    }
    else if ( as == 'akmuo'){
        console.log(tu == 'zirkles' ? 'As' : 'Tu');
    } else {
        console.log(tu == 'akmuo' ? 'Tu' : 'As');
    }
}
