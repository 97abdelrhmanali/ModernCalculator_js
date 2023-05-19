


function allEven(){
    var x = prompt("please enter the number")
    var cont = ""
    for(var i=1 ; i<=Number(x)  ;i++){
        if(i%2==0)
        cont += (i+"</br>") 
    }
    
    
    document.getElementById("p").innerHTML=cont
}
