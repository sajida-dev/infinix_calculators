"use client";

import { useState, useEffect } from "react";
import { calculatorsData } from "../data/calculatorsData";

interface DynamicCalculatorProps {
  slug: string;
}

export default function DynamicCalculator({ slug }: DynamicCalculatorProps) {
  const calculator = calculatorsData[slug];

  if (!calculator) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
        <p className="text-slate-500 font-medium">Calculator utility configuration not found.</p>
      </div>
    );
  }

  // Initialize state based on default values of inputs
  const [inputsState, setInputsState] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    calculator.inputs.forEach((input) => {
      initial[input.id] = input.defaultValue;
    });
    return initial;
  });

  const [outputs, setOutputs] = useState<Record<string, { value: string | number; label: string; unit?: string }>>(() => {
    try {
      const initial: Record<string, any> = {};
      calculator.inputs.forEach((input) => {
        initial[input.id] = input.defaultValue;
      });
      return calculator.calculate(initial);
    } catch (err) {
      console.error("Initial calculation error:", err);
      return {};
    }
  });
  const [shouldCalculate, setShouldCalculate] = useState(false);

  // Perform calculation when user clicks Calculate button
  useEffect(() => {
    if (!shouldCalculate) return;
    try {
      const results = calculator.calculate(inputsState);
      setOutputs(results);
    } catch (err) {
      console.error("Calculation error:", err);
    } finally {
      setShouldCalculate(false);
    }
  }, [shouldCalculate, inputsState, calculator]);

  const handleInputChange = (id: string, value: any) => {
    // Attempt parsing numerical inputs
    let parsedValue = value;
    const inputDef = calculator.inputs.find((i) => i.id === id);
    if (inputDef && inputDef.type === "number") {
      parsedValue = parseFloat(value);
      if (isNaN(parsedValue)) parsedValue = 0;
    }

    setInputsState((prev) => ({
      ...prev,
      [id]: parsedValue,
    }));
  };

  return (
    <div className="bg-white dark:bg-[#22242A] rounded-2xl border border-slate-200 dark:border-[#4D5156] shadow-sm overflow-hidden transition-colors">
      {/* Title Header */}
      <div className="bg-slate-50/50 dark:bg-[#191a1d] border-b border-slate-100 dark:border-[#4D5156] px-6 py-4">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider">
          Interactive Calculator
        </h3>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Interactive Input Fields */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest">
            1. Provide Details
          </h4>

          <div className="space-y-4">
            {calculator.inputs.map((input) => {
              const uniqueId = `dc-${input.id}`;
              if (input.type === "select") {
                return (
                  <div key={input.id}>
                    <label htmlFor={uniqueId} className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                      {input.label}
                    </label>
                    <select
                      id={uniqueId}
                      value={inputsState[input.id] || ""}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      className={`mt-2 w-full rounded-lg border border-slate-300 dark:border-[#4D5156] px-4 py-2.5 text-sm shadow-sm transition-colors ${input.readOnly
                        ? "bg-gray-100 dark:bg-[#191a1d] text-slate-500 dark:text-slate-400 cursor-not-allowed"
                        : "bg-white dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        }`}
                    >
                      {input.options?.map((opt) => (
                        <option key={opt.value} value={opt.value} className="dark:bg-[#22242A] dark:text-slate-100">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              } else if (input.type === "text") {
                return (
                  <div key={input.id}>
                    <label htmlFor={uniqueId} className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                      {input.label}
                    </label>
                    <input
                      id={uniqueId}
                      type="text"
                      value={inputsState[input.id] || ""}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      readOnly={input.readOnly}
                      className={`mt-2 w-full rounded-lg border ${input.readOnly ? "bg-gray-200 dark:bg-[#191a1d]" : "bg-white dark:bg-[#191a1d]"} border-slate-300 dark:border-[#4D5156] px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm`}
                    />
                  </div>
                );
              }

              // Default: Number inputs
              return (
                <div key={input.id}>
                  <label htmlFor={uniqueId} className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                    {input.label}
                  </label>
                  <div className="mt-2 flex rounded-lg shadow-sm">
                    <input
                      id={uniqueId}
                      type="number"
                      step="any"
                      value={inputsState[input.id] === undefined ? "" : inputsState[input.id]}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      className="flex-1 rounded-l-lg border border-slate-300 dark:border-[#4D5156] px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-[#191a1d] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {input.unit && (
                      <span className="inline-flex items-center rounded-r-lg border-y border-r border-slate-300 dark:border-[#4D5156] bg-slate-50 dark:bg-[#22242A] px-3.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {input.unit}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShouldCalculate(true)}
              className="w-full bg-primary text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-hover transition shadow-sm"
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Right: Results Outputs */}
        <div className="bg-slate-50/60 dark:bg-[#191a1d] p-6 rounded-xl border border-slate-100 dark:border-[#4D5156] flex flex-col justify-between space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest mb-4">
              2. Output Results
            </h4>

            <div className="grid grid-cols-1 gap-4">
              {Object.entries(outputs).map(([key, item]) => {
                const isPrimary = key.toLowerCase().includes("total") || key.toLowerCase().includes("bmi") || key.toLowerCase().includes("prorated");

                return (
                  <div
                    key={key}
                    className={`bg-white dark:bg-[#22242A] p-4 rounded-lg border border-slate-200/60 dark:border-[#4D5156] shadow-sm ${isPrimary ? "sm:col-span-2 border-primary/20 dark:border-sky-500/30" : ""
                      }`}
                  >
                    <span className="block text-xs font-semibold text-slate-400 dark:text-slate-400">
                      {item.label}
                    </span>
                    <span className={`block text-xl font-extrabold mt-1 ${isPrimary ? "text-primary dark:text-sky-400 text-2xl" : "text-slate-800 dark:text-slate-100"}`}>
                      {item.value} {item.unit && <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.unit}</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
