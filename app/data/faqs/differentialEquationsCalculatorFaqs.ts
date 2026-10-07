import type { FAQItem } from "../calculatorsData";

export const differentialEquationsCalculatorFaqs: FAQItem[] = [
    {
        question: "How do I solve a first-order differential equation like y' = ky?",
        answer: "For the linear homogeneous form y'(t) = k·y(t), separate variables and integrate to get the analytical solution <code>y(t) = y₀ · e^(k·t)</code>, where y₀ is the initial value at t = 0. Evaluate your own initial value problem with our free <a href=\"/calculators/differential-equations-calculator\">Differential Equations Calculator</a>."
    },
    {
        question: "What is an initial value problem (IVP)?",
        answer: "An IVP is a differential equation paired with a specific starting condition, usually written y(0) = y₀. The initial condition pins down the one specific solution curve out of the infinite family of general solutions that satisfy the differential equation alone."
    },
    {
        question: "What is the difference between a general solution and a particular solution?",
        answer: "The general solution includes an arbitrary constant (often written C) and represents every possible curve satisfying the differential equation. A particular solution applies a specific initial condition to solve for that constant, producing one exact curve."
    },
    {
        question: "What is separation of variables and when can I use it?",
        answer: "Separation of variables is a solving technique for differential equations that can be rewritten so all terms involving y (and dy) are on one side and all terms involving t (and dt) are on the other. Once separated, you integrate both sides independently to find the solution. It works for equations like dy/dx = f(x)g(y) but not for all differential equation forms."
    },
    {
        question: "What is a difference equation and how is it different from a differential equation?",
        answer: "A differential equation involves continuous rates of change (derivatives), while a difference equation describes a discrete sequence where each term depends on previous terms (e.g., a recurrence relation). Difference equations are common in discrete-time modeling, such as population counts measured once per year."
    },
    {
        question: "Can this calculator solve second-order or systems of differential equations?",
        answer: "This calculator solves first-order linear equations of the exponential growth/decay form y' = ky with a given initial condition. Second-order equations and systems of coupled differential equations generally require additional techniques (characteristic equations, matrix methods, or numerical solvers) beyond a single closed-form exponential solution."
    }
];
