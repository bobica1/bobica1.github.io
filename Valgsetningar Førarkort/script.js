document.addEventListener("DOMContentLoaded", () => {
  const knapp = document.getElementById("sjekkBtn");
  const resultat = document.getElementById("resultat");

  knapp.addEventListener("click", () => {
    const alder = parseInt(document.getElementById("alder").value);
    let melding = "";

    if (isNaN(alder)) {
      melding = "Skriv inn ein gyldig alder!";
    } else if (alder < 16) {
      melding = "For ung – du kan ikkje ta førarkort enno.";
    } else if (alder < 18) {
      melding = "Du kan ta mopedførarkort (klasse AM).";
    } else if (alder < 21) {
      melding = "Du kan ta bilførarkort (klasse B).";
    } else if (alder < 24) {
      melding = "Du kan ta lastebilførarkort (klasse C).";
    } else if (alder < 70) {
      melding = "Du kan ta bussførarkort (klasse D).";
    } else {
      melding = "Du kan ta bussførarkort (klasse D), men du må ta faste helse- og synskontrollar.";
    }
resultat.textContent = melding;
  });
});