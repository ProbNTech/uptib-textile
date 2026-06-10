import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  size?: "sm" | "md";
  showValue?: boolean;
  reviewCount?: number;
  className?: string;
}

export function RatingStars({
  rating,
  size = "sm",
  showValue = true,
  reviewCount,
  className = "",
}: RatingStarsProps) {
  const clamped = Math.max(0, Math.min(5, rating));
  const full = Math.floor(clamped);
  const hasHalf = clamped - full >= 0.25 && clamped - full < 0.75;
  const totalFilled = hasHalf ? full + 0.5 : Math.round(clamped);
  const starSize = size === "md" ? "w-5 h-5" : "w-4 h-4";
  const textSize = size === "md" ? "text-base" : "text-sm";

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className}`}
      role="img"
      aria-label={`Rated ${clamped.toFixed(1)} out of 5${
        reviewCount !== undefined ? ` from ${reviewCount} reviews` : ""
      }`}
    >
      <div className="flex items-center" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < Math.floor(totalFilled);
          const half = !filled && i < totalFilled;
          return (
            <span key={i} className="relative inline-block">
              <Star className={`${starSize} text-[#E5E7EB]`} fill="currentColor" />
              {(filled || half) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: half ? "50%" : "100%" }}
                >
                  <Star className={`${starSize} text-[#F59E0B]`} fill="currentColor" />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className={`font-heading font-bold text-[#16291E] ${textSize}`}>
          {clamped.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className={`text-[#6B7280] ${textSize}`}>({reviewCount})</span>
      )}
    </div>
  );
}
