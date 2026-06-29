"use client";

import { useState, useEffect } from "react";

type Shape = "rectangle" | "circle";
type SoilType = "standard" | "compost" | "clay" | "wet";
type DimensionUnit = "ft" | "in" | "yd" | "m" | "cm";

export default function TopsoilCalculator() {
  const [shape, setShape] = useState<Shape>("rectangle");
  const [soilType, setSoilType] = useState<SoilType>("standard");

  // Inputs
  const [length, setLength] = useState<number>(10);
  const [lengthUnit, setLengthUnit] = useState<DimensionUnit>("ft");
  const [width, setWidth] = useState<number>(10);
  const [widthUnit, setWidthUnit] = useState<DimensionUnit>("ft");
  const [diameter, setDiameter] = useState<number>(10);
  const [diameterUnit, setDiameterUnit] = useState<DimensionUnit>("ft");
  const [depth, setDepth] = useState<number>(3);
  const [depthUnit, setDepthUnit] = useState<DimensionUnit>("in"); // defaults to inches

  // Outputs
  const [cubicFeet, setCubicFeet] = useState<number>(0);
  const [cubicYards, setCubicYards] = useState<number>(0);
  const [cubicMeters, setCubicMeters] = useState<number>(0);
  const [liters, setLiters] = useState<number>(0);
  const [tons, setTons] = useState<number>(0);
  const [bags40lb, setBags40lb] = useState<number>(0);
  const [bags075cf, setBags075cf] = useState<number>(0);
  const [bags1cf, setBags1cf] = useState<number>(0);
  const [shouldCalculate, setShouldCalculate] = useState(false);

  // Density factor (lbs per cubic foot)
  const densities: Record<SoilType, number> = {
    standard: 75, // standard topsoil ~2000 lbs/yd3
    compost: 45,  // compost is lighter ~1200 lbs/yd3
    clay: 85,     // clay is denser ~2300 lbs/yd3
    wet: 100,     // wet topsoil can exceed ~2700 lbs/yd3
  };

  // Convert any dimension unit to feet
  const convertToFeet = (val: number, unit: DimensionUnit): number => {
    switch (unit) {
      case "ft":
        return val;
      case "in":
        return val / 12;
      case "yd":
        return val * 3;
      case "m":
        return val * 3.28084;
      case "cm":
        return val * 0.0328084;
      default:
        return val;
    }
  };

  useEffect(() => {
    if (!shouldCalculate) return;
    try {
      let volumeFt3 = 0;
      const depthFt = convertToFeet(depth, depthUnit);

      if (shape === "rectangle") {
        const lengthFt = convertToFeet(length, lengthUnit);
        const widthFt = convertToFeet(width, widthUnit);
        volumeFt3 = lengthFt * widthFt * depthFt;
      } else {
        const diameterFt = convertToFeet(diameter, diameterUnit);
        const radiusFt = diameterFt / 2;
        volumeFt3 = Math.PI * Math.pow(radiusFt, 2) * depthFt;
      }

      const volumeYd3 = volumeFt3 / 27;
      const volumeM3 = volumeFt3 * 0.0283168;
      const volLiters = volumeFt3 * 28.3168;

      // Weight calculation based on soil type density
      const totalWeightLbs = volumeFt3 * densities[soilType];
      const totalTons = totalWeightLbs / 2000;

      // Bag calculations
      const bags40 = totalWeightLbs / 40;
      const bags075 = volumeFt3 / 0.75;
      const bags1 = volumeFt3 / 1.0;

      setCubicFeet(volumeFt3);
      setCubicYards(volumeYd3);
      setCubicMeters(volumeM3);
      setLiters(volLiters);
      setTons(totalTons);
      setBags40lb(bags40);
      setBags075cf(bags075);
      setBags1cf(bags1);
    } catch (err) {
      console.error("Calculation error:", err);
    } finally {
      setShouldCalculate(false);
    }
  }, [shouldCalculate, shape, soilType, length, lengthUnit, width, widthUnit, diameter, diameterUnit, depth, depthUnit]);

  const unitOptions = [
    { value: "ft", label: "Feet (ft)" },
    { value: "in", label: "Inches (in)" },
    { value: "yd", label: "Yards (yd)" },
    { value: "m", label: "Meters (m)" },
    { value: "cm", label: "Centimeters (cm)" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b flex justify-center border-slate-100">

        <div className="relative inline-flex items-center w-[512px] p-1 h-12 bg-gray-200 rounded-full p-2 transition-colors">
          <span className={`absolute left-0 w-1/2 h-12 bg-primary text-white rounded-full shadow-md border-1 border-slate-100 transform transition-transform ${shape === "rectangle" ? "translate-x-0" : "translate-x-full"}`}></span>
          <button type="button" onClick={() => setShape("rectangle")} className={`relative w-1/2 h-full text-center text-xs font-semibold capitalize ${shape === "rectangle" ? "text-white" : "text-gray-500"}`}>RECTANGLE</button>
          <button type="button" onClick={() => setShape("circle")} className={`relative w-1/2 text-center h-full text-xs font-semibold capitalize ${shape === "circle" ? "text-white" : "text-gray-500"}`}>CIRCLE</button>
        </div>
      </div>
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Inputs */}
        <div className="space-y-6">
          <h3 className="text-base font-bold text-slate-900">1. Enter Dimensions</h3>

          {shape === "rectangle" ? (
            <div className="space-y-4">
              {/* Length */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase">Length</label>
                <div className="mt-2 flex rounded-lg shadow-sm">
                  <input
                    type="number"
                    min="0.1"
                    step="any"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                    className="flex-1 rounded-l-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <select
                    value={lengthUnit}
                    onChange={(e) => setLengthUnit(e.target.value as DimensionUnit)}
                    className="rounded-r-lg border-y border-r border-slate-300 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {unitOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Width */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase">Width</label>
                <div className="mt-2 flex rounded-lg shadow-sm">
                  <input
                    type="number"
                    min="0.1"
                    step="any"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                    className="flex-1 rounded-l-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <select
                    value={widthUnit}
                    onChange={(e) => setWidthUnit(e.target.value as DimensionUnit)}
                    className="rounded-r-lg border-y border-r border-slate-300 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {unitOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ) : (
            /* Circular Area / Diameter */
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase">Diameter / Width across</label>
              <div className="mt-2 flex rounded-lg shadow-sm">
                <input
                  type="number"
                  min="0.1"
                  step="any"
                  value={diameter}
                  onChange={(e) => setDiameter(parseFloat(e.target.value) || 0)}
                  className="flex-1 rounded-l-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <select
                  value={diameterUnit}
                  onChange={(e) => setDiameterUnit(e.target.value as DimensionUnit)}
                  className="rounded-r-lg border-y border-r border-slate-300 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {unitOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Depth */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase">Desired Depth</label>
            <div className="mt-2 flex rounded-lg shadow-sm">
              <input
                type="number"
                min="0.1"
                step="any"
                value={depth}
                onChange={(e) => setDepth(parseFloat(e.target.value) || 0)}
                className="flex-1 rounded-l-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <select
                value={depthUnit}
                onChange={(e) => setDepthUnit(e.target.value as DimensionUnit)}
                className="rounded-r-lg border-y border-r border-slate-300 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {unitOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase">Material / Soil Type</label>
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value as SoilType)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
            >
              <option value="standard">Standard Topsoil (dry, average mix)</option>
              <option value="compost">Compost / Organic mulch (lightweight)</option>
              <option value="clay">Heavy Clay / Topsoil mix (dense)</option>
              <option value="wet">Wet Topsoil / Muddy dirt (heavy)</option>
            </select>
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


        {/* Right Side: Outputs */}
        <div className="bg-slate-50/60 p-6 rounded-xl border border-slate-100 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-4">2. Material Required</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-sm">
                <span className="block text-xs font-semibold text-slate-400">Cubic Yards (yd³)</span>
                <span className="block text-xl font-extrabold text-primary mt-1">
                  {cubicYards.toFixed(2)}
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-sm">
                <span className="block text-xs font-semibold text-slate-400">Cubic Feet (ft³)</span>
                <span className="block text-xl font-extrabold text-slate-800 mt-1">
                  {cubicFeet.toFixed(2)}
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-sm col-span-2">
                <span className="block text-xs font-semibold text-slate-400">Estimated Weight (Tons)</span>
                <span className="block text-xl font-extrabold text-slate-800 mt-1">
                  {tons.toFixed(2)} Tons <span className="text-xs font-medium text-slate-500">({(tons * 2000).toLocaleString(undefined, { maximumFractionDigits: 0 })} lbs)</span>
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/80 pt-6">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Bag Estimates</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">40 lb bags:</span>
                <span className="font-bold text-slate-800">{Math.ceil(bags40lb)} bags</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">0.75 cu ft bags:</span>
                <span className="font-bold text-slate-800">{Math.ceil(bags075cf)} bags</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">1.0 cu ft bags:</span>
                <span className="font-bold text-slate-800">{Math.ceil(bags1cf)} bags</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/80 pt-6">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Metric Volumes</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400">Cubic Meters:</span>
                <span className="block font-semibold text-slate-700">{cubicMeters.toFixed(3)} m³</span>
              </div>
              <div>
                <span className="text-slate-400">Liters:</span>
                <span className="block font-semibold text-slate-700">{Math.ceil(liters).toLocaleString()} L</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
