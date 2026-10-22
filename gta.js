let prixJeu = 50000;
let epargnesemaine = 4000;
let epargne = 0;
let semaines = 0;

while (epargne < prixJeu) 
    {
    epargne = epargne + epargnesemaine;semaines = semaines + 1;
    console.log("Semaine " + semaines + " : " + epargne + " F CFA");
}

console.log("Nombre de semaines nécessaires : " + semaines);