// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// Retourne le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce((acc, montant) => acc + montant, 0);
}

// Retourne la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) return 0;
  return calculerTotal(depenses) / depenses.length;
}

// Retourne les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter((montant) => montant > 2000);
}

// Retourne la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) return 0;
  return Math.max(...depenses);
}

// Affichage avant tri
console.log("Avant tri :", depensesSemaine);

// Copie triée (number[], FCFA, ordre croissant)
const depensesTriees = [...depensesSemaine].sort((a, b) => a - b);

// Affichage après tri : le tableau initial doit rester identique
console.log("Après tri :", depensesSemaine);

const total = calculerTotal(depensesSemaine);                    // number, FCFA
const moyenne = calculerMoyenne(depensesSemaine);                // number, FCFA par jour
const grossesDepenses = filtrerGrossesDepenses(depensesSemaine); // number[], FCFA (> 2000)
const maximum = trouverMaximum(depensesSemaine);                 // number, FCFA

console.log(`
=== Bilan des dépenses ===
Total : ${total} FCFA
Moyenne par jour : ${moyenne.toFixed(2)} FCFA
Dépenses > 2000 FCFA : ${grossesDepenses.join(", ")}
Maximum : ${maximum} FCFA
Copie triée : ${depensesTriees.join(", ")}
`);