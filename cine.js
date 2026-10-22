let recetteTotale = 0;
let billets1500 = 0;
let billets2500 = 0;

for (let age = 11; age <= 20; age++) {
    let prix;

    if (age < 16) {
        prix = 1500;
        billets1500++;
    } else {
        prix = 2500;
        billets2500++;
    }

    console.log("Âge :", age, "ans - Prix :", prix, "FCFA");

    recetteTotale = recetteTotale + prix;
}

console.log("Recette totale :", recetteTotale, "FCFA");
console.log("Billets à 1500 FCFA :", billets1500);
console.log("Billets à 2500 FCFA :", billets2500)