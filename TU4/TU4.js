function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const h21 = document.querySelector('.h21');
const h22 = document.querySelector('.h22');
const b1 = document.querySelector('.b1');




b1.addEventListener('click', () =>{
    h21.innerText = rand(1,6);
    h22.innerText = rand(1,6);
    if(h21.innerText == h22.innerText){
        h21.style.color = ('red');
        h22.style.color = ('red');
    }

});


const h3 = document.querySelector('h3');
const b2 = document.querySelector('.b2');

const data = [];


b2.addEventListener('click', () =>{
    data.push(rand(1, 10));
    console.log(data)
    
    let suma = 0;
    // for (let i = 0; i < data.length; i++){
    //     suma = suma + data[i]
        
    // }

    data.forEach( (s, i) => suma = suma + data[i])
    h3.innerText = (suma);
});


const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];

const ul  = document.querySelector('ul');


africa.forEach(africa => { 
    if(africa){
    const p = document.createElement('li');
    const text = document.createTextNode(africa);
    p.appendChild(text);
    ul.appendChild(p);

    }
});


const input1 = document.querySelector('.text1');
const input2 = document.querySelector('.text2');

const bplus = document.querySelector('.bplus');
const bminus = document.querySelector('.bminus');

const h5 = document.querySelector('h5');


bplus.addEventListener('click', () =>{
    
    h5.innerText = parseInt(input1.value) + parseInt(input2.value);

});

bminus.addEventListener('click', () =>{
    h5.innerText = input1.value - input2.value

});