function days() {
  var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var mon = window.prompt("please enter the number of month");

  document.getElementById("p").innerHTML = days[Number(mon) - 1];

  switch (mon) {
    case 1:
      document.getElementById("sw").innerHTML = 31;
      break;
    case 2:
      document.getElementById("sw").innerHTML = 28;
      break;
    case 3:
      document.getElementById("sw").innerHTML = 31;
      break;
    case 4:
      document.getElementById("sw").innerHTML = 30;
      break;
    case 5:
      document.getElementById("sw").innerHTML = 31;
      break;
    case 6:
      document.getElementById("sw").innerHTML = 30;
      break;

    case 7:
      document.getElementById("sw").innerHTML = 31;
      break;

    case 8:
      document.getElementById("sw").innerHTML = 31;
      break;

    case 9:
      document.getElementById("sw").innerHTML = 30;
      break;

    case 10:
      document.getElementById("sw").innerHTML = 31;
      break;

    case 11:
      document.getElementById("sw").innerHTML = 30;
      break;

    case 12:
      document.getElementById("sw").innerHTML = 31;
      break;
  }
}
