function totalclick(click) {
    const totalClicks = document.getElementById('totalCliks');
    console.log(totalClicks);
    const sumvalue =parseInt(totalClicks.innerText) + click;
    totalClicks.innerText = sumvalue;


    if(sumvalue < 0) {
        totalClicks.innerText = 0;
    
    }


    if(click === 0){
        totalClicks.innerText = 0;
    }
    
}

function addition(click) {
    const addiTions = document.getElementById('addiTions');
    console.log(addiTions);
    const sumvalue =parseInt(addiTions.innerText) + click;
   addiTions.innerText = sumvalue;


    if(sumvalue < 0) {
        addiTions.innerText = 0;
    
    }


    if(click === 0){
        addiTions.innerText = 0;
    }
    
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

//  alert('coucou');
//  var unTexte = "Voici un texte";
//  console.log(unTexte);

//  const prenom = "justine"
//  console.log(prenom);

// let = unChiffre = 24;
// unChiffre = 12;
// console.log(unChiffre)

// let chaine = "je suis L'autre chaine de caracteres";
// let nouvelleChaine = "Chaine precedente : " + chaine ;
// console.log(nouvelleChaine);

// let chiffre = 24;
// let nouvelleChaine = "le chiffre attendu est : " + chiffre + 
// "degre";
// console.log(nouvelleChaine);

// let chiffre = 47;
// let nouvelleChaine = 'le chiffre attendu est : $(chiffre) degre';
// console.log(nouvelleChaine);

// let string = "je suis une chaine";
// let number = 24;
// let boolean = true;
// let array = ["je" ,"Suis", 24, false];

// let object = {
//     prenom:"audrey",
//     age: 34,
//     ville:"bordeaux",

// };
// console.log(typeof array);

// console.log(4 ** 5)

// let total = 0;
// total = total + 1;
// console.log(total);

// let total = 0;
// total ++;
// console.log(total);

// let total = 2;
// let x = 4;

// total = ++x;

// console.log(total);

// let x = 6;
// let y = 5;

// if ( x < y){
//     console.log("x est inferieur a y");
// } else{
//     console.log("x est superieur a y");
// }

// let x = 5;
// let y = 5;

// if (!x) {
//     console.log("x existe");
// } 

// let x = 5;
// let y = 5;

// if (x === y) {
//     console.log("True!");
// } else{
//     console.log("false!");
// }

// let x = 5;
// let y = "5";

// if (x != y) {
//     console.log("True!");
// } else{
//     console.log("false!");
// }

// let x = 5;
// let y = "5";

// if (x == y || x > 3 && y < 10) {
//     console.log("True!");
// } else{
//     console.log("false!");
// }

// let x = 5;
// let y = "5";

// if (x === y ) {
//     console.log("True!");
// } else if (x == y){
//     console.log("x est y egaux en valeur");
//   }  else {
//         console.log("x et y ne sont pas du tout egaux")
//     }

// let x = 6;
// let y = "5";

// if (x === y ) {
//     console.log("True!");
// } else if (x == y){
//     console.log("x est y egaux en valeur");
//   }  else {
//         console.log(x + " et " +  y + " ne sont pas du tout egaux")
//     }
//     console.log('${x} et $ {y} ne sont pas du tout egaux');

    // let x = 5;
    // let y = "5";

    // x == y ? console.log("True"): console.log("false")

// function faireQuelqueChose() {
//     console.log("je fais un truc!");
//     console.log("Trop cool");
// }

// faireQuelqueChose();

// const faireUneTache = (tache) => {
//     console.log("je fais:" + tache);
// }

// faireUneTache("les courses");
// faireUneTache("le menage");


// function calc(x,y) {
//     return x = y;
// }
// calc(4,9);

// function add2() {
//     let a = 4;
//     console.log(a);
//     return a + 2;
// }
// add2();

// let total = 0
// function addition(x) {
//     total += x;
//     return total;
// }




