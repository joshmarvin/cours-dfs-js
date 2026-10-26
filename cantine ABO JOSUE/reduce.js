// Avec reduce
const somme = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);

// Avec une boucle
let acc = 0;                  // valeur initiale
for (const n of [1, 2, 3, 4]) {
  acc = acc + n;              // ce que tu retournes dans reduce
}
// acc vaut 10