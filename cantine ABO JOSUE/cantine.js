// ===== Données de la commande =====
const client = "Awa";          // string
const codePlat = 1;            // number (1, 2 ou 3)
const quantiteTexte = "3";     // string
const montantVerse = 5000;     // number, FCFA

// Conversion de la quantité en nombre
const quantite = Number(quantiteTexte); // number

// ===== Prix unitaire selon le plat =====
let nomPlat;       // string
let prixUnitaire;  // number, FCFA

switch (codePlat) {
  case 1:
    nomPlat = "Attiéké-poisson";
    prixUnitaire = 1500;
    break;
  case 2:
    nomPlat = "Riz-poulet";
    prixUnitaire = 2000;
    break;
  case 3:
    nomPlat = "Alloco-œuf";
    prixUnitaire = 1000;
    break;
}

// ===== Fonction de calcul =====
function calculerTotal(prixUnitaire, quantite) {
  return prixUnitaire * quantite;
}

const total = calculerTotal(prixUnitaire, quantite); // number, FCFA

// ===== Récapitulatif =====
console.log(`===== Caisse de la cantine =====`);
console.log(`Client : ${client}`);

for (let i = 1; i <= quantite; i++) {
  console.log(`Portion ${i} : ${nomPlat} - ${prixUnitaire} FCFA`);
}

console.log(`Total à payer : ${total} FCFA`);
console.log(`Montant versé : ${montantVerse} FCFA`);

if (montantVerse >= total) {
  console.log(`Monnaie à rendre : ${montantVerse - total} FCFA`);
} else {
  console.log(`Montant manquant : ${total - montantVerse} FCFA`);
}