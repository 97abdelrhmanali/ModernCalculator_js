


function powernum(){
    var num = window.prompt("please enter the number")
    var p = window.prompt("please enter the power")
    var res=1
    for(var i=0 ; i<Number(p) ; i++){
        res*=num
    }

    document.getElementById("p").innerHTML=res
}

