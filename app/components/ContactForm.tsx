"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    const subject = `[${formData.subject}] Infinix Calculators inquiry`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:support@infinixcalculator.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
  };

  return (
    <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-dark-border shadow-xs">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Send Us a Message</h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
        Have a question about a calculation, feedback on our tools, or a business inquiry? Fill out the form below.
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-emerald-950/40 border border-green-200 dark:border-emerald-800 text-green-800 dark:text-emerald-200 text-sm">
          Your email application should open with this message prefilled. Send it there to contact <strong>support@infinixcalculator.com</strong>.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-primary text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. john@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Inquiry Topic
          </label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-primary text-sm"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Calculation Formula Question">Calculation Formula Question</option>
            <option value="Report Discrepancy / Bug">Report Discrepancy / Bug</option>
            <option value="Suggest New Calculator">Suggest New Calculator</option>
            <option value="Advertising / Business">Advertising / Business</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Message *
          </label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please detail your question, feedback, or suggestion..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
        >
          {status === "submitting" ? "Sending..." : "Submit Message"}
        </button>
      </form>
    </div>
  );
}
