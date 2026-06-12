"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface WorkShowcaseProps {
  poster: string;
  video: string;
  /** Accessible label for the play action. */
  label?: string;
}

/**
 * "How We Work" media block — a wide, rounded poster with a centred play
 * button (matching the reference design). Clicking swaps the poster for the
 * inline brand video. Brand-green play button and accent ring.
 */
export function WorkShowcase({ poster, video, label = "Play the film" }: WorkShowcaseProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative aspect-[16/8] w-full overflow-hidden rounded-[1.75rem] shadow-[0_30px_70px_-30px_rgba(11,20,16,0.45)] ring-1 ring-[#16291E]/10">
      {playing ? (
        <video
          src={video}
          poster={poster}
          controls
          autoPlay
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <Image
            src={poster}
            alt=""
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 80vw, 100vw"
          />
          {/* Deep-green wash for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1410]/55 via-[#0B1410]/10 to-transparent" />

          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={label}
            className="absolute inset-0 flex items-center justify-center focus:outline-none"
          >
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#3E8F5E] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
              {/* Pulsing halo */}
              <span className="absolute inset-0 animate-ping rounded-full bg-[#3E8F5E]/40" />
              <span className="absolute -inset-3 rounded-full border border-white/30" />
              <Play className="relative ml-1 h-8 w-8 fill-current" strokeWidth={1} />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
