let svar = prompt("Hva liker du å gjøre?");

if (svar.includes("film")) {
    console.log("Å, eg og liker å sjå film!");

}
else if (svar.includes("spel")) {
    console.log("Å, eg og liker å spele spel!");
}

else if (svar.includes("musikk")) {
    console.log("Å, eg og liker å høyre på musikk!");
}

else {
    console.log("Det høyrest kjekt ut!");
}