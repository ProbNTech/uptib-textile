"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const galleryImages = [
  "/image/eventgallery/event-1.jpg",
  "/image/eventgallery/event-2.jpg",
  "/image/eventgallery/event-3.jpg",
  "/image/eventgallery/event-4.jpg",
];

const brandShadowClasses = [
  "shadow-[0_4px_20px_rgba(4,120,87,0.15)] group-hover:shadow-[0_10px_36px_rgba(4,120,87,0.22)]",
  "shadow-[0_4px_20px_rgba(16,185,129,0.15)] group-hover:shadow-[0_10px_36px_rgba(16,185,129,0.22)]",
  "shadow-[0_4px_20px_rgba(4,120,87,0.15)] group-hover:shadow-[0_10px_36px_rgba(4,120,87,0.22)]",
];

export function EventGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -4 }}
            className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 ${brandShadowClasses[index % 3]}`}
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Event gallery image ${index + 1}`}
              fill
              className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/90 hover:border-white/40 transition-all duration-300 z-10"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative w-full h-full max-w-7xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={selectedImage} alt="Event gallery image" fill className="object-contain" sizes="100vw" priority />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
