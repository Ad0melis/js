console.log('tu5');

const ball = [];


// 1 Sukurti klasę ColorBall, kuri turėtų dvi savybes: color ir number.
// Savybės turi būti įrašomos objekto kūrimo metu. 
// Kiekvienas sukurtas naujas objektas turi būti pridedamas į masyvą balls.

class ColorBall {

    constructor(clr, nr) {
        this.color = clr; //color stringas, red, blue etc.
        this.number = nr;
        ball.push(this);
    }
}

// const naujas = new ColorBall('red', 15);
// console.log(ball);


// 2 Mygtukas “sukurti naują” turi inicijuoti kodą, kuris perskaitytų duomenis iš laukelių
//  ir pagal juos sukurtų naują objektą. 
let btnNew = document.querySelector('b1');
let btnDelete = document.querySelector('.b2');
let inputColor = document.querySelector('.ball');
let inputNumber = document.querySelector('.number');

btnNew.addEventListener('click', () => {
    const naujas = new ColorBall(inputColor.value, inputNumber.value);
    render();
});

console.log(ball);

// 3 Masyvas turi būti atvaizduojamas vizualiai HTML’e. Jame esantys objektai turi būti atvaizduojami 
// kaip atitinkamos spalvos apskritimai su numeriu viduryje.


ball.forEach(element => {
    const div = document.createElement('div');
    console.log(element.number);
    const text = document.createTextNode(element.number);
    div.appendChild(text);
    document.querySelector('body').appendChild(div);
    document.querySelector('div').style.background = element.color;
});

// 4 Mygtukas “ištrinti seniausią” turi inicijuoti kodą, kuris iš masyvo pašaliną seniausią kamuoliuką 
// (seniausias yra masyvo pradžioje)
btnDelete.addEventListener('click', () => {
    ball.shift();
    console.log(ball);
    render();
});

// 5 Pasikeitus masyvo elementams (pridėjus, ištrynus) vizualinis masyvo atvaizdas HTML’e turi keistis dinamiškai.
const render = () => {
    ball.forEach(element => {
        const div = document.createElement('div');
        console.log(element.number);
        const text = document.createTextNode(element.number);
        div.appendChild(text);
        document.querySelector('body').appendChild(div);
        document.querySelector('div').style.background = element.color;
    });
}