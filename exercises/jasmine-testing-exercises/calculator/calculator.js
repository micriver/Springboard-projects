/*

You are given the HTML, CSS, and JavaScript for a loan calculator. Your goal is to:

[✓] fill in the JavaScript to make the loan calculator functional. 
[✓] The calculator takes an amount to loan (the loanAmount)
[✓] term in years
[✓] yearly rate

[✓] To calculate the monthly payment, use the following formula:
monthly payment=   P * i
                 ---------
                 1 - (1 + i)−𝑛
Where:
P = Amount of principle
i = periodic interest rate (in our case yearly rate ÷ 12)
n = total number of payments (years × 12)

[✓] The output should be the monthly payment of the loan.
[✓] The output should be a string that always has 2 decimal places.
https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places
There is also a jasmine test file (calculator-test.js). Your goal is to:
[✓] write tests for the calculateMontlyPayment function. 

*/
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

// Get the inputs from the DOM.
function getCurrentUIValues() {
  return {
    loanAmount: +document.getElementById("loan-amount").value,
    rate: +document.getElementById("loan-rate").value,
    term: +document.getElementById("loan-years").value,
  };
}

// Put some default values in the inputs
function setupIntialValues() {
  document.getElementById("loan-amount").value = 30000;
  document.getElementById("loan-years").value = 30;
  document.getElementById("loan-rate").value = 1;
}

// round a number and return a string with two decimal places
const roundto2 = (num) => {
  return Math.round(num * 100) / (100).toFixed(2);
};

// Call a function to calculate the current monthly payment
function update() {
  // Get the current values from the UI
  let values = getCurrentUIValues();
  // Update the monthly payment
  console.log(calculateMonthlyPayment(values));
  let monthlyPayment = roundto2(calculateMonthlyPayment(values));
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.
function calculateMonthlyPayment(values) {
  let { loanAmount, rate, term } = values;
  months = term * 12;
  rate *= 0.01;
  interest = (loanAmount * rate) / months;
  return loanAmount / months + interest;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}
