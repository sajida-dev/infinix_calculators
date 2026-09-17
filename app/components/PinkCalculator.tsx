"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

type ThemeKey = "rose" | "blush" | "noir" | "sand";

interface ThemeConfig {
  name: string;
  badge: string;
  containerBg: string;
  screenBg: string;
  screenText: string;
  historyText: string;
  btnNum: string;
  btnOp: string;
  btnSpecial: string;
  btnEquals: string;
}

const THEMES: Record<ThemeKey, ThemeConfig> = {
  rose: {
    name: "Classic Rose",
    badge: "Rose",
    containerBg: "bg-white dark:bg-dark-card border-slate-200 dark:border-dark-border",
    screenBg: "bg-rose-50/70 dark:bg-dark-bg border-rose-200/80 dark:border-dark-border",
    screenText: "text-slate-900 dark:text-slate-100",
    historyText: "text-rose-600 dark:text-rose-400",
    btnNum: "bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-100 hover:bg-rose-50/70 dark:hover:bg-dark-card border-slate-200 dark:border-dark-border",
    btnOp: "bg-rose-100 dark:bg-dark-card text-rose-900 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-dark-bg border-rose-200 dark:border-dark-border",
    btnSpecial: "bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-bg border-slate-200 dark:border-dark-border",
    btnEquals: "bg-rose-600 dark:bg-rose-600 text-white hover:bg-rose-700 dark:hover:bg-rose-500 border-rose-600 dark:border-rose-500",
  },
  blush: {
    name: "Soft Blush",
    badge: "Blush",
    containerBg: "bg-white dark:bg-dark-card border-slate-200 dark:border-dark-border",
    screenBg: "bg-pink-50/60 dark:bg-dark-bg border-pink-200/70 dark:border-dark-border",
    screenText: "text-slate-900 dark:text-slate-100",
    historyText: "text-pink-600 dark:text-pink-400",
    btnNum: "bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-100 hover:bg-pink-50/70 dark:hover:bg-dark-card border-slate-200 dark:border-dark-border",
    btnOp: "bg-pink-100 dark:bg-dark-card text-pink-900 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-dark-bg border-pink-200 dark:border-dark-border",
    btnSpecial: "bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-bg border-slate-200 dark:border-dark-border",
    btnEquals: "bg-pink-600 dark:bg-pink-600 text-white hover:bg-pink-700 dark:hover:bg-pink-500 border-pink-600",
  },
  noir: {
    name: "Minimal Noir",
    badge: "Noir",
    containerBg: "bg-white dark:bg-dark-card border-slate-200 dark:border-dark-border",
    screenBg: "bg-slate-100 dark:bg-dark-bg border-slate-200 dark:border-dark-border",
    screenText: "text-slate-900 dark:text-slate-100 font-mono",
    historyText: "text-slate-500 dark:text-slate-400 font-mono",
    btnNum: "bg-white dark:bg-dark-bg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-dark-card border-slate-200 dark:border-dark-border",
    btnOp: "bg-slate-200 dark:bg-dark-card text-slate-900 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-dark-bg border-slate-300 dark:border-dark-border",
    btnSpecial: "bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-bg border-slate-200 dark:border-dark-border",
    btnEquals: "bg-slate-900 dark:bg-dark-card text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white border-slate-900 dark:border-slate-100",
  },
  sand: {
    name: "Warm Sand",
    badge: "Sand",
    containerBg: "bg-white dark:bg-dark-card border-slate-200 dark:border-dark-border",
    screenBg: "bg-amber-50/50 dark:bg-dark-bg border-amber-200/70 dark:border-dark-border",
    screenText: "text-slate-900 dark:text-slate-100",
    historyText: "text-amber-700 dark:text-amber-400",
    btnNum: "bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-100 hover:bg-amber-50/60 dark:hover:bg-dark-card border-slate-200 dark:border-dark-border",
    btnOp: "bg-amber-100 dark:bg-dark-card text-amber-900 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-dark-bg border-amber-200 dark:border-dark-border",
    btnSpecial: "bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-bg border-slate-200 dark:border-dark-border",
    btnEquals: "bg-amber-600 dark:bg-amber-600 text-white hover:bg-amber-700 dark:hover:bg-amber-500 border-amber-600",
  },
};

export default function PinkCalculator() {
  const [theme, setTheme] = useState<ThemeKey>("rose");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scientificOpen, setScientificOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const [display, setDisplay] = useState("0");
  const [formula, setFormula] = useState("");
  const [history, setHistory] = useState<Array<{ expression: string; result: string }>>([]);
  const [memory, setMemory] = useState<number | null>(null);
  const [isNewNumber, setIsNewNumber] = useState(true);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play mechanical click using Web Audio API
  const playClickSound = useCallback((frequency = 800, type: OscillatorType = "sine") => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx && ctx.state === "suspended") {
        ctx.resume();
      }
      if (ctx) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(frequency * 0.4, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      }
    } catch {
      // Audio context may be restricted before user gesture
    }
  }, [soundEnabled]);

  // Append digit
  const handleDigit = useCallback((d: string) => {
    playClickSound(950, "triangle");
    if (isNewNumber) {
      setDisplay(d === "." ? "0." : d);
      setIsNewNumber(false);
    } else {
      if (d === "." && display.includes(".")) return;
      if (display.length >= 14) return;
      setDisplay((prev) => (prev === "0" && d !== "." ? d : prev + d));
    }
  }, [display, isNewNumber, playClickSound]);

  // Handle standard operators (+, -, *, /)
  const handleOperator = useCallback((op: string) => {
    playClickSound(720, "sine");
    const opSymbol = op === "*" ? "×" : op === "/" ? "÷" : op;
    setFormula(`${display} ${opSymbol} `);
    setIsNewNumber(true);
  }, [display, playClickSound]);

  // Execute calculation
  const handleCalculate = useCallback(() => {
    playClickSound(1200, "sine");
    if (!formula) return;

    try {
      const cleanFormula = formula.replace(/×/g, "*").replace(/÷/g, "/");
      const fullExpression = `${cleanFormula}${display}`;

      // eslint-disable-next-line no-new-func
      const calcResult = Function(`'use strict'; return (${fullExpression})`)();

      let formattedResult = String(calcResult);
      if (typeof calcResult === "number") {
        if (!isFinite(calcResult)) {
          formattedResult = "Error";
        } else if (calcResult.toString().includes(".")) {
          formattedResult = String(parseFloat(calcResult.toFixed(8)));
        }
      }

      setHistory((prev) => [
        { expression: `${formula}${display}`, result: formattedResult },
        ...prev.slice(0, 19),
      ]);

      setDisplay(formattedResult);
      setFormula("");
      setIsNewNumber(true);
    } catch {
      setDisplay("Error");
      setFormula("");
      setIsNewNumber(true);
    }
  }, [formula, display, playClickSound]);

  // Clear
  const handleClear = useCallback(() => {
    playClickSound(600, "square");
    setDisplay("0");
    setFormula("");
    setIsNewNumber(true);
  }, [playClickSound]);

  // Backspace
  const handleBackspace = useCallback(() => {
    playClickSound(850, "sine");
    if (display === "Error" || isNewNumber) {
      setDisplay("0");
      setIsNewNumber(true);
      return;
    }
    if (display.length <= 1 || (display.length === 2 && display.startsWith("-"))) {
      setDisplay("0");
      setIsNewNumber(true);
    } else {
      setDisplay((prev) => prev.slice(0, -1));
    }
  }, [display, isNewNumber, playClickSound]);

  // Sign toggle (+/-)
  const handleToggleSign = useCallback(() => {
    playClickSound(800, "triangle");
    if (display === "0" || display === "Error") return;
    setDisplay((prev) => (prev.startsWith("-") ? prev.slice(1) : `-${prev}`));
  }, [display, playClickSound]);

  // Percentage (%)
  const handlePercentage = useCallback(() => {
    playClickSound(880, "sine");
    const num = parseFloat(display);
    if (!isNaN(num)) {
      const res = String(num / 100);
      setDisplay(res);
      setIsNewNumber(true);
    }
  }, [display, playClickSound]);

  // Scientific math functions
  const handleScientific = useCallback((fn: string) => {
    playClickSound(1050, "sine");
    const val = parseFloat(display);
    if (isNaN(val)) return;

    let res: number | string = 0;
    switch (fn) {
      case "sin":
        res = Math.sin((val * Math.PI) / 180);
        break;
      case "cos":
        res = Math.cos((val * Math.PI) / 180);
        break;
      case "tan":
        res = Math.tan((val * Math.PI) / 180);
        break;
      case "atan":
        res = (Math.atan(val) * 180) / Math.PI;
        break;
      case "atan_rad":
        res = Math.atan(val);
        break;
      case "sqrt":
        res = val >= 0 ? Math.sqrt(val) : "Error";
        break;
      case "square":
        res = Math.pow(val, 2);
        break;
      case "cube":
        res = Math.pow(val, 3);
        break;
      case "log":
        res = val > 0 ? Math.log10(val) : "Error";
        break;
      case "ln":
        res = val > 0 ? Math.log(val) : "Error";
        break;
      case "exp":
        res = Math.exp(val);
        break;
      case "pi":
        res = Math.PI;
        break;
      case "e":
        res = Math.E;
        break;
      case "fact": {
        if (val < 0 || val > 170 || !Number.isInteger(val)) {
          res = "Error";
        } else {
          let f = 1;
          for (let i = 2; i <= val; i++) f *= i;
          res = f;
        }
        break;
      }
      default:
        return;
    }

    if (typeof res === "number") {
      res = parseFloat(res.toFixed(8)).toString();
    }

    setDisplay(String(res));
    setIsNewNumber(true);
  }, [display, playClickSound]);

  // Memory operations
  const handleMemory = useCallback((action: "MC" | "MR" | "M+" | "M-") => {
    playClickSound(750, "sine");
    const val = parseFloat(display) || 0;
    switch (action) {
      case "MC":
        setMemory(null);
        break;
      case "MR":
        if (memory !== null) {
          setDisplay(String(memory));
          setIsNewNumber(true);
        }
        break;
      case "M+":
        setMemory((prev) => (prev === null ? val : prev + val));
        setIsNewNumber(true);
        break;
      case "M-":
        setMemory((prev) => (prev === null ? -val : prev - val));
        setIsNewNumber(true);
        break;
    }
  }, [display, memory, playClickSound]);

  // Copy result to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(display);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  // Keyboard navigation listener
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key >= "0" && e.key <= "9") {
        handleDigit(e.key);
      } else if (e.key === ".") {
        handleDigit(".");
      } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        handleOperator(e.key);
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        handleCalculate();
      } else if (e.key === "Backspace") {
        handleBackspace();
      } else if (e.key === "Escape" || e.key.toLowerCase() === "c") {
        handleClear();
      } else if (e.key === "%") {
        handlePercentage();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleDigit, handleOperator, handleCalculate, handleBackspace, handleClear, handlePercentage]);

  const currentTheme = THEMES[theme];

  return (
    <div className={`w-full max-w-xl mx-auto rounded-2xl p-5 sm:p-7 border transition-colors ${currentTheme.containerBg}`}>
      {/* Top Header: Title, Theme Selector, Sound & History */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
            Aesthetic Online Calculator
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Pastel arithmetic &amp; scientific tool</p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Dropdown */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as ThemeKey)}
            className="text-xs rounded-lg px-2.5 py-1.5 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
            aria-label="Select Palette"
          >
            {Object.entries(THEMES).map(([key, t]) => (
              <option key={key} value={key}>
                {t.name}
              </option>
            ))}
          </select>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? "Mute Click Sound" : "Enable Click Sound"}
            className={`p-2 rounded-lg border text-xs font-medium transition ${soundEnabled
                ? "bg-rose-50 dark:bg-dark-bg text-rose-700 dark:text-rose-400 border-rose-200 dark:border-dark-border"
                : "bg-slate-50 dark:bg-dark-bg text-slate-500 dark:text-slate-400 border-slate-200 dark:border-dark-border"
              }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {soundEnabled ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              )}
            </svg>
          </button>

          {/* History Tape Toggle */}
          <button
            type="button"
            onClick={() => setHistoryOpen(!historyOpen)}
            title="Toggle Calculation History"
            className="px-2.5 py-1.5 rounded-lg border text-xs font-medium bg-slate-50 dark:bg-dark-bg border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-card transition"
          >
            History ({history.length})
          </button>
        </div>
      </div>

      {/* Calculator Display Screen */}
      <div className={`relative rounded-xl p-4 mb-4 border transition-colors ${currentTheme.screenBg}`}>
        {/* Formula / Pending Equation */}
        <div className={`text-right text-xs font-medium h-5 overflow-hidden text-ellipsis whitespace-nowrap mb-1 ${currentTheme.historyText}`}>
          {formula || (memory !== null ? `M = ${memory}` : " ")}
        </div>

        {/* Main Number Display */}
        <div className="flex items-center justify-between gap-2">
          {/* Quick Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="text-[11px] px-2 py-1 rounded bg-white/80 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition"
          >
            {copyFeedback ? "Copied" : "Copy"}
          </button>

          <div
            className={`text-right text-3xl sm:text-4xl font-bold tracking-tight overflow-x-auto whitespace-nowrap scrollbar-none select-all ${currentTheme.screenText}`}
          >
            {display}
          </div>
        </div>
      </div>

      {/* Collapsible History Tape Panel */}
      {historyOpen && (
        <div className="mb-4 p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border max-h-48 overflow-y-auto space-y-1.5 text-xs">
          <div className="flex items-center justify-between font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-dark-border pb-1.5">
            <span>Calculation Tape</span>
            <button
              type="button"
              onClick={() => setHistory([])}
              className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline text-[11px]"
            >
              Clear
            </button>
          </div>
          {history.length === 0 ? (
            <p className="text-slate-400 dark:text-slate-500 text-center py-3">No history yet.</p>
          ) : (
            history.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setDisplay(item.result);
                  setIsNewNumber(true);
                }}
                className="flex items-center justify-between p-1 rounded hover:bg-slate-200/50 dark:hover:bg-dark-card cursor-pointer text-slate-700 dark:text-slate-300 transition"
              >
                <span className="font-mono text-slate-500 dark:text-slate-400">{item.expression} =</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{item.result}</span>
              </div>
            ))
          )}
        </div>
      )}

      {/* Memory Bar */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {(["MC", "MR", "M+", "M-"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => handleMemory(m)}
            className={`py-1.5 rounded-lg text-xs font-semibold border transition active:scale-95 ${currentTheme.btnSpecial}`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Scientific Drawer Toggle */}
      <div className="mb-3">
        <button
          type="button"
          onClick={() => setScientificOpen(!scientificOpen)}
          className="w-full py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-card transition flex items-center justify-center gap-1.5"
        >
          <span>{scientificOpen ? "Standard Keypad" : "Scientific Functions (Sin, Cos, Tan⁻¹, Log, √, π)"}</span>
        </button>
      </div>

      {/* Scientific Grid (If Open) */}
      {scientificOpen && (
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 mb-3 p-2.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border">
          {[
            { label: "sin", fn: "sin" },
            { label: "cos", fn: "cos" },
            { label: "tan", fn: "tan" },
            { label: "tan⁻¹", fn: "atan_rad" },
            { label: "√x", fn: "sqrt" },
            { label: "x²", fn: "square" },
            { label: "x³", fn: "cube" },
            { label: "log", fn: "log" },
            { label: "ln", fn: "ln" },
            { label: "eˣ", fn: "exp" },
            { label: "π", fn: "pi" },
            { label: "e", fn: "e" },
            { label: "n!", fn: "fact" },
            { label: "deg", fn: "atan" },
          ].map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => handleScientific(s.fn)}
              className={`py-1.5 rounded-lg text-xs font-mono font-medium border transition active:scale-95 ${currentTheme.btnSpecial}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Calculator Keypad Grid */}
      <div className="grid grid-cols-4 gap-2">
        {/* Row 1 */}
        <button
          type="button"
          onClick={handleClear}
          className={`py-3 rounded-xl text-sm font-bold border transition active:scale-95 ${currentTheme.btnSpecial}`}
        >
          AC
        </button>
        <button
          type="button"
          onClick={handleBackspace}
          className={`py-3 rounded-xl text-sm font-medium border transition active:scale-95 ${currentTheme.btnSpecial}`}
        >
          Del
        </button>
        <button
          type="button"
          onClick={handlePercentage}
          className={`py-3 rounded-xl text-sm font-medium border transition active:scale-95 ${currentTheme.btnSpecial}`}
        >
          %
        </button>
        <button
          type="button"
          onClick={() => handleOperator("/")}
          className={`py-3 rounded-xl text-base font-bold border transition active:scale-95 ${currentTheme.btnOp}`}
        >
          ÷
        </button>

        {/* Row 2 */}
        <button
          type="button"
          onClick={() => handleDigit("7")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          7
        </button>
        <button
          type="button"
          onClick={() => handleDigit("8")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          8
        </button>
        <button
          type="button"
          onClick={() => handleDigit("9")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          9
        </button>
        <button
          type="button"
          onClick={() => handleOperator("*")}
          className={`py-3 rounded-xl text-base font-bold border transition active:scale-95 ${currentTheme.btnOp}`}
        >
          ×
        </button>

        {/* Row 3 */}
        <button
          type="button"
          onClick={() => handleDigit("4")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          4
        </button>
        <button
          type="button"
          onClick={() => handleDigit("5")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => handleDigit("6")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          6
        </button>
        <button
          type="button"
          onClick={() => handleOperator("-")}
          className={`py-3 rounded-xl text-base font-bold border transition active:scale-95 ${currentTheme.btnOp}`}
        >
          −
        </button>

        {/* Row 4 */}
        <button
          type="button"
          onClick={() => handleDigit("1")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          1
        </button>
        <button
          type="button"
          onClick={() => handleDigit("2")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => handleDigit("3")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          3
        </button>
        <button
          type="button"
          onClick={() => handleOperator("+")}
          className={`py-3 rounded-xl text-base font-bold border transition active:scale-95 ${currentTheme.btnOp}`}
        >
          +
        </button>

        {/* Row 5 */}
        <button
          type="button"
          onClick={handleToggleSign}
          className={`py-3 rounded-xl text-sm font-medium border transition active:scale-95 ${currentTheme.btnSpecial}`}
        >
          ±
        </button>
        <button
          type="button"
          onClick={() => handleDigit("0")}
          className={`py-3 rounded-xl text-base font-semibold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => handleDigit(".")}
          className={`py-3 rounded-xl text-base font-bold border transition active:scale-95 ${currentTheme.btnNum}`}
        >
          .
        </button>
        <button
          type="button"
          onClick={handleCalculate}
          className={`py-3 rounded-xl text-lg font-bold border transition active:scale-95 ${currentTheme.btnEquals}`}
        >
          =
        </button>
      </div>

      {/* Keyboard Shortcut Hint Footer */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span>Numpad &amp; keyboard enabled</span>
        <span>Esc = Clear • Enter = Calculate • Backspace = Delete</span>
      </div>
    </div>
  );
}

