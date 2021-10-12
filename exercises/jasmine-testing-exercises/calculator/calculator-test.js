it("should calculate the monthly rate correctly", function () {
  let values = {
    loanAmount: 30000,
    rate: 1,
    term: 30,
  };
  expect(calculateMonthlyPayment(values)).toEqual(84.16666666666666);
});

let num = 84.1666666;
let num2 = 100.2387899;
it("should return a result with 2 decimal places", function () {
  expect(roundto2(num)).toEqual(84.17);
  expect(roundto2(num2)).toEqual(100.24);
});

/// etc
