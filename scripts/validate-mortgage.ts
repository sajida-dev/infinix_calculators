import assert from "node:assert/strict";
import { calculateMortgagePayoff } from "../app/lib/mortgageSimulation";
import { calculatorsData } from "../app/data/calculatorsData";

const zeroRate = calculateMortgagePayoff(360000, 0, 30);
assert.equal(zeroRate.monthlyPayment, 1000);
assert.equal(zeroRate.payoffMonths, 360);
assert.equal(zeroRate.interestSaved, 0);
assert.equal(zeroRate.score, 0);

const zeroRateExtra = calculateMortgagePayoff(360000, 0, 30, 1000);
assert.equal(zeroRateExtra.payoffMonths, 180);
assert.equal(zeroRateExtra.yearsSaved, 15);

const standard = calculateMortgagePayoff(240000, 6.5, 30);
assert.ok(Math.abs(standard.monthlyPayment - 1516.963256) < 0.01);
assert.equal(standard.payoffMonths, 360);
assert.ok(standard.interestSaved < 0.01);

const extra = calculateMortgagePayoff(240000, 6.5, 30, 150);
assert.ok(extra.payoffMonths < standard.payoffMonths);
assert.ok(extra.interestSaved > 0);
assert.ok(extra.score > 0 && extra.score <= 1000);

const finalPayment = calculateMortgagePayoff(1000, 12, 1, 10000);
assert.equal(finalPayment.payoffMonths, 1);
assert.equal(finalPayment.interestPaid, 10);

const shorter = calculateMortgagePayoff(240000, 6.5, 15);
assert.ok(shorter.monthlyPayment > standard.monthlyPayment);
assert.ok(shorter.baseInterest < standard.baseInterest);

for (const invalid of [
    [0, 6.5, 30, 0], [240000, -1, 30, 0], [240000, 6.5, 0, 0],
    [240000, 6.5, 30, -1], [NaN, 6.5, 30, 0], [240000, 6.5, 51, 0],
] as const) {
    assert.throws(() => calculateMortgagePayoff(invalid[0], invalid[1], invalid[2], invalid[3]), RangeError);
}

const calculator = calculatorsData["mortgage-calculator-game"];
const result = calculator.calculate({ homePrice: 450000, downPayment: 90000, rate: 0, term: 30, extraPayment: 1000 });
assert.equal(result.normalMonthly.value, "1000.00");
assert.equal(result.yearsSaved.value, "15.0");
assert.ok(calculator.calculate({ homePrice: 450000, downPayment: -1 }).error);
assert.ok(calculator.calculate({ homePrice: 450000, downPayment: 90000, term: 0 }).error);

console.log("PASS: shared mortgage math and calculator integration, zero APR, extra payments, final payment, term comparison, and invalid inputs.");