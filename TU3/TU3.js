'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log('--------1---------');

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];

bitGirls.unshift('Nauseda')

console.log(bitGirls);

console.log('--------2---------');

const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

const bitCats = [];

const svoris = [];
bitCats.push(cats);
for (let i = 0; i < cats.length; i++){
svoris.push(rand(0, 1) ? 'Storas' : 'Normalus')
}
bitCats.push(svoris)

console.table(bitCats)

console.log('--------3---------');


let storas = 0;
let normalus = 0;
bitCats.forEach((s, i) => {     
    if(s = 'Storas') {
        storas =  i ;
    } 
    console.log(storas);
    
})

console.log('--------4---------');

bitCats.sort((a, b) => { 
    
    if(b[1] > a[1]){
        return -1;
       
    }
    if(b[1] < a[1]){
        return 1;
    }
    return 0;
});

console.table(bitCats)