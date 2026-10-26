// ===== Données de la commande =====
const client = "Awa";
const codePlat = 3;
const quantiteTexte = "2.5";   // essaie "3", "2.5", "0", "abc"...
const montantVerse = 5000;

const quantite = Number(quantiteTexte);

// ===== Fonction de calcul =====
function calculerTotal(prixUnitaire, quantite) {
  return prixUnitaire * quantite;
}

// ===== Vérifications =====
if (!Number.isInteger(codePlat)) {
  console.log("Erreur : le code plat doit être un nombre entier (pas de virgule).");
} else if (!Number.isInteger(quantite)) {
  console.log("Erreur : la quantité doit être un nombre entier (pas de virgule).");
} else if (quantite <= 0) {
  console.log("Erreur : la quantité doit être au moins 1.");
} else {

  // ===== Prix unitaire selon le plat =====
  let nomPlat;
  let prixUnitaire;

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
    default:
      nomPlat = "Plat inconnu";
      prixUnitaire = 0;
      break;
  }

  if (prixUnitaire === 0) {
    console.log("Erreur : code plat invalide, commande annulée.");
  } else {
    const total = calculerTotal(prixUnitaire, quantite);

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
  }
}