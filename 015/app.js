'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const house = {};

house.people = ['Nauseda', 'Bebras', 'Antanas'];
house.tube = [1, 2];
house.address = 'Guobu g. 13';

console.table(house);
console.log(house.tube);

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

const catOwner = {};

// bitGirls.forEach(s => rand(0, bitGirls.lenght))

catOwner.Mergina = bitGirls[rand(0, bitGirls.length - 1)];
catOwner.Katinas = cats[rand(0, cats.length - 1)];
catOwner.pills = {};
catOwner.pills.red = !rand(0, 1);
catOwner.pills.blue = !rand(0, 1);


console.log(catOwner);

const petClinic = [];

for (let i = 0; i < 22; i++ ){
    petClinic[i] = {};
    petClinic[i].Mergina = bitGirls[rand(0, bitGirls.length - 1)];
    petClinic[i].Katinas = cats[rand(0, cats.length - 1)];
    petClinic[i].pills = {};
    petClinic[i].pills.red = !rand(0, 1);
    petClinic[i].pills.blue = !rand(0, 1);
    
}
petClinic.sort((a, b) => {
    if (a.Mergina > b.Mergina ) {
        return 1;
    }
    if (a.Mergina  < b.Mergina ) {
        return -1;
    }
    return 0;
});

console.log(petClinic);

let blueCount = 0;

petClinic.forEach(o => o.pills.blue ? blueCount++ : '')

console.log(blueCount);

const dog = {};

dog.name = 'Dogis';
dog.tail = true;

console.log(dog)

// function voice(au){
//     console.log('Au au')
// }

// voice(dog);

dog.voice = () => {
    console.log('Auu Auu');
}

dog.voice();


