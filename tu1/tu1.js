function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. 
let kauliukas1 = rand(1, 6);
let kauliukas2 = rand(1, 6);

if (kauliukas1 + kauliukas2 > 8) {
    console.log('Laimėjau', kauliukas1, kauliukas2);
} else {
    console.log('Pralaimėjau', kauliukas1, kauliukas2);
}

//2

let pilkis = rand(3, 6);
let murklys = rand(3, 6);

console.log('Pilkio svoris', pilkis, 'Murklio svoris', murklys);
if (pilkis == murklys) {
    console.log('Katinukai sveria vienodai');
} else if (pilkis < murklys) {
    console.log('Pilkis lengvesnis');
} else {
    console.log('Murklys lengvesnis');
}

//3

// let katinukai = rand(0, 30);
// let karvutes = rand(0, 30);

// console.log(katinukai, karvutes);

// if(katinukai <= 15 && karvutes <=15){
//     console.log('Telpa');
// } else if (katinukai <= 15 && karvutes > 15 ){
//     console.log('Telpa');
// } else if ( katinukai > 15 && karvutes <= 15){
//     console.log('Telpa');
// } else{
//     console.log('Netelpa');
// }

//4

// let kauliukas = rand(1, 6);
// console.log('Kauliuko skaicius', kauliukas)

// if (kauliukas = 1 || kauliukas = 5){
//     console.log('Televizorius');
// } else if(kauliukas = 3 || kauliukas = 4){
//     console.log('Skalbimo masina');
// } else{
//     console.log('Saldytuvas')
// }

//Atsakymai 

//1 Gerai 
//2 Gerai
//3 0.5 gerai

console.log('-------------------------------3-----------------------');
let katinukai = rand(0, 30);
let karvutes = rand(0, 30);

console.log(katinukai, karvutes);

if (katinukai > 15 || karvutes > 15) {
    console.log('Neplaukia');
} else {
    console.log('Plaukia');
}

// 4
// 0.5 gerai


let sk1 = rand(1, 7);
let sk2 = rand(1, 7);
let sk3 = rand(1, 7);

if (sk1 <= sk2 && sk1 <= sk3) {
    if (sk2 <= sk3) {

    }
} else if (sk <= sk1 && sk2 <= sk3) {

} else {

}