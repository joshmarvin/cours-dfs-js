const TARIF_ENFANT = 1500;
const TARIF_ADULTE = 2500;

let recetteTotale = 0;
let nbEnfant = 0;
let nbAdulte = 0;

for (let age = 11; age <= 20; age++) {   // 11 à 20 inclus
  let prix;

  if (age < 16) {
    prix = TARIF_ENFANT;
    nbEnfant++;
  } else {
    prix = TARIF_ADULTE;
    nbAdulte++;
  }

  recetteTotale += prix;
  console.log(Âge : ${age} ans -> Billet : ${prix} FCFA);
}

console.log("Recette totale :", recetteTotale, "FCFA");
console.log("Billets à 1 500 FCFA :", nbEnfant);
console.log("Billets à 2 500 FCFA :", nbAdulte);