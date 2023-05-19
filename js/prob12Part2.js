var sub = []

function marks(){
    var total = 0
    var average=0
    var perc=0
    for(var i=0 ;i<5 ; i++){
        var x= window.prompt("please enter the subject mark")
        sub[i]=x;
    }
    
    for(var i=0 ;i<5 ; i++){
        total += Number (sub[i])  
    }
    
    
    average = total / 5;
    perc = (total / 500) *100
    
    
    
    document.getElementById("p").innerHTML= "the total of subject = "+total +"</br>" 
    + "the average of subject = "+average +"</br>" + "the percentage of subject = "+ perc+"%"
}
