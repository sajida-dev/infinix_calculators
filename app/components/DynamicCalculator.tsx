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

  const [outputs, setOutputs] = useState<Record<string, { value: string | number; label: string; unit?: string }>>({});
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
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Title Header */}
      <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-4">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
          Interactive Calculator
        </h3>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Interactive Input Fields */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            1. Provide Details
          </h4>

          <div className="space-y-4">
            {calculator.inputs.map((input) => {
              if (input.type === "select") {
                return (
                  <div key={input.id}>
                    <label className="block text-xs font-semibold text-slate-500 uppercase">
                      {input.label}
                    </label>
                    <select
                      value={inputsState[input.id] || ""}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
                    >
                      {input.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              // Default: Number inputs
              return (
                <div key={input.id}>
                  <label className="block text-xs font-semibold text-slate-500 uppercase">
                    {input.label}
                  </label>
                  <div className="mt-2 flex rounded-lg shadow-sm">
                    <input
                      type="number"
                      step="any"
                      value={inputsState[input.id] === undefined ? "" : inputsState[input.id]}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      className="flex-1 rounded-l-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {input.unit && (
                      <span className="inline-flex items-center rounded-r-lg border-y border-r border-slate-300 bg-slate-50 px-3.5 text-xs font-semibold text-slate-500">
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
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition"
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Right: Results Outputs */}
        <div className="bg-slate-50/60 p-6 rounded-xl border border-slate-100 flex flex-col justify-between space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              2. Output Results
            </h4>

            <div className="grid grid-cols-1 gap-4">
              {Object.entries(outputs).map(([key, item]) => {
                // If it is a secondary element or specific structure, we adapt.
                // Normally a grid cell works nicely. Let's make key ones highlighted.
                const isPrimary = key.toLowerCase().includes("total") || key.toLowerCase().includes("bmi") || key.toLowerCase().includes("prorated");

                return (
                  <div
                    key={key}
                    className={`bg-white p-4 rounded-lg border border-slate-200/60 shadow-sm ${isPrimary ? "sm:col-span-2 border-primary/20" : ""
                      }`}
                  >
                    <span className="block text-xs font-semibold text-slate-400">
                      {item.label}
                    </span>
                    <span className={`block text-xl font-extrabold mt-1 ${isPrimary ? "text-primary text-2xl" : "text-slate-800"}`}>
                      {item.value} {item.unit && <span className="text-xs font-medium text-slate-500">{item.unit}</span>}
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
