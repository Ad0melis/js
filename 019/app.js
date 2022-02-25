function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// document.querySelector('h1').innerHTML = ('<span>Barsukas</span>')

// const h1 = document.querySelector('h1');
// const span = '<span>Barsukas</span>'

// h1.innerHTML = span;

const h1 = document.querySelector('h1');

const span  = document.createElement('span');

const text = document.createTextNode('Barsukas');

span.appendChild(text);

h1.appendChild(span);



const section = document.querySelector('section');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    // 1. sukuriam elementą
    const p = document.createElement('p');

    // 2. sukuriam tekstą
    const text = document.createTextNode(rand(1, 5));

    // 3. teksto dėjimas į elementą
    p.appendChild(text);

    // 4. patalpinam elemetntą į matomą dokumento dalį
    section.appendChild(p);
});


const input = document.querySelector('input');
const divHello = document.querySelector('.hello');

let count = 0;

    input.addEventListener('click', () => {

      count++
    // 1. sukuriam elementą
    const span = document.createElement('span');

    // 2. sukuriam tekstą
    const text = document.createTextNode(count + ' Hello');

    // 3. teksto dėjimas į elementą
    span.appendChild(text);

    // 4. patalpinam elemetntą į matomą dokumento dalį
    divHello.appendChild(span);
});


const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

const catsDiv  = document.querySelector('.cats');


cats.forEach(cat => {

    
    
    const p = document.createElement('div');

    
    const text = document.createTextNode(cat);

    
    p.appendChild(text);

    
    catsDiv.appendChild(p);
});

const cars = [

    { maker: 'Volvo', color: 'blue' },

    { maker: 'MB', color: 'yellow' },

    { maker: 'Opel', color: 'pink' },

    { maker: 'Volvo', color: 'orange' },

    { maker: 'Audi', color: 'blue' },

    { maker: 'Ferrari', color: 'red' },

    { maker: 'MB', color: 'gray' },

    { maker: 'Scania', color: 'yellow' },

    { maker: 'Kamaz', color: 'orange' },

    { maker: 'Saab', color: 'brown' }

];

const auto = document.querySelector('.cars');



cars.forEach(cars => {

    
    
    const p = document.createElement('div');

    p.style.color = cars.color;
    const text = document.createTextNode(cars.maker);

    
    p.appendChild(text);

    
    auto.appendChild(p);
});


const cars2 = [

    ['Volvo', 'blue', 55],

    ['MB', 'yellow', 0],

    ['Opel', 'pink', 11],

    ['Volvo', 'orange', 78],

    ['Audi', 'blue', 0],

    ['Ferrari', 'red', 99],

    ['MB', 'gray', 20],

    ['Scania', 'yellow', 78],

    ['Kamaz', 'orange', 98],

    ['Saab', 'brown', 0]

];

const divCars2 = document.querySelector('.cars2');

cars2.forEach(cars => {

    if(cars[2] == 0){
        cars[0] = '';
        
    } else {
        cars[0] 
    }
    console.log();
    const p = document.createElement('div');

    p.style.color = cars[1]

    
    const text = document.createTextNode(cars[0]);

    
    p.appendChild(text);

    
    divCars2.appendChild(p);
});