let alder = prompt("Hvor gammel er du?");

let melding = document.getElementById("melding");
let bilde = document.getElementById("kattebilde");

if(alder >= 18) {
    melding.textContent = "Velkomen! Du er gammel nok til å sjå innhaldet";
    bilde.src ="https://www.bing.com/images/search?view=detailV2&ccid=%2b5%2bgZ0NC&id=0AF97E86DD381A543347919DFA719CC2408F4875&thid=OIP.-5-gZ0NCKrlU55xsWbOyfwHaHE&mediaurl=https%3a%2f%2fimgix.zoo.se%2f2023%2f12%2f01095106%2fFakta-om-kattrasen-Sibirisk-katt.jpg%3fauto%3dformat%26q%3d70%26w%3d1050&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.fb9fa06743422ab954e79c6c59b3b27f%3frik%3ddU";
    bilde.alt ="Eit søt kattebilete";
    bilde.style.display = "block";
} else {
    melding.textContent = "Beklager, dette innholdet er sperra for deg;";
    bilde.style.display = "none";
}