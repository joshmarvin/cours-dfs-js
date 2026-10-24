let recette = 0;        // number, FCFA
let nbTarifReduit = 0;  // billets à 1500 FCFA
let nbTarifNormal = 0;  // billets à 2500 FCFA

let age = 11;

do {
  let prix;
  if (age < 16) {
    prix = 1500;
    nbTarifReduit++;
  } else {
    prix = 2500;
    nbTarifNormal++;
  }
  recette = recette + prix;
  console.log(`Âge : ${age} ans -> Prix : ${prix} FCFA`);
  age++;
} while (age <= 20);

console.log(`Recette totale : ${recette} FCFA`);
console.log(`Billets à 1500 FCFA (moins de 16 ans) : ${nbTarifReduit}`);
console.log(`Billets à 2500 FCFA (16 ans et plus) : ${nbTarifNormal}`);