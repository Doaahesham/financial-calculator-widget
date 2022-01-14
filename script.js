var bill = document.getElementById("bill");
var media = document.getElementById("media");
var corp = document.getElementById("corp");
var team = document.getElementById("team");
var res_unlimited = document.querySelector(".res-unlimited");
var res_lifetime = document.querySelector(".res-lifetime");
var business_card = document.querySelector(".business-card");
var btn = document.querySelector(".btn");
var btns = document.querySelectorAll(".btn");
var card = document.getElementById("p3");
var mysum = new URLSearchParams(window.location.search).get("mysum");

var sum = 0;
addEventListener("change", function () {
  sum = +bill.value + +media.value + +corp.value + +team.value;
  console.log(sum);
  if (
    bill.value != "" &&
    media.value != "" &&
    corp.value != "" &&
    team.value != ""
  ) {
    res_unlimited.innerHTML = "$" + sum * 1.1;
    res_lifetime.innerHTML = "$" + sum * 1.2;
  }
  localStorage.setItem("mysum", sum);
});

var something = localStorage.getItem("mysum");



if (card&&card.textContent == "BREX Business Card") {
  business_card.innerHTML = "$" + something * 0.3;
  res_unlimited.innerHTML = "$" + something * 1.1;
  res_lifetime.innerHTML = "$" + something * 1.2;
} else if (card&&card.textContent == "STRIPE Business Card") {
  business_card.innerHTML = "$" + something * 2.9;
  res_unlimited.innerHTML = "$" + something * 1.1;
  res_lifetime.innerHTML = "$" + something * 1.2;
} else if (card&&card.textContent == "AMEX Business Card") {
  business_card.innerHTML = "$" + something * 1.3;
  res_unlimited.innerHTML = "$" + something * 1.1;
  res_lifetime.innerHTML = "$" + something * 1.2;
}
