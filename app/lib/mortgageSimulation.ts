export function calculateMortgagePayoff(
    principal: number,
    annualRate: number,
    termYears: number,
    extraPayment = 0,
) {
    const termMonths = termYears * 12;
    if (
        ![principal, annualRate, termYears, extraPayment].every(Number.isFinite) ||
        principal <= 0 || annualRate < 0 || termYears <= 0 || termYears > 50 ||
        !Number.isInteger(termMonths) || extraPayment < 0
    ) {
        throw new RangeError("Enter a positive balance, a term of up to 50 years, and non-negative rates and extra payments.");
    }

    const monthlyRate = annualRate / 100 / 12;
    const monthlyPayment = monthlyRate === 0
        ? principal / termMonths
        : principal * monthlyRate / -Math.expm1(-termMonths * Math.log1p(monthlyRate));
    const baseInterest = Math.max(0, monthlyPayment * termMonths - principal);
    let balance = principal;
    let payoffMonths = 0;
    let interestPaid = 0;

    while (balance > 0.0000001 && payoffMonths < termMonths) {
        const interest = balance * monthlyRate;
        interestPaid += interest;
        const payment = Math.min(balance + interest, monthlyPayment + extraPayment);
        balance = Math.max(0, balance + interest - payment);
        payoffMonths++;
    }

    const interestSaved = Math.max(0, baseInterest - interestPaid);
    return {
        monthlyPayment,
        baseInterest,
        interestPaid,
        interestSaved,
        payoffMonths,
        yearsSaved: (termMonths - payoffMonths) / 12,
        score: baseInterest > 0 ? Math.min(1000, Math.round(interestSaved / baseInterest * 1000)) : 0,
    };
}