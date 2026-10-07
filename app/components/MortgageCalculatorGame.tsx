"use client";

import React, { useState, useMemo } from "react";
import { calculateMortgagePayoff } from "../lib/mortgageSimulation";

type GameMode = "speedrun" | "tycoon" | "quest";

interface TycoonProperty {
  id: string;
  name: string;
  price: number;
  downPayment: number;
  rentMonthly: number;
  monthlyMortgage: number;
  equity: number;
}

export default function MortgageCalculatorGame() {
  const [activeMode, setActiveMode] = useState<GameMode>("speedrun");

  // --- MODE 1: F1 DEBT SPEEDRUN STATE ---
  const [homePrice, setHomePrice] = useState<number>(380000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.8);
  const [extraPayment, setExtraPayment] = useState<number>(250);

  // Calculate Speedrun Math
  const speedrunResults = useMemo(() => {
    const downAmount = (homePrice * downPaymentPercent) / 100;
    const principal = homePrice - downAmount;
    const result = calculateMortgagePayoff(principal, interestRate, 30, extraPayment);

    return {
      baseMonthly: Math.round(result.monthlyPayment),
      baseTotalPayments: Math.round(result.monthlyPayment * 360),
      baseTotalInterest: Math.round(result.baseInterest),
      interestSaved: Math.round(result.interestSaved),
      yearsSaved: Number(result.yearsSaved.toFixed(1)),
      finalPayoffYears: Number((result.payoffMonths / 12).toFixed(1)),
      score: result.score,
    };
  }, [homePrice, downPaymentPercent, interestRate, extraPayment]);

  // --- MODE 2: REAL ESTATE TYCOON STATE ---
  const [tycoonYear, setTycoonYear] = useState(1);
  const [cashBalance, setCashBalance] = useState(60000);
  const [properties, setProperties] = useState<TycoonProperty[]>([]);
  const [tycoonLog, setTycoonLog] = useState<string[]>([
    "Welcome to Real Estate Tycoon! You have $60,000 cash. Buy properties, manage cash flow, and avoid bankruptcy.",
  ]);

  const AVAILABLE_PROPERTIES = [
    { name: "Starter Condo (Downtown)", price: 150000, downPayment: 30000, rentMonthly: 1400, monthlyMortgage: 850 },
    { name: "Suburban Single-Family", price: 320000, downPayment: 64000, rentMonthly: 2600, monthlyMortgage: 1800 },
    { name: "Duplex Cashflow Machine", price: 450000, downPayment: 90000, rentMonthly: 3800, monthlyMortgage: 2550 },
  ];

  const handleBuyProperty = (prop: typeof AVAILABLE_PROPERTIES[0]) => {
    if (cashBalance < prop.downPayment) {
      setTycoonLog((prev) => [`Not enough cash for ${prop.name} ($${prop.downPayment.toLocaleString()} required).`, ...prev]);
      return;
    }

    setCashBalance((prev) => prev - prop.downPayment);
    const newProp: TycoonProperty = {
      id: `${prop.name}-${properties.length}`,
      name: prop.name,
      price: prop.price,
      downPayment: prop.downPayment,
      rentMonthly: prop.rentMonthly,
      monthlyMortgage: prop.monthlyMortgage,
      equity: prop.downPayment,
    };

    setProperties((prev) => [...prev, newProp]);
    setTycoonLog((prev) => [
      `Acquired ${prop.name}! Down payment: -$${prop.downPayment.toLocaleString()}. Net monthly cash flow: +$${(prop.rentMonthly - prop.monthlyMortgage).toLocaleString()}/mo.`,
      ...prev,
    ]);
  };

  const handleAdvanceYear = () => {
    if (tycoonYear >= 30) {
      setTycoonLog((prev) => ["30-Year Tycoon Career Complete! Review your final net worth.", ...prev]);
      return;
    }

    // Calculate annual rental cash flow & mortgage paydown
    let totalAnnualNetCash = 0;
    const updatedProps = properties.map((p) => {
      const netMonthly = p.rentMonthly - p.monthlyMortgage;
      totalAnnualNetCash += netMonthly * 12;
      // Gain 3% home appreciation and 3% mortgage principal paydown
      const appreciation = p.price * 0.03;
      const principalPaydown = p.price * 0.025;
      return {
        ...p,
        price: Math.round(p.price + appreciation),
        equity: Math.round(p.equity + appreciation + principalPaydown),
      };
    });

    // Random economic event
    const events = [
      { text: "Low Vacancy Boom! Collected a 10% rent bonus across all units.", cash: 3000 },
      { text: "Maintenance Emergency: HVAC replacement and plumbing repair.", cash: -4000 },
      { text: "Neighborhood Reassessment: Property values rose by 5%!", cash: 0 },
      { text: "Steady Market Year: All tenants paid on time.", cash: 1500 },
    ];
    const chosenEvent = events[Math.floor(Math.random() * events.length)];

    const finalNewCash = Math.max(0, cashBalance + totalAnnualNetCash + chosenEvent.cash);

    setProperties(updatedProps);
    setCashBalance(finalNewCash);
    setTycoonYear((prev) => prev + 1);
    setTycoonLog((prev) => [
      `Year ${tycoonYear + 1}: Annual Net Rental Income: +$${totalAnnualNetCash.toLocaleString()}. Event: ${chosenEvent.text} (Cash Impact: ${chosenEvent.cash >= 0 ? "+" : ""}$${chosenEvent.cash.toLocaleString()}). Cash: $${finalNewCash.toLocaleString()}.`,
      ...prev,
    ]);
  };

  const totalTycoonNetWorth = cashBalance + properties.reduce((acc, p) => acc + p.equity, 0);

  // 15-year fixed comparison calculations
  const loan15Principal = homePrice * (1 - downPaymentPercent / 100);
  const comparison15 = calculateMortgagePayoff(loan15Principal, interestRate, 15);
  const monthly15 = Math.round(comparison15.monthlyPayment);
  const totalPaid15 = Math.round(comparison15.monthlyPayment * 180);
  const totalInterest15 = Math.round(comparison15.baseInterest);
  const totalSavings15 = Math.max(0, speedrunResults.baseTotalInterest - totalInterest15);

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border overflow-hidden transition-colors">
      {/* Game Mode Selector Header */}
      <div className="bg-slate-50 dark:bg-dark-bg p-5 sm:p-6 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-dark-border">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-block text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Interactive Mortgage Simulator
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Mortgage Payoff &amp; Amortization Simulator
            </h2>
          </div>

          {/* Mode Tabs */}
          <div className="flex flex-wrap gap-1 rounded-lg bg-slate-200/80 dark:bg-dark-card p-1 border border-slate-300/80 dark:border-dark-border text-xs" role="group" aria-label="Mortgage simulation mode">
            <button
              type="button"
              aria-pressed={activeMode === "speedrun"}
              onClick={() => setActiveMode("speedrun")}
              className={`px-3 py-1.5 rounded-md font-medium transition ${activeMode === "speedrun"
                ? "bg-white dark:bg-primary text-slate-900 dark:text-white shadow-xs"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              Debt Acceleration
            </button>
            <button
              type="button"
              aria-pressed={activeMode === "tycoon"}
              onClick={() => setActiveMode("tycoon")}
              className={`px-3 py-1.5 rounded-md font-medium transition ${activeMode === "tycoon"
                ? "bg-white dark:bg-primary text-slate-900 dark:text-white shadow-xs"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              Portfolio Simulation
            </button>
            <button
              type="button"
              aria-pressed={activeMode === "quest"}
              onClick={() => setActiveMode("quest")}
              className={`px-3 py-1.5 rounded-md font-medium transition ${activeMode === "quest"
                ? "bg-white dark:bg-primary text-slate-900 dark:text-white shadow-xs"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              15 vs 30-Year
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-7">
        {/* --- MODE 1: DEBT ACCELERATION --- */}
        {activeMode === "speedrun" && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-dark-border">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  Amortization Payoff Visualizer
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  See how additional monthly principal payments reduce your total borrowing term and save lifetime interest.
                </p>
              </div>

            </div>

            {/* Visual Progress Track */}
            <div className="rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border p-5 text-slate-900 dark:text-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                <span>Start: 30-Year Term ($0 Extra)</span>
                <span>Goal: 100% Debt Free</span>
              </div>

              {/* Progress Road */}
              <div className="relative h-12 rounded-lg bg-slate-200/80 dark:bg-dark-card border border-slate-300/80 dark:border-dark-border flex items-center px-4 overflow-hidden">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-primary/20 dark:bg-dark-card border-r border-primary transition-all duration-500"
                  style={{
                    width: `${Math.min(95, Math.max(8, (speedrunResults.yearsSaved / 30) * 100 + 10))}%`,
                  }}
                />

                {/* Marker Position */}
                <div
                  className="absolute transition-all duration-500 flex items-center gap-2 z-10"
                  style={{
                    left: `${Math.min(88, Math.max(5, (speedrunResults.yearsSaved / 30) * 100 + 8))}%`,
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-dark-bg" />
                  <span className="bg-white dark:bg-dark-card text-slate-800 dark:text-sky-300 text-[11px] font-mono px-2 py-0.5 rounded border border-slate-300 dark:border-dark-border shadow-xs whitespace-nowrap">
                    {speedrunResults.finalPayoffYears} yrs left
                  </span>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 pt-4 border-t border-slate-200 dark:border-dark-border text-center">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">New Payoff Term</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-slate-100">{speedrunResults.finalPayoffYears} Years</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Time Eliminated</span>
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">−{speedrunResults.yearsSaved} Years</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Interest Saved</span>
                  <span className="text-xl font-bold text-primary dark:text-sky-400">${speedrunResults.interestSaved.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Savings Score</span>
                  <span className="text-xl font-bold text-slate-800 dark:text-slate-200">{speedrunResults.score} / 1000</span>
                </div>
              </div>
            </div>

            {/* Interactive Sliders Grid */}
            <div className="grid md:grid-cols-2 gap-5 p-5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border">
              {/* Home Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>Home Purchase Price</span>
                  <span className="text-primary font-mono font-extrabold">${homePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  aria-label="Home purchase price"
                  min={150000}
                  max={900000}
                  step={10000}
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              {/* Down Payment % */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>Down Payment (%)</span>
                  <span className="text-primary font-mono font-extrabold">{downPaymentPercent}% (${((homePrice * downPaymentPercent) / 100).toLocaleString()})</span>
                </div>
                <input
                  type="range"
                  aria-label="Down payment percentage"
                  min={3}
                  max={40}
                  step={1}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>Mortgage APR (%)</span>
                  <span className="text-primary font-mono font-extrabold">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  aria-label="Mortgage APR percentage"
                  min={0}
                  max={12}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              {/* Extra Payment Nitrous Boost */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>Extra Monthly Principal Payment</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-extrabold">+${extraPayment}/mo</span>
                </div>
                <input
                  type="range"
                  aria-label="Extra monthly principal payment"
                  min={0}
                  max={1500}
                  step={25}
                  value={extraPayment}
                  onChange={(e) => setExtraPayment(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {/* --- MODE 2: PORTFOLIO SIMULATOR --- */}
        {activeMode === "tycoon" && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-dark-border">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  30-Year Real Estate Portfolio Simulator
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Manage rentals, handle maintenance events, and accumulate net worth through mortgage amortization.
                </p>
              </div>

              <button
                type="button"
                onClick={handleAdvanceYear}
                className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition shadow-xs"
              >
                Advance to Year {tycoonYear + 1}
              </button>
            </div>

            {/* Scoreboard Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Timeline</span>
                <span className="text-xl font-bold text-slate-900 dark:text-slate-100">Year {tycoonYear} / 30</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Liquid Cash</span>
                <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">${cashBalance.toLocaleString()}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Properties</span>
                <span className="text-xl font-bold text-primary dark:text-sky-400">{properties.length}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Net Worth</span>
                <span className="text-xl font-bold text-slate-900 dark:text-slate-100">${totalTycoonNetWorth.toLocaleString()}</span>
              </div>
            </div>

            {/* Properties Shop */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Available Investment Properties</h4>
              <div className="grid md:grid-cols-3 gap-3.5">
                {AVAILABLE_PROPERTIES.map((p) => (
                  <div key={p.name} className="p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border flex flex-col justify-between space-y-3">
                    <div>
                      <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100">{p.name}</h5>
                      <p className="text-xs text-slate-500 mt-0.5">Price: ${p.price.toLocaleString()}</p>
                      <div className="mt-2.5 text-xs space-y-1 text-slate-600 dark:text-slate-400">
                        <div>Down Payment: <strong>${p.downPayment.toLocaleString()}</strong></div>
                        <div>Gross Rent: <strong>${p.rentMonthly.toLocaleString()}/mo</strong></div>
                        <div>Monthly P&amp;I: <strong>${p.monthlyMortgage.toLocaleString()}/mo</strong></div>
                        <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          Net Cash Flow: +${(p.rentMonthly - p.monthlyMortgage).toLocaleString()}/mo
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleBuyProperty(p)}
                      disabled={cashBalance < p.downPayment}
                      className={`w-full py-2 rounded-lg text-xs font-semibold transition ${cashBalance >= p.downPayment
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-slate-200 dark:bg-dark-bg text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-dark-border cursor-not-allowed"
                        }`}
                    >
                      {cashBalance >= p.downPayment ? "Acquire Property" : "Insufficient Cash"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Game Event Logs */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-xs font-mono text-slate-700 dark:text-slate-300 max-h-36 overflow-y-auto space-y-1.5">
              <div className="text-primary dark:text-sky-400 font-semibold border-b border-slate-200 dark:border-dark-border pb-1">Activity Log</div>
              {tycoonLog.map((log, i) => (
                <div key={i}>{log}</div>
              ))}
            </div>
          </div>
        )}

        {/* --- MODE 3: 15 vs 30-YEAR COMPARISON --- */}
        {activeMode === "quest" && (
          <div className="space-y-6">
            <div className="pb-4 border-b border-slate-200 dark:border-dark-border">
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                15-Year vs. 30-Year Mortgage Comparison
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Both terms use a ${loan15Principal.toLocaleString()} loan at {interestRate}% APR, with no extra payments.
              </p>
            </div>

            {/* Duel Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* 30-Year Option */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-dark-border">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Standard 30-Year Fixed
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    ${speedrunResults.baseMonthly.toLocaleString()}<span className="text-xs font-normal">/mo</span>
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between">
                    <span>Total Payments (360 mos):</span>
                    <strong>${speedrunResults.baseTotalPayments.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between text-rose-600 dark:text-rose-400 font-medium">
                    <span>Lifetime Interest Paid:</span>
                    <strong>${speedrunResults.baseTotalInterest.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Debt-Free Timeline:</span>
                    <strong>Year 30</strong>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-dark-border">
                  Principal and interest only. Taxes, insurance, HOA fees, and closing costs are excluded.
                </p>
              </div>

              {/* 15-Year Option */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-dark-border">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    Accelerated 15-Year Fixed
                  </span>
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    ${monthly15.toLocaleString()}<span className="text-xs font-normal">/mo</span>
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between">
                    <span>Total Payments (180 mos):</span>
                    <strong>${totalPaid15.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>Lifetime Interest Paid:</span>
                    <strong>${totalInterest15.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span>Total Lifetime Savings:</span>
                    <strong>+${totalSavings15.toLocaleString()}</strong>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-dark-border">
                  Builds home equity faster and eliminates 15 entire years of mortgage obligations.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="px-5 sm:px-7 pb-5 text-xs text-slate-500 dark:text-slate-400">
        Educational estimates only. Payoff calculations assume a fixed rate and extra payments applied to principal each month, with no fees or prepayment penalties. Portfolio values and events are fictional.
      </p>
    </div>
  );
}
