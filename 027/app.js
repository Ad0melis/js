const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];

const render = m => {
    let html = '';
    m.forEach(p => {
        html += `<li>${p}</li>`;
    });
    return html;
}

const sortArray = (m, d) => {
    m.sort(function(a, b) {
        if (a < b) {
            return -1 * d;
        }
        if (a > b) {
            return 1 * d;
        }
        return 0;
    });
}

const ul = document.querySelector('ul');
const sortButton = document.querySelector('#sort');

sortButton.addEventListener('click', () => {
    let direction = parseInt(sortButton.dataset.sortAs);
    console.log(direction);
    sortArray(products, direction);
    direction = direction * -1;
    sortButton.dataset.sortAs = direction;
    ul.innerHTML = render(products);
})


ul.innerHTML = render(products);


const map1 = new Map()

map1.set('animal', ['cat', 'dog'])
map1.set('color', 'blue')
map1.set('color', 'red')

// console.log(map1.has('animal'));

// console.log(map1.has('car'));


// console.log(map1.get('color'));

console.log(map1);


map1.forEach((a, i) => console.log(a, i));





class PirkiniuKrepselis{

    constructor(){
         this.turinys = new Map();
    }

    idetiSureli(kiekis){
        this.ideti('Sureliai', kiekis)

    }

    idetiPieno(kiekis){
        this.ideti('Pieno', kiekis)
    }

    idetiDuonos(kiekis){
        this.ideti('Duona', kiekis)
    }

    ideti(key, kiekis){
        if (this.turinys.has(key)){
            kiekis = kiekis + this.turinys.get(key);
        }
          this.turinys.set(key, kiekis)
        }

    krepselioTurinys(){
        console.log(this.turinys);
    }
}

const krep = new PirkiniuKrepselis();

krep.krepselioTurinys()
krep.idetiSureli(5)
krep.idetiPieno(6)
krep.idetiDuonos(7)


console.log(krep);