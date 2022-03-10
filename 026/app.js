

const tablo = [];

for (let i =0; i < 15; i++){

    tablo.push('')
    
}

let text = '*Krokodilas *';
let letter = 0;
const div = document.querySelector('div.tablo')
let color = 'red';
let size = 60;

setInterval( () => {
 console.log(tablo);

 tablo.push(text[letter]);
 tablo.shift();
 letter = letter == text.length - 1 ? 0 : letter + 1;

    let html = '';
    tablo.forEach(element => {
        html += `<div class="letter" 
        style="color:${color}; 
        font-size:${size}px; 
        min-width: 30px;
        ">${element}</div>`;
    });
    div.innerHTML = html;

 

}, 200)
    
let inputText = document.querySelector('#text')
let buttonText = document.querySelector('#enter-text')


buttonText.addEventListener('click', () => {
    letter = 0;
    text = inputText.value
    

});

let inputColor = document.querySelector('#color')

inputColor.addEventListener('click', () => {
color = inputColor.value
    

});

let inputRange = document.querySelector('#range')
inputRange.addEventListener('click', () => {

    size = inputRange.value
    

});

console.log(tablo);




    