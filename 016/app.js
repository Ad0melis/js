function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// const randomColor = Math.floor(Math.random()*16777215).toString(16);
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  

console.log(document.querySelector('h1'));
// console.log(document.querySelector('div:nth-child(1)'));

console.log(document.querySelector('.au-au'));
console.log(document.querySelector('[name=mu-mu]'));
console.log(document.querySelector('div[name]'));
console.log(document.querySelector('div[type=rabit]'));
console.log(document.querySelector('div[type=rabit] + div'));


const cat = document.querySelector('h1');

cat.style.color = 'pink';

document.querySelector('.au-au').style.color = 'brown';

document.querySelector('.au-au').style.fontSize = '40px'; // font-size tampa fontSize

const cow = document.querySelector('[name=mu-mu]');

cow.style.backgroundColor = 'green';
cow.style.padding = '100px';
cow.style.border = 'solid 3px';
cow.style.textAlign = 'center';
cow.innerText = 'Begemotas';

setInterval(() => {
    
    if(cow.style.backgroundColor == 'green'){
        cow.style.backgroundColor = 'pink'
    } else {
        cow.style.backgroundColor = 'green'
    }
   
}, 1000  );

const field = document.querySelector('.field');
const ball = document.querySelector('.ball');

// field.style.backgroundColor = 'red';
// field.style.padding = '200px';
// ball.style.backgroundColor = 'blue';
// ball.style.borderRadius = '50%';
// ball.style.padding = '20px';
// ball.style.high = '10px';
// ball.style.width = '10px';
// ball.style.possition = 'absolute'

let ballCounter = 0;
setInterval(() => {

    ball.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  


    ball.innerText = ballCounter++;

    if (ball.style.left == '0px') {
        ball.style.left = rand(100, 550) + 'px';
    } else {
        ball.style.left = '0px';
    }
    ball.style.left = rand(0, 550) + 'px';
}, 1000); 

randomColor(ball)





