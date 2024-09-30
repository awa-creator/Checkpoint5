function sumclick(click) {
    const totalclicks = document.getElementById('totalcliks');
    console.log(totalclicks);
    const sumvalue =parseInt(totalclicks.innerText) + click;
    totalclicks.innerText = sumvalue;


    if(sumvalue < 0) {
        totalclicks.innerText = 0;
    
    }


    if(click === 0){
        totalclicks.innerText = 0;
    }
    
}

function sumaclick(click) {
    const summet = document.getElementById('sum');
    console.log(summet);
    const sumvalue =parseInt(summet.innerText) + click;
    summet.innerText = sumvalue;


    if(sumvalue < 0) {
        summet.innerText = 0;
    
    }


    if(click === 0){
        summet.innerText = 0;
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





