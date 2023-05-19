var arrvowel = ['a',"e","i","o","u"]
var bol = false



function vowel() {
    var s = window.prompt("please enter the character")
    for(var i=0 ; i<arrvowel.length ; i++){
        console.log(s + "and "+ arrvowel[i])
        if(s==arrvowel[i]){
            bol=true
            break;
        }
        else 
        bol=false
    }
    
    console.log(bol)
    if(bol == true)
    document.getElementById("p").innerHTML= "vowel"
    
    else
    document.getElementById("p").innerHTML= "Consonant"
    
    
    switch (bol) {
        case true:
            document.getElementById("sw").innerHTML= "vowel"
            break;
    
        default:
            document.getElementById("sw").innerHTML= "Consonant"
            break;
    }
}

