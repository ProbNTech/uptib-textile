"use client";

import { CountryCard } from "./CountryCard";

interface ContinuousCarouselProps {
  countryData: any;
}

export function ContinuousCarousel({ countryData }: ContinuousCarouselProps) {

  const countryArray = Array.isArray(countryData)
    ? countryData
    : Object.values(countryData);

  const items = [...countryArray, ...countryArray]; // duplicate

  return (
    <div className="overflow-hidden py-8 group relative">
      <div className="flex gap-6 w-max animate-scroll group-hover:[animation-play-state:paused]">

        {items.map((country, i) => (
         <div
  key={`${country.slug}-${i}`}
  className="w-[400px] flex-shrink-0 h-full"
>
  <CountryCard
    country={country}
    index={i % countryArray.length}
  />
</div>
        ))}

      </div>
    </div>
  );
}
