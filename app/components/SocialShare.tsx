"use client";

import { useState } from "react";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function SocialShare({
  url,
  title = "Topsoil Calculator & Estimator",
  description = "Calculate soil volume in cubic yards, feet, tons, and bags accurately.",
  className = "",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "https://infinixcalculator.com/calculators/topsoil");

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(`${title} - ${description}`);

  const shareLinks = [
    {
      name: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      bgHover: "hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      bgHover: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      bgHover: "hover:bg-[#0A66C2] hover:text-white",
    },
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.636-.929-2.242-.244-.59-.492-.51-.678-.52l-.577-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.51 1.079 2.91 1.23 3.11c.15.2 2.124 3.243 5.145 4.548.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.579-.086 1.78-.728 2.03-1.431.251-.703.251-1.306.176-1.431-.076-.126-.277-.201-.578-.351zM12.04 21.77c-1.748 0-3.461-.469-4.965-1.357l-.356-.211-3.691.968.985-3.598-.232-.369a9.73 9.73 0 0 1-1.497-5.184c0-5.385 4.383-9.768 9.773-9.768 2.607 0 5.059 1.015 6.903 2.859a9.704 9.704 0 0 1 2.864 6.905c0 5.387-4.383 9.775-9.784 9.775zm8.309-18.083C18.136 1.474 15.207.37 12.04.37 5.632.37.42 5.582.42 11.99c0 2.047.534 4.047 1.549 5.811L0 24l6.377-1.672c1.704.93 3.63 1.42 5.663 1.42 6.408 0 11.62-5.212 11.62-11.62 0-3.104-1.208-6.024-3.311-8.221z" />
        </svg>
      ),
      bgHover: "hover:bg-[#25D366] hover:text-white",
    },
  ];

  return (
    <aside
      className={`bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs transition-colors ${className}`}
      aria-label="Share this calculator"
    >
      <div className="flex items-center gap-2.5 text-center sm:text-left">
        <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-sky-400 shrink-0">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Share This Free Tool</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Help contractors & gardeners calculate soil volume</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {shareLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={`Share on ${item.name}`}
            title={`Share on ${item.name}`}
            className={`w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#191a1d] border border-slate-200/80 dark:border-[#4D5156] transition-all duration-200 hover:scale-105 ${item.bgHover}`}
          >
            {item.icon}
          </a>
        ))}

        <button
          type="button"
          onClick={handleCopyLink}
          aria-label={copied ? "Link copied to clipboard" : "Copy calculator link"}
          title={copied ? "Copied!" : "Copy link"}
          className={`h-9 px-3.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 border ${
            copied
              ? "bg-emerald-500 text-white border-emerald-600 scale-95"
              : "bg-slate-100 dark:bg-[#191a1d] text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-[#4D5156] hover:border-primary/50 hover:text-primary dark:hover:text-sky-400"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
