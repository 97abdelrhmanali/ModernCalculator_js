function grad(){

    var sub = []
    var total = 0
    var perc=0
    for(var i=0 ;i<5 ; i++){
        var x= window.prompt("please enter the subject mark")
        sub[i]=x;
    }
    
    
    for(var i=0 ;i<5 ; i++){
        total += Number (sub[i])  
    }
    
    
    perc = (total / 500) * 100
    
    if(perc < 40)
        document.getElementById("p").innerHTML = "percentage = "+perc+"%" + "Grad = F"
    else if (perc >= 40 && perc<60)
        document.getElementById("p").innerHTML = "percentage = "+perc+"%" + "Grad = E"
    else if (perc >= 60 && perc<70)
        document.getElementById("p").innerHTML = "percentage = "+perc+"%" + "Grad = D"
    else if (perc >= 70 && perc<80)
        document.getElementById("p").innerHTML = "percentage = "+perc+"%" + "Grad = C"
    else if (perc >= 80 && perc<90)
        document.getElementById("p").innerHTML = "percentage = "+perc+"%" + "Grad = B"
    else
        document.getElementById("p").innerHTML = "percentage = "+perc+"%" + "Grad = A"    
}
