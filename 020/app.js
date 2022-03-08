function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const i1 = document.querySelector('.i1');
const b1 = document.querySelector('.b1');

// i1.addEventListener('input', () =>{

//     console.log(i1.value);
// });


// b1.addEventListener('click', () =>{
    
//     console.log(i1.value);
// });

const i2 = document.querySelector('.i2');
const b2 = document.querySelector('.b2');

const inputMasyvas = [];

b2.addEventListener('click', () =>{
    inputMasyvas.push(i2.value)
    console.log(inputMasyvas);
});



// const i3 = document.querySelector('.i3');
// const i4 = document.querySelector('.i4');
// const b3 = document.querySelector('.b3');

// const bendrasMasyvas = [];
// const firstM = [];
// const secondM = [];
// b3.addEventListener('click', () =>{

//     firstM.push(i3.value);
//     secondM.push(i4.value);
//     bendrasMasyvas.push(firstM);
//     bendrasMasyvas.push(secondM);
//     console.log(bendrasMasyvas);
// });

const i3 = document.querySelector('.i3');
const i4 = document.querySelector('.i4');
const b3 = document.querySelector('.b3');

const bendrasMasyvas = [];
b3.addEventListener('click', () =>{

    bendrasMasyvas.push([i3.value, i4.value]);

    console.log(bendrasMasyvas);
});


const select = document.querySelector('select');
const b4 = document.querySelector('.b4');

const gyvuneliai = [];
b4.addEventListener('click', () =>{
  
    gyvuneliai.push(select.value);
    console.log(gyvuneliai);
});

const i5 = document.querySelectorAll('[name=i5]');
const b5 = document.querySelector('.b5');
const a5 = [];

b5.addEventListener('click', () => {
    i5.forEach(radio => {
        if (radio.checked) {
            a5.push(radio.value);
            console.log(a5);
        }
    });
});

const i6 = document.querySelectorAll('[name=i6]');
const b6 = document.querySelector('.b6');
const a6 = [];
const x = 'X';

b6.addEventListener('click', () => {
    const a7 = [];
    i6.forEach(radio => {
        
        if (radio.checked) {
            a7.push(radio.value);
        }else{
            a7.push(x)
        }
    });
    a6.push(a7)
    console.log(a6);
});

const i7 = document.querySelectorAll('[name=i7]');
const b7 = document.querySelector('.b7');
const a8 = [];


b7.addEventListener('click', () => {
    const a9 = [];
    i7.forEach(checkbox => {
        if (checkbox.checked) {
            a9.push(checkbox.value);
        }
        
    });
    a8.push(a9)
    console.log(a8);
});




const arr3 = [];

for (let i = 0; i < 3; i++) {
    arr3.push(rand(10, 20));
}

const field = document.querySelector('#circles');
arr3.forEach(circle => {
    const p = document.createElement('div');
    const text = document.createTextNode(circle);
    p.appendChild(text);
    p.dataset.ballCount = circle;
    field.appendChild(p);
});