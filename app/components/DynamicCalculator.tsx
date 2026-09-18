"use client";

import { useState } from "react";
import { calculatorsData } from "../data/calculatorsData";

type InputValue = number | string;
type CalculatorOutput = { value: string | number; label: string; unit?: string };

interface DynamicCalculatorProps {
  slug: string;
}

export default function DynamicCalculator({ slug }: DynamicCalculatorProps) {
  const calculator = calculatorsData[slug];

  const [inputsState, setInputsState] = useState<Record<string, InputValue>>(() => {
    const initial: Record<string, InputValue> = {};
    if (calculator) {
      calculator.inputs.forEach((input) => {
        initial[input.id] = input.defaultValue;
      });
    }
    return initial;
  });
  const [outputs, setOutputs] = useState<Record<string, CalculatorOutput>>(() => {
    if (!calculator) return {};

    try {
      return calculator.calculate(inputsState);
    } catch (err) {
      console.error("Initial calculation error:", err);
      return {};
    }
  });
  const [error, setError] = useState<string | null>(null);

  if (!calculator) {
    return (
      <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border p-8 text-center shadow-sm">
        <p className="text-slate-500 dark:text-slate-400 font-medium">Calculator utility configuration not found.</p>
      </div>
    );
  }

  const handleInputChange = (id: string, value: string) => {
    setInputsState((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError(null);
  };

  const handleCalculate = () => {
    const parsedInputs: Record<string, InputValue> = {};

    for (const input of calculator.inputs) {
      const rawValue = inputsState[input.id];

      if (input.type === "number") {
        const value = typeof rawValue === "number" ? rawValue : Number(rawValue);
        if (rawValue === "" || !Number.isFinite(value)) {
          setError(`${input.label} must be a valid number.`);
          return;
        }
        if (input.min !== undefined && value < input.min) {
          setError(`${input.label} must be at least ${input.min}.`);
          return;
        }
        if (input.max !== undefined && value > input.max) {
          setError(`${input.label} must be no more than ${input.max}.`);
          return;
        }
        parsedInputs[input.id] = value;
        continue;
      }

      if (input.type === "select") {
        const value = String(rawValue ?? "");
        if (input.options && !input.options.some((option) => option.value === value)) {
          setError(`Choose a valid option for ${input.label}.`);
          return;
        }
        parsedInputs[input.id] = value;
        continue;
      }

      parsedInputs[input.id] = String(rawValue ?? "");
    }

    try {
      setOutputs(calculator.calculate(parsedInputs));
      setError(null);
    } catch (err) {
      console.error("Calculation error:", err);
      setError("Check the inputs and try again.");
    }
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-sm overflow-hidden transition-colors">
      {/* Title Header */}
      <div className="bg-slate-50/50 dark:bg-dark-bg border-b border-slate-100 dark:border-dark-border px-6 py-4">
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
                      value={inputsState[input.id] ?? ""}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      className={`mt-2 w-full rounded-lg border border-slate-300 dark:border-dark-border px-4 py-2.5 text-sm shadow-sm transition-colors ${input.readOnly
                        ? "bg-gray-100 dark:bg-dark-bg text-slate-500 dark:text-slate-400 cursor-not-allowed"
                        : "bg-white dark:bg-dark-bg text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        }`}
                    >
                      {input.options?.map((opt) => (
                        <option key={opt.value} value={opt.value} className="dark:bg-dark-card dark:text-slate-100">
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
                      value={inputsState[input.id] ?? ""}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      readOnly={input.readOnly}
                      className={`mt-2 w-full rounded-lg border ${input.readOnly ? "bg-gray-200 dark:bg-dark-bg" : "bg-white dark:bg-dark-bg"} border-slate-300 dark:border-dark-border px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm`}
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
                      min={input.min}
                      max={input.max}
                      readOnly={input.readOnly}
                      className="flex-1 rounded-l-lg border border-slate-300 dark:border-dark-border px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-dark-bg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {input.unit && (
                      <span className="inline-flex items-center rounded-r-lg border-y border-r border-slate-300 dark:border-dark-border bg-slate-50 dark:bg-dark-card px-3.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
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
              onClick={handleCalculate}
              className="w-full bg-primary text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-hover transition shadow-sm"
            >
              Calculate
            </button>
            {error && (
              <p role="alert" className="mt-3 text-sm font-medium text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Right: Results Outputs */}
        <div className="bg-slate-50/60 dark:bg-dark-bg p-6 rounded-xl border border-slate-100 dark:border-dark-border flex flex-col justify-between space-y-6">
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
                    className={`bg-white dark:bg-dark-card p-4 rounded-lg border border-slate-200/60 dark:border-dark-border shadow-sm ${isPrimary ? "sm:col-span-2 border-primary/20 dark:border-sky-500/30" : ""
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
