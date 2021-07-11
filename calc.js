let first = "";
let opp = "";
let opp_t = "";
let first_opp = false;
let second = "";
let third = "";
let second_opp = false;
let temp = document.getElementById("calcDisplay");
let tempresult = "";
let result = document.getElementById("result");
let posneg = document.getElementById("posneg");
let saved_answers = [];
let clearb = document.getElementById("clearb");
const paramsU = window.location.search;
let searchParams = new URLSearchParams(paramsU);
let link;

let b_One = document.querySelectorAll("one");
let b_Two = document.querySelectorAll("two");
let b_Three = document.querySelectorAll("three");
let b_Four = document.querySelectorAll("four");
let b_Five = document.querySelectorAll("five");
let b_Six = document.querySelectorAll("six");
let b_Seven = document.querySelectorAll("seven");
let b_Eight = document.querySelectorAll("eight");
let b_Nine = document.querySelectorAll("nine");
let b_Zero = document.querySelectorAll("zero");

let num_buttons = document.getElementsByClassName("num");

function getUserDetails() {
  let email = document.getElementById("emailText").innerText;
  let name = document.getElementById("nameText").innerText;
  document.getElementById("emailText").innerText =
    email + " " + sessionStorage.email;
  document.getElementById("nameText").innerText =
    name + "" + sessionStorage.name;
}
for (const n_button of num_buttons) {
  let el = n_button;
  el.addEventListener("click", (event) => {
    if (first_opp == false) {
      first = first + el.innerHTML;
      tempresult = first;
    }
    if (first_opp == true && second_opp == false)
      second = second + el.innerHTML;
    if (second != "") {
      if (opp == "+") tempresult = parseInt(first) + parseInt(second);
      if (opp == "-") tempresult = parseInt(first) - parseInt(second);
      if (opp == "x") tempresult = mult(first, second);
      if (opp == "*") tempresult = expo(first, second);
      if (opp == "/") tempresult = divsn(first, second);
      if (opp == "%") tempresult = percnt(first, second);

      temp.innerText = first + " " + opp + " " + second + " = " + tempresult;
    }
    if (second_opp == true) {
      third = third + el.innerHTML;
      if (opp_t == "+") tempresult = parseInt(tempresult) + parseInt(third);
      if (opp_t == "-") tempresult = parseInt(tempresult) - parseInt(third);
      if (opp == "*") tempresult = expo(first, second);
      if (opp == "/") tempresult = divsn(first, second);
      if (opp == "x") tempresult = mult(first, second);
      if (opp == "%") tempresult = percnt(first, second);

      temp.innerText =
        first +
        " " +
        opp +
        " " +
        second +
        " " +
        opp_t +
        " " +
        third +
        " = " +
        tempresult;
    }
    console.log(tempresult);
    temp.innerText =
      first +
      " " +
      opp +
      " " +
      second +
      " " +
      opp_t +
      " " +
      third +
      " = " +
      tempresult;
  });
}

let op_buttons = document.getElementsByClassName("operator");
for (const op_button of op_buttons) {
  let el = op_button;
  el.addEventListener("click", (event) => {
    if (first_opp == false) {
      first_opp = true;
      opp = el.innerHTML;
      temp.innerText = first + " " + opp + " " + second + " = " + tempresult;
      if (opp == "%") tempresult = percnt(first);
    } else {
      second_opp = true;
      opp_t = el.innerHTML;
      temp.innerText =
        first +
        " " +
        opp +
        " " +
        second +
        " " +
        opp_t +
        " " +
        third +
        " = " +
        tempresult;
    }
  });
}
posneg.addEventListener("click", (event) => {
  if (first_opp == false) first = parseInt(first) * -1;
  else second = parseInt(second) * -1;
  temp.innerText = first + " " + opp + " " + second + " = ";
});

result.addEventListener("click", (event) => {
  if (second == "" && opp == "%") {
    tempresult = percnt(first, 1);
  }

  temp.innerText = tempresult;
  saved_answers.push({
    f_num: first,
    s_num: second,
    sopp: opp,
    resu: tempresult,
  });
  sessionStorage.setItem("answers", JSON.stringify(saved_answers));
  first = "";
  first_opp = false;
  second_opp = false;
  second = "";
  third = "";
});
clearb.addEventListener("click", (event) => {
  first = "";
  first_opp = false;
  second_opp = false;
  second = "";
  third = "";
  tempresult = "";
  temp.innerText = "";
});

function expo(p1, p2) {
  let re = parseInt(p1);
  for (let i = 1; i < p2; i++) {
    re = mult(re, p1);
  }
  return re;
}
function mult(p1, p2) {
  let re = parseFloat(p1);
  console.log(re);
  let a = 0;
  for (let i = 1; i <= p2; i++) {
    a = a + re;
  }
  return a;
}
function divsn(p1, p2) {
  let n1 = parseInt(p1);
  let n2 = parseInt(p2);
  let n = 0;
  while (n1 >= n2) {
    n++;
    n1 = n1 - n2;
  }
  return n;
}

function percnt(p1, p2) {
  let n = ("" + p1).split("");
  let p = n[n.length - 1];
  let t = n[n.length - 2];
  let full_num = 0;
  if (t == undefined) {
    t = 0;
    full_num = "0." + t + p;
  } else {
    n.pop();
    n.pop();
    for (let i = 0; i < n.length; i++) {
      full_num = full_num + n[i];
    }
    full_num = full_num + "." + t + p;
  }
  let lnum = mult(full_num, p2);
  return lnum;
}

if(paramsU.indexOf('linked')!=-1)
  link=true;
if (link==true)
  {
    first=searchParams.get('first');
    temp.innerText =
        first +
        " " +
        opp +
        " " +
        second +
        " " +
        opp_t +
        " " +
        third +
        " = " +
        tempresult;
  }
