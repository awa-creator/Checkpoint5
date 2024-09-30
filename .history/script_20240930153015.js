function sumclick(click) {
    const totalclicks = document.getElementById('totalcliks');
    console.log(totalclicks);
    const sumvalue =parseInt(totalclicks.innerText) + click;
    totalclicks.innerText = sumvalue;


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





