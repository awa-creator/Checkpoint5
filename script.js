function sumclick(click) {
    const totalclick = document.getElementById('totalclick');
    let sumvalue = parseInt(totalclick.innerText);

    // Réinitialisation
    if (click === 0) {
        sumvalue = 0;
    } else {
        sumvalue += click;

        // Empêcher les valeurs négatives
        if (sumvalue < 0) {
            sumvalue = 0;
        }
    }

    totalclick.innerText = sumvalue; // Mettre à jour l'affichage
}

function sumaclick(click) {
    const summet = document.getElementById('summet');
    let sumvalue = parseInt(summet.innerText);

    // Réinitialiser le compteur
    if (click === 0) {
        sumvalue = 0;
    } else {
        sumvalue += click;

        // Empêcher les valeurs négatives
        if (sumvalue < 0) {
            sumvalue = 0;
        }
    }

    summet.innerText = sumvalue; // Mettre à jour l'affichage
}

function ToggleHeart(btnId) {
    const btn = document.getElementById(btnId);
    btn.style.color = btn.style.color === "red" ? "grey" : "red";
}

// Utiliser ToggleHeart pour les deux boutons de cœur
function Toggle1() {
    ToggleHeart('btnh1');
}

function Toggle2() {
    ToggleHeart('btnh2');
}
