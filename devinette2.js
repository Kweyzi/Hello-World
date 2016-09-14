/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");


//TODO : complétez le programme

/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");


//TODO : complétez le programme

var x = Number(prompt("Devine entre 0 et 100"));
var i = 5; // Nombre d'essais possibles
while ((x !== solution) && (i > 0)) {
    var x = Number(prompt("Devine encore! Il te reste " + essais + " essais!")); // Je n'ai pas réussi à me débarasser de cette redondance je pensais que rajouter x; aurait suffi mais apparemment non.
    i = i - 1;
    if (x < solution) {
        console.log(x + " est trop petit!");
    } else {
        console.log(x + " est trop grand!");
    }
}
var essais = 6 - i;
if (x === solution) {
    console.log("Bravo! La bonne réponse était : " + solution + "! Tu as trouvé en " + essais + " essais!");
} else {
    console.log("Perdu! La bonne réponse était " + solution + " ! Tu as utilisé tes 6 essais!");
}
