let params = window.location.search;
let params1 = new URLSearchParams(params);
console.log(params1.get("fname"));

function getUserDetails() {
  let email = document.getElementById("emailText").innerText;
  let name = document.getElementById("nameText").innerText;
  document.getElementById("emailText").innerText =
    email + " " + sessionStorage.email;
  document.getElementById("nameText").innerText =
    name + "" + sessionStorage.name;

  let data = JSON.parse(sessionStorage.answers);
  let info = "";
  for (let targil of data) {
    info +=
      "<p>" +
      targil.f_num +
      targil.sopp +
      targil.s_num +
      "=" +
      targil.resu +
      "</p>";
  }
  document.getElementsByClassName("scr")[0].innerHTML = info;
}
function addParams() {
  //לוקח את התרגיל שהיוזר הכניס
  //link =window.location.href;
  let calc = document.getElementById("newCalc").value;
  if (calc != "") {
    let tempN = "";
    let first = "";
    let opp = "";
    let second = "";
    for (let i = 0; i < calc.length; i++) {
      if (isNum(calc[i])) {
      {  tempN = tempN + calc[i];
        console.log(first, opp, second, tempN);
      }
      } else if (isOpp(calc[i])) {
        if (first == "" && tempN != "") {
          first = tempN;
          tempN = "";
          opp = calc[i];
          console.log(first, opp, second, tempN);
        }
      }
      second = tempN;
    }
    let urlParams = "?first="+first;
    urlParams = urlParams +"?opp=" +opp;
    urlParams = urlParams + "?second=" +second;
    //urlParams = urlParams + "?linked=true";
    return urlParams;
  }
  else
    return '';
}

function isNum(str) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (numbers.includes(str)) return true;
  else return false;
}

function isOpp(str) {
  const operators = ["+", "-", "*", "/", "%","x"];
  if (operators.includes(str)) return true;
  else return false;
}

function sendViaWa() {
  let urlParams = addParams();
  let url = "calc.html";
  let finalUrl = "https://wa.me/?text=" + url + urlParams;
  window.open(finalUrl);
}

function sendMail() {
  let urlParams = addParams();
  let url = "calc.html";
  let finalUrl="mailto:" + sessionStorage.email +"?subject=calculator&body=" +url + urlParams;
  window.open(finalUrl);
}