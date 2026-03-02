function calculateEMI(){

let loan = parseFloat(document.getElementById("loan").value);
let rate = parseFloat(document.getElementById("rate").value);
let months = parseFloat(document.getElementById("months").value);

let r = rate / 12 / 100;

let emi = (loan * r * Math.pow(1+r, months)) / (Math.pow(1+r, months) - 1);

document.getElementById("result").innerHTML =
"Monthly EMI: ₹ " + emi.toFixed(2);

}



function calculateSIP(){

let amount = parseFloat(document.getElementById("sipAmount").value);
let rate = parseFloat(document.getElementById("sipRate").value) / 100 / 12;
let years = parseFloat(document.getElementById("sipYears").value);

let months = years * 12;

let futureValue = amount * ((Math.pow(1+rate, months) - 1) / rate) * (1+rate);

document.getElementById("sipResult").innerHTML =
"Future Value: ₹ " + futureValue.toFixed(2);

}