function getEvent() {
  var x = prompt("please enter the number1");

  if (x < 0) {
    document.getElementById("p").innerHTML = "negative";
  } else {
    document.getElementById("p").innerHTML = "postive";
  }
  switch (Number(x)) {
    case 0:
      document.getElementById("sw").innerHTML = "Zero";
      break;

    default:
      switch (x < 0) {
        case true:
          document.getElementById("sw").innerHTML = "negative";
          break;

        default:
          document.getElementById("sw").innerHTML = "postive";
      }
  }
}
