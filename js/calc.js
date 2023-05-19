var inp = '' 
var res = ''
var sym = []
var arr = []
var check
var result = 0
console.log(document.getElementById("number").value)


function one1(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("1")
    console.log(inp)
    document.getElementById("number").value =inp
}


function two2(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("2")
    console.log(inp)
    document.getElementById("number").value =inp
}


function three(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("3")
    console.log(inp)
    document.getElementById("number").value =inp
}


function four4(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("4")
    console.log(inp)
    document.getElementById("number").value =inp
}


function five5(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("5")
    console.log(inp)
    document.getElementById("number").value =inp
}


function six6(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("6")
    console.log(inp)
    document.getElementById("number").value =inp
}


function seven(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("7")
    console.log(inp)
    document.getElementById("number").value =inp
}


function eight(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("8")
    console.log(inp)
    document.getElementById("number").value =inp
}


function nine(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("9")
    console.log(inp)
    document.getElementById("number").value =inp
}


function zero0(){
    if(check == true){
        document.getElementById("number").value=''
        inp=''
        check=false
    }
    inp = inp.concat("0")
    console.log(inp)
    document.getElementById("number").value =inp
}


function dotfr(){
    inp = inp.concat(".")
    console.log(inp)
    document.getElementById("number").value =inp
}



function rem(){
    inp =inp.slice(0 , (inp.length)-1)
    document.getElementById("number").value =inp
}

function clr(){
    inp = ""
    document.getElementById("number").value =inp
    sym=[]
    arr=[]
}



function pluss(){
    // if(inp == ""){
    //     document.getElementById("number").focus()
    // }

    // else if(sym ==''){
    //     exp = exp.concat(inp)
    //     res = inp
    //     sym = "+"
    //     exp = exp.concat("+")
    //     inp=''
    //     document.getElementById("number").value=""
    // }

    // else if(sym == "+"){
    //     result = Number(res)+Number(inp)
    //     document.getElementById("number").value = result
    //     res = document.getElementById("number").value
    //     check = true
    // }

    inp = inp.concat("+")
    document.getElementById("number").value =inp
}



function mini(){
    // if(inp == ""){
    //     document.getElementById("number").focus()
    // }

    // else if(sym ==''){
    //     res = inp
    //     sym = "-"
    //     inp=''
    //     document.getElementById("number").value=""
    // }

    // else if(sym == "-"){
    //     result = Number(res)+Number(inp)
    //     document.getElementById("number").value = result
    //     res = document.getElementById("number").value
    //     check = true
    // }

    inp = inp.concat("-")
    document.getElementById("number").value =inp

}



function divi(){
    // if(inp == ""){
    //     document.getElementById("number").focus()
    // }

    // else if(sym ==''){
    //     res = inp
    //     sym = "/"
    //     inp=''
    //     document.getElementById("number").value=""
    // }

    // else if(sym == "/"){
    //     result = Number(res)+Number(inp)
    //     document.getElementById("number").value = result
    //     res = document.getElementById("number").value
    //     check = true
    // }
    inp = inp.concat("/")
    document.getElementById("number").value =inp
}


function multi(){
    // if(inp == ""){
    //     document.getElementById("number").focus()
    // }

    // else if(sym ==''){
    //     res = inp
    //     sym = "*"
    //     inp=''
    //     document.getElementById("number").value=""
    // }

    // else if(sym == "*"){
    //     result = Number(res)+Number(inp)
    //     document.getElementById("number").value = result
    //     res = document.getElementById("number").value
    //     check = true
    // }

    inp = inp.concat("*")
    document.getElementById("number").value =inp
}


function equal(){

    var sym = []
    // console.log("res"+res),console.log("inp"+inp)
    // if(sym =="+"){
    //     result = Number(res)+Number(inp)
    // }

    // else if(sym =="-"){
    //     result = Number(res)-Number(inp)
    // }

    // else if(sym =="/"){
    //     result = Number(res)/Number(inp)
    // }


    // else if(sym =="*"){
    //     result = Number(res)*Number(inp)
    // }

    // console.log("eq"+result)
    // document.getElementById("number").value = result

    // result=0
    // sym=''
    // check = true
    // var arrSum=inp.split(/[\s+*-/]+/)
    var arrInd =[]
    arr = inp.split(/[\s+*-/]+/)
    tempS=[]
    sum = 0
    console.log(arr)
    for(var i=0 ; i<inp.length ; i++){
        if(inp[i]=="+"|| inp[i]=="/"|| inp[i]=="-"|| inp[i]=="*"){
            sym.push(inp[i])
        }
    }
    console.log(sym)

    for(var i=0 ; i < sym.length ;i++ ){
            if(sym[i]=="/" || sym[i]=="*"){
                if(sym[i]=="/"){
                    result = Number(arr[i]) / Number(arr[i+1])
                    arr[i+1] = result;
                    arrInd.push(i)
                    sum=result
                }
                else if(sym[i]=="*"){
                    result = Number(arr[i]) * Number(arr[i+1])
                    arr[i+1] = result;
                    arrInd.push(i)  
                    sum=result         
                }
            }

        }
        console.log("index = "+arrInd)
        var count = 0
        for(var i=0 ; i<arrInd.length ;i++){
            arr.splice(Number(arrInd[i])-(i),1)
            sym.splice(Number(arrInd[i])-(i),1)

        }

        console.log("arr2 = "+arr)
        console.log("sum2 = "+sym)

    
    for(var i=0 ; i<sym.length ; i++){
            if(sym[i]=="+" || sym[i]=="-"){
                if(sym[i]=="-"){
                    result = Number(arr[i]) - Number(arr[i+1])
                    arr[i+1] = result;
                    sum = result
                }
                else if(sym[i]=="+"){
                    result = Number(arr[i]) + Number(arr[i+1])
                    arr[i+1] = result;
                    sum = result
                }
            }
        }
        console.log(sum)
        document.getElementById("number").value = sum
        check=true
}

