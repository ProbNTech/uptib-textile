"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const WHATSAPP_NUMBER = "447920550000";
export const WHATSAPP_DISPLAY = "0044 7920 550000";
export const WHATSAPP_MESSAGE =
  "Hello Pakistan Textile Partners,\n\nI came across your website and would like to learn more about Pakistan Textile Partners membership and how to get involved.\n\nCould you share more details?";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function WhatsAppButton() {
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-6 z-50 transition-[bottom] duration-300 ease-out ${
        raised ? "bottom-24" : "bottom-6"
      }`}
    >
      <div className="relative">
        {/* Single clean halo — smooth, no overlap flicker */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] wa-pulse" />

        <motion.a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.5)] hover:shadow-[0_14px_36px_-6px_rgba(37,211,102,0.7)] ring-2 ring-white/70 transition-shadow duration-300"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm"
            aria-hidden="true"
          >
            <path d="M19.05 4.91A10 10 0 0 0 12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.34 4.98L2 22l5.2-1.36a9.94 9.94 0 0 0 4.83 1.23h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.95-7.0zM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.16 1.74 2.66 4.22 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.18-.48-.3z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
