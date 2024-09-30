function sumclick(click) {
    const totalclick = document.getElementById('totalclick');
    console.log(totalclick);
    const sumvalue =parseInt(totalclick.innerText) + click;
    totalclick.innerText = sumvalue;


    if(sumvalue < 0) {
        totalclick.innerText = 0;
    
    }


    if(click === 0){
        totalclick.innerText = 0;
    }
    
}


function sumaclick(click) {
    const summet = document.getElementById('summet');
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





