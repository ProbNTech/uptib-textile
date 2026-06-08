"use client";

import { useState, useCallback } from "react";

interface LiteYouTubeProps {
  id: string;
  title: string;
}

/**
 * Lightweight YouTube embed — shows a thumbnail + play button.
 * The real iframe loads only when the user clicks, saving ~500KB+ per embed.
 */
export function LiteYouTube({ id, title }: LiteYouTubeProps) {
  const [activated, setActivated] = useState(false);

  const handleClick = useCallback(() => setActivated(true), []);

  if (activated) {
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="relative w-full cursor-pointer group"
      style={{ paddingBottom: "56.25%" }}
      onClick={handleClick}
      aria-label={`Play ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 transition-colors duration-200 flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
