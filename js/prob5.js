function maxMin() {
  var x = prompt("please enter the number1");
  var y = prompt("please enter the number2");
  var z = prompt("please enter the number3");

  if (x >= y && x >= z && y > z)
    document.getElementById("p").innerHTML = "max= " + x + " / min= " + z;
  else if (x >= y && x >= z && y < z)
    document.getElementById("p").innerHTML = "max= " + x + " / min= " + y;
  else if (y >= x && y >= z && x > z)
    document.getElementById("p").innerHTML = "max= " + y + " / min= " + z;
  else if (y >= x && y >= z && x < z)
    document.getElementById("p").innerHTML = "max= " + y + " / min= " + x;
  else if (z >= x && z >= y && x > y)
    document.getElementById("p").innerHTML = "max= " + z + " / min= " + y;
  else document.getElementById("p").innerHTML = "max= " + z + " / min= " + x;
}
