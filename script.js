function calculateTip() {
  var totalBill = document.getElementById("totalBill").value;
  var tip = document.getElementById("tip").value;
  var splitBetween = document.getElementById("splitBetween").value;
  
  var tipPercentage;
  if (tip === "great") {
    tipPercentage = 20;
  } else if (tip === "good") {
    tipPercentage = 15;
  } else {
    tipPercentage = 10;
  }
  
  var tipAmount = totalBill * (tipPercentage / 100);
  var totalAmount = parseFloat(totalBill) + tipAmount;
  var amountPerPerson = totalAmount / splitBetween;
  
  document.getElementById("tipAmount").innerHTML = "$" + tipAmount.toFixed(2);
  document.getElementById("totalAmount").innerHTML = "$" + totalAmount.toFixed(2);
  document.getElementById("amountPerPerson").innerHTML = "$" + amountPerPerson.toFixed(2);
}