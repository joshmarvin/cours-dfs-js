let jour = "mardi";

switch (jour) {
  case "dimanche":
    console.log(`${jour} est un jour de repos à la DFS`);
    break;
  case "lundi":
  case "mardi":
  case "mercredi":
  case "jeudi":
  case "vendredi":
  case "samedi":
    console.log(`${jour} n'est pas un jour de repos, c'est un jour de travail à la DFS`);
    break;
  default:
    console.log(`"${jour}" n'est pas un jour valide`);
}