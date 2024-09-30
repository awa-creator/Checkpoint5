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
        sumvalue += click; // Ajouter ou soustraire

        // Empêcher les valeurs négatives
        if (sumvalue < 0) {
            sumvalue = 0;
        }
    }

    summet.innerText = sumvalue; // Mettre à jour l'affichage
}

var btnvar1 = document.getElementById('btnh1');
 function Toggle1(){
    if (btnvar1.style.color == "red") {
        btnvar1.style.color = "grey"
    }
    else{
        btnvar1.style.color = "red"
    }
 }


 var btnvar2 = document.getElementById('btnh2');
 function Toggle2(){
    if (btnvar2.style.color == "red") {
        btnvar2.style.color = "grey"
    }
    else{
        btnvar2.style.color = "red"
    }
}





