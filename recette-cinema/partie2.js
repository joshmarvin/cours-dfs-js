let recette = 0;     // number, FCFA
let nbMoins16 = 0;   // billets à 1500 FCFA
let nbDe16a17 = 0;   // billets à 2500 FCFA
let nbDe18Plus = 0;  // billets à 2000 FCFA (2500 - 500)

for (let age = 11; age <= 20; age++) {
  let prix;
  if (age < 16) {
    prix = 1500;
    nbMoins16++;
  } else {
    prix = 2500;
    if (age >= 18) {
      prix = prix - 500;
      nbDe18Plus++;
    } else {
      nbDe16a17++;
    }
  }
  recette = recette + prix;
  console.log(`Âge : ${age} ans -> Prix : ${prix} FCFA`);
}

console.log(`Nouvelle recette totale : ${recette} FCFA`);
console.log(`Billets à 1500 FCFA : ${nbMoins16}`);
console.log(`Billets à 2500 FCFA : ${nbDe16a17}`);
console.log(`Billets à 2000 FCFA (18 ans et plus) : ${nbDe18Plus}`);