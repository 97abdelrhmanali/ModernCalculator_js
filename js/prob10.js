

function outProb10(){
    var x = prompt("please enter the number")
    var cont = ""
    
    for(var i=1 ; i<=12  ;i++){
        var res = 0;
        res = x * i
        cont += (res+"</br>") 
    }
    
    
    document.getElementById("p").innerHTML=cont


}
