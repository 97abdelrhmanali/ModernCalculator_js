function getMax() {
  var x = prompt("please enter the number1");
  var y = prompt("please enter the number2");

  if (x > y) document.getElementById("p").innerHTML = x;
  else document.getElementById("p").innerHTML = y;


  switch(x>y){
    case true:
      document.getElementById("sw").innerHTML = x;
      break;
    default:
      document.getElementById("sw").innerHTML = y;    

  }
}
