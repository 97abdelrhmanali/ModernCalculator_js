function EvenOdd() {
  var x = prompt("please enter the number1");

  if (x % 2 == 0 && x != 0) {
    document.getElementById("p").innerHTML = "Even";
    y = "e";
  } else {
    y = "o";
    document.getElementById("p").innerHTML = "odd";
  }

  switch (x % 2 == 0) {
    case true:
      document.getElementById("sw").innerHTML = "even";
      break;

    default:
      document.getElementById("sw").innerHTML = "odd";
  }
}
