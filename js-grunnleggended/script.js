let antalliv =100;

let navn  = "Milica";
let alder = 17;

const PI  = Math.PI;

let arrayBilder=["bilde1.jpg"];


console.log("Mitt navn er"+ navn);
console.log(`Mitt navn er ${navn} og jeg er ${alder} år gammel!`);


console.table(arrayBilder);
console.warm(PI);



document.getElementById("utskrift").innerText ="Mitt navn er"+ navn + " og jeg er " + alder + "år gammel !";

let alder2 =prompt("Hvor gammel er du?");
document.getElementById("utskriftAlder").innertext = "Du er" + alderbruker + "år gammel";

let årstallNån = new Date().getFullYear();
let årstall = årstallNå - alderBruker;
document.getElementById("utskriftÅrstall").innerText = "Du ble født i " + fødselår +"!";

if (alder == 17) {
    alert("Du er 17!");
} else {
    alert("Du er IKKE 17!");
}    

for (let index = 0; index < arrayBilder.length; index= index + 1) {
    console.log(arrayBilder[index])
}
function siHei() {
    console.log("Hei");

}
siHei();
siHei();

function siHeiTil(navn) {
    console.log("Hei, " + navn + "!");

}

siHeiTil("Milica");

document.body.style.backgroundColor = "blue";
document.getElementById(utskrift).style.fontSize= "Srem";


