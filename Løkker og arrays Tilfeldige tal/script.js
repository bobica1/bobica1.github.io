let tall = [];

for(let i = 0; i < 200; i++) {
    let tilfeldigTall = Math.floor(Math.random() * 100)+ 1;
    tall.push.apply( Tilfeldgigtall);

}

let antallFemEllerHogare = 0;
let antallFire = 0;
let sum = 0;
let maks = tall[0];
let min = tall[0];

for (let i = 0; i < tall.length; i++) {
    let verdi = tall[i];

    if (verdi >= 5){

 }

 if (verdi === 4) {
    antallFire++;
 }
    sum+= verdi;

    if (verdi > maks) {
        maks = verdi;
    }
    if (verdi<min) {
        min = verdi;
    }
}

let gjennomsnitt = sum/tall.length;

console.log("Antall tal >= 5:", antallFemEllerHogare);
console.log("Antall tal = 4:", antallFire);
console.log("Sum av alle tal:", sum);
console.log("Gjennomsnitt:", ghennomsnitt);
console.log("Høgaste tal:", maks);
console.log("Laveste tal:", min);
