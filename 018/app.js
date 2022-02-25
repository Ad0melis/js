function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const button1 = document.querySelector('.b1');

button1.addEventListener('click', () => {

    console.log('PRESS ME CLICKED');
});

const buttonRed = document.querySelector('.b2');
const body = document.querySelector('body')

buttonRed.addEventListener('click', () => {

    body.style.background = '#a83232';
    
});


const buttonRandom = document.querySelector('.b3');


buttonRandom.addEventListener('click', () => {

    document.querySelector('h1').innerText = rand(5, 55);
    
});


// document.querySelectorAll('li').forEach(li => {

//     li.addEventListener('click', () => {

//         li.style.color = 'pink';
        
//     })
// } );

// document.querySelectorAll('li').forEach(li => {

//     li.addEventListener('click', () => {

//         li.style.color = 'pink';
//         console.log(li.textContent);
//     })
// } );



// const kovotojai = [];
// document.querySelectorAll('li').forEach(li => {
    
//     li.addEventListener('click', e => {

//         li.style.color = 'pink';
//         console.log(li.textContent);
        
//         kovotojai.push(e.target.innerText);
//         e.stopPropagation();
//     })
// } );
// console.log(kovotojai);

// const kovotojai = [];

// document.querySelectorAll('li').forEach((li, i) => {
//     li.addEventListener('click', e => {
//         e.target.style.color = 'pink';
//         kovotojai.push(i);
//         console.log(kovotojai);
//         e.stopPropagation();
//     })
// });


// const kovotojai = [];

// document.querySelectorAll('li').forEach((li, i) => {
    
//     const numeriai = [];
//     li.addEventListener('click', e => {
//         e.target.style.color = 'pink';
//         numeriai.push(i);
//         numeriai.push(e.target.innerText);
//         kovotojai.push(numeriai);
//         console.log(kovotojai);
//         e.stopPropagation();
//     })
// });

// const kovotojai = [];

// document.querySelectorAll('li').forEach((li, i) => {
    
    
//     li.addEventListener('click', e => {
//         e.target.style.color = 'pink';
//         kovotojai.push([li.innerText, i]);
//         console.log(kovotojai);
//         e.stopPropagation();
//     })
// });

// const kovotojai = [];

// document.querySelectorAll('li').forEach((li, i) => {
    
    
//     li.addEventListener('click', e => {
//         let house = {};
//         e.target.style.color = 'pink';
//         house.row = i;
//         house.name = li.innerText;
//         kovotojai.push([house]);
//         console.log(kovotojai);
        
//         e.stopPropagation();
//     })
// });
const kovotojai = [];
document.querySelectorAll('li').forEach((li, i) => {
    li.addEventListener('click', e => {
        e.target.style.color = 'pink';
        kovotojai.push({name: li.innerText,row: i});
        console.log(kovotojai);
        e.stopPropagation();
    })
});
