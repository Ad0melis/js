'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ['Brigita', 'Juste', 'Deimante'];

for (let i = 0; i < bitGirls.length; i++){

    const girls = bitGirls[i];

    for (let k = 0; k < girls.length; k++){
        console.log(girls[k]);
    }
    console.log('-------------');
}



const bigHouse = [
    ['Tomas', 'Sigute'],
    ['Bebras', 'Bronius'],
    ['Aiste', 'X'],
    ]
    for (let i = 0; i < bigHouse.length; i++){

        const flat = bigHouse[i];
    
        for (let k = 0; k < flat.length; k++){
            console.log(flat[k]);
        }
        
    }

    console.log('-------------');

    const _3X3 = [];


    for (let i = 0; i < 3; i++) {
    
        const _3 = [];
        for (let k = 0; k < 3; k++) {
            _3.push('A');
        }
    
        _3X3.push(_3);
    
    }
    
    console.log(_3X3); 

    console.log('-------------');
    const kryziukai = [];


    for  (let i = 0; i < 3; i++){
        
        const lentele = [];
        
        for (let k = 0; k < 3; k++){
            let simbolis = rand(0, 1)
            if(simbolis == 1){
                lentele.push('X');
            } else {
                lentele.push('O');
            }

        }
        kryziukai.push(lentele);
        
        
    } 

    console.table(kryziukai);

 if((kryziukai[1][1] == kryziukai[0][0] && kryziukai[1][1] == kryziukai[2][2]) || 
    (kryziukai[1][1] == kryziukai[2][0] && kryziukai[1][1] == kryziukai[0][2])) {
        console.log('Laimejo', kryziukai[1][1]);
    } else {
        console.log('Niekas nelaimejo');
    }

    console.log('-------------');

    

    _3X3[rand(0,2)][rand(0,2)] = 'Nauseda';

    console.table(_3X3); 

    
for(let i = 0; i < _3X3.length; i++ ){
  
    for(let k = 0; k < _3X3.length; k++ ){
        if(_3X3[i][k] == 'Nauseda'){
            console.log('Vieta:', i, k);
    }
}
}



console.log('-------------------');

const cats = ['Murka', 'Rainis', 'Pilkis', 'Kniauklys', 'Miauksius', 'Kakorius'];

const allCats = [];
let suma = 0; 
 for (let i = 0; i < cats.length; i++ ){
    const svoriai = rand(3, 7);
     const vardai = cats[i];
     const oneCat = [];
     oneCat.push(vardai);
     oneCat.push(svoriai);
     allCats.push(oneCat)
     suma = suma + svoriai;
 }
console.log(allCats);

console.log('Svoris', suma);



