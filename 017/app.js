function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(document.querySelector('div'))
console.log(document.querySelector('div + div'))
console.log(document.querySelector('div + div + div'))

const cat = document.querySelector('div');
const dog = document.querySelector('div + div');
const racoon = document.querySelector('div + div + div');

cat.style.color = 'purple';
dog.style.color = 'magenta'


cat.addEventListener('click', () => {
    
    cat.style.color = 'yellow';
    
} )


setInterval(() => {
    
    if(racoon.style.color == 'black'){
        racoon.style.color = 'red'
    } else {
        racoon.style.color = 'black'
    }
   
}, 200  );


const clowns = document.querySelectorAll('li');


// for (let i = 0; i < clowns.length; i++){
//     clowns[i].style.color = "pink";
// }

clowns.forEach (c => c.style.color = 'pink');


// clowns.forEach ((c, i) => {
//     if(i % 2)

        
// setInterval(() => {
    
//     if(c.style.color == 'black'){
//         c.style.color = 'red'
//     } else {
//         c.style.color = 'black'
//     }
   
// }, 400  );

//     })

clowns.forEach((c, i) => {
    if (i % 2) {
        c.style.color = 'red';
    }
})


setInterval(() => { // end main
    clowns.forEach((c, i) => {
        if (i % 2) {
            if (c.style.visibility == 'visible') {
                c.style.visibility = 'hidden';
            } else {
                c.style.visibility = 'visible';
            }
        }
    })
}, 100);

console.log(clowns)

const bigNames = [];

clowns.forEach(c => {bigNames.push(c.innerText)});

bigNames.sort((a, b) => { 
    
    if(b > a){
        return 1;
       
    }
    if(b < a){
        return -1;
    }
    return 0;
});

// console.log(bigNames);

const day = document.querySelector('.day');

const dayHtml = '<h2>Big Day</h2>';

day.innerHTML = dayHtml;





const sekcija = document.querySelector('section');

const trysServizai = `
<ul>
    <li>Servizas</li>
    <li>Servizas</li>
    <li>Servizas</li>
</ul>
`;

sekcija.innerHTML = trysServizai;

const sectionR = document.querySelector('.random');


let rHtml 
;


rHtml = '<ul>'


for (let i = 0; i < 22; i++){
    rHtml = rHtml + '<li>' + rand(100, 999) + '</li>'
}

rHtml = rHtml + '</ul>'

sectionR.innerHTML = rHtml;


