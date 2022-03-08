function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const i = document.querySelector('input');
const b = document.querySelector('button');


b.addEventListener('click', () => {
    console.log(i.value);
});

class Troleibusas {

    static visiKeleiviai  = 0;
    

static bendrasKeleiviuSkaicius(keleiviuSkaicius){
    this.visiKeleiviai += keleiviuSkaicius; // this -> i klase
    Troleibusas.keleiviuSkaicius += keleiviuSkaicius;
}

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        
        this.keleiviuSkaicius += keleiviuSkaicius;
        Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius)
    }

    islipa(keleiviuSkaicius) {
        
        this.keleiviuSkaicius = Math.max(0, this.keleiviuSkaicius - keleiviuSkaicius);
        Troleibusas.bendrasKeleiviuSkaicius(-keleiviuSkaicius)
    }

    vaziuoja() {
        console.log(`Šiuo metu troleibus važiuoja
         ${this.keleiviuSkaicius} keleiviai`);
    }

    keleiviuSkaiciusVisuoseTroleibusuose(){
        console.log(`Šiuo metu visai troleibusais važiuoja
        ${Troleibusas.visiKeleiviai} keleiviai`);
    }
}

const nr6 = new Troleibusas();
const nr8 = new Troleibusas();
nr6.ilipa(6);
nr6.vaziuoja();
nr8.ilipa(16);
nr8.islipa(10);


nr6.keleiviuSkaiciusVisuoseTroleibusuose()



class Zuikis {

    static visoMorku = 0;
    static visoKopustu = 0;

    static skaiciuotiVisusKopustus(kiek) {
        this.visoKopustu += kiek; // this -> i klase
        Zuikis.visoKopustu += kiek;
    }

    constructor() {
        this.morkos = 0;
        this.kopustai = 0;
    }

    duotiMorku(kiek) {
        Zuikis.visoMorku = Zuikis.visoMorku + kiek;
        this.morkos = this.morkos + kiek;
    }

    duotiKopustu(kiek) {
        Zuikis.skaiciuotiVisusKopustus(kiek);
        this.kopustai = this.kopustai + kiek; // this -> i objekta
    }

}



const z1 = new Zuikis();
const z2 = new Zuikis();

z2.duotiMorku(5);

z1.duotiKopustu(8);

console.log(z1.morkos, z2.morkos);

const z3 = new Zuikis();

z3.duotiMorku(10);


console.log(Zuikis.visoMorku, Zuikis.visoKopustu);


class Stikline{

    constructor(t){
        this.kiekis = 0;
        this.turis = t;
    }


    ipilti(kiekis){
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis)
    }

    ispilti(){
        let k = this.kiekis;
        this.k = 0;
        return k;
    }

    stiklinejeYra(){
        console.log(`Stiklinėje yra ${this.turis} ml talpos
         yra ${this.kiekis} ml`);
    }
}

const s100 = new Stikline(100);
const s150 = new Stikline(150);
const s200 = new Stikline(200);


s200.ipilti(200)
s150.ipilti(s200.ispilti())
s100.ipilti(s150.ispilti())


s100.stiklinejeYra()
s150.stiklinejeYra()
s200.stiklinejeYra()


class Grybas {

    static visiGrybai = [];

    constructor(){
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1);
        this.svoris = this.rand(5, 45);
        this.constructor.visiGrybai.push(this);

        
    }

     rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

class Krepsys{

    constructor(){
        this.dydis = 500;
        this.prikrauta = 0;
    }

    deti(grybas){
        if(grybas.valgomas && !grybas.sukirmijes){

            this.prikrauta += grybas.svoris;
        }
        return this.dydis > this.prikrauta;
    }
}

const krepsys1 = new Krepsys();

while(krepsys1.deti(new Grybas)){}

console.log(Grybas.visiGrybai);

console.log(krepsys1.prikrauta);