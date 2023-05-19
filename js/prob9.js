

function out(){
var x = prompt("please enter the number")
var cont = ""

for(var i=1 ; i<=Number(x)  ;i++){
    cont += (i+"</br>") 
}


document.getElementById("p").innerHTML=cont
}



