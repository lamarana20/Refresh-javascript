console.log("=== Call Stack Demo ===");

// Function pour démontrer la pile d'appels
function premiereFonction() {
    console.log("1. Dans premiereFonction()");
    deuxiemeFonction();
    console.log("5. Retour dans premiereFonction()");
}

function deuxiemeFonction() {
    console.log("2. Dans deuxiemeFonction()");
    troisiemeFonction();
    console.log("4. Retour dans deuxiemeFonction()");
}

function troisiemeFonction() {
    console.log("3. Dans troisiemeFonction()");
    // Cette fonction termine ici et retourne
}

// Démonstration de la pile d'appels
console.log("Démarrage de l'exécution:");
premiereFonction();
console.log("6. Fin de l'exécution");

console.log("\n=== Exemple avec récursion ===");

// Exemple de récursion pour montrer la pile
function compter(n) {
    console.log(`Compter: ${n}`);
    
    if (n <= 1) {
        console.log("Fin de la récursion");
        return n;
    }
    
    return compter(n - 1);
}

compter(5);

console.log("\n=== Call Stack avec erreur ===");

// Fonction qui génère une erreur pour voir la pile d'appels
function fonctionA() {
    console.log("Dans fonctionA");
    fonctionB();
}

function fonctionB() {
    console.log("Dans fonctionB");
    fonctionC();
}

function fonctionC() {
    console.log("Dans fonctionC");
    // Erreur intentionnelle pour voir la stack trace
    throw new Error("Erreur pour démontrer la call stack");
}

try {
    fonctionA();
} catch (error) {
    console.log("Erreur capturée:");
    console.log(error.stack);
}
