let stednavnet1=prompt("Skriv inn stednavn nr. 1:");

console.log(stednavn1);
console.log(stednavn1.lenght);


let stednavn2 = prompt("Skriv inn stednavn nr. 2:");
let stednavn2Lengde = stedsnavn2. lenght;

let differanse = stedsnavn1Lengde - stednavn2Lengde;

differance = Math.abs(differance);

console.log(differanse);


document.getElementById("utskrift").innerText =differanse;

document.getElementById("utskrift").innerText=`
Stedsnavn 1: ${stedsnavn1}, med legnde ${stedsnavnlengde}, og
Stedsnavn 2: ${stedsnavn2}, med legnde ${stedsnavn2lengde} har en
differanse på $(differanse) antall tegn.
´;