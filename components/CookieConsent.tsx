"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[9998] transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Cookie consent dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie consent"
        className="fixed z-[9999] animate-slide-up
          /* ── Phone (< 640px): full-width bar at bottom ── */
          bottom-0 left-0 right-0 p-3

          /* ── Tablet (640px–1023px): centered card at bottom ── */
          sm:p-5 sm:flex sm:justify-center

          /* ── Laptop / Desktop (1024px+): floating card bottom-right ── */
          lg:left-auto lg:right-6 lg:bottom-6 lg:p-0
        "
      >
        <div
          className="
            bg-white shadow-2xl

            /* ── Phone: full-width, smaller padding, slight rounding on top ── */
            w-full rounded-t-2xl p-5

            /* ── Tablet: centered card with max-width ── */
            sm:max-w-md sm:rounded-2xl sm:p-7

            /* ── Laptop: slightly wider card ── */
            lg:max-w-lg lg:p-8

            /* ── Large desktop: even wider ── */
            xl:max-w-xl
          "
        >
          {/* Header */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <div
              className="
                w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11
                rounded-full bg-[#047857]/10 flex items-center justify-center flex-shrink-0
              "
            >
              <svg
                className="w-5 h-5 sm:w-[22px] sm:h-[22px] lg:w-6 lg:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#047857"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 14v.01" />
              </svg>
            </div>
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1C1F2E]">
              We Value Your Privacy
            </h2>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7E8F] leading-relaxed mb-4 sm:mb-5 lg:mb-6">
            We use cookies to enhance your browsing experience, serve
            personalised content, and analyse our traffic. By clicking
            &ldquo;Accept All&rdquo;, you consent to our use of cookies.{" "}
            <Link
              href="/cookies"
              className="text-[#047857] underline underline-offset-2 hover:text-[#065F46] transition-colors"
            >
              Learn more
            </Link>
          </p>

          {/* Buttons — stacked on phone, side-by-side on tablet+ */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <button
              onClick={accept}
              className="
                w-full sm:flex-1
                py-2.5 sm:py-3 lg:py-3.5
                px-5 sm:px-6
                rounded-full bg-[#047857] text-white font-semibold
                text-xs sm:text-sm lg:text-[15px]
                hover:bg-[#065F46] active:scale-[0.98] transition-all cursor-pointer
              "
            >
              Accept All
            </button>
            <button
              onClick={reject}
              className="
                w-full sm:flex-1
                py-2.5 sm:py-3 lg:py-3.5
                px-5 sm:px-6
                rounded-full bg-white text-[#1C1F2E] font-semibold
                text-xs sm:text-sm lg:text-[15px]
                border-2 border-[#D8D5CF]
                hover:border-[#047857] hover:text-[#047857] active:scale-[0.98] transition-all cursor-pointer
              "
            >
              Reject All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
