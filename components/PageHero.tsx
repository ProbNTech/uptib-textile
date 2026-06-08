"use client";

import { ReactNode, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { LazyVideo } from "@/components/LazyVideo";

const BANNER_VIDEO_SRC = "/videos/banner.mp4";
const BANNER_POSTER_SRC = "/videos/banner-poster.jpg";

const FuturisticHeroBg = dynamic(
  () => import("@/components/ui/futuristic-hero-bg").then((m) => m.FuturisticHeroBg),
  { ssr: false }
);

const FloatingIconsBg = dynamic(
  () => import("@/components/ui/floating-icons-hero-section").then((m) => m.FloatingIconsBg),
  { ssr: false }
);

const ElegantShapesBg = dynamic(
  () => import("@/components/ui/shape-landing-hero").then((m) => m.ElegantShapesBg),
  { ssr: false }
);

const ParticleNetworkBg = dynamic(
  () => import("@/components/ui/particle-network-bg").then((m) => m.ParticleNetworkBg),
  { ssr: false }
);

const SplineHeroBg = dynamic(
  () => import("@/components/ui/3d-hero-section-boxes").then((m) => m.SplineHeroBg),
  { ssr: false }
);

const FloatingBoxesBg = dynamic(
  () => import("@/components/ui/floating-boxes-bg").then((m) => m.FloatingBoxesBg),
  { ssr: false }
);

const AwardsHeroBg = dynamic(
  () => import("@/components/ui/awards-hero-bg").then((m) => m.AwardsHeroBg),
  { ssr: false }
);

interface FloatingIcon {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

interface PageHeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  className?: string;
  label?: string;
  image?: string;
  video?: string;
  videoSpeed?: number;
  threeBg?: boolean;
  floatingIcons?: FloatingIcon[];
  floatingShapes?: boolean;
  particleNetwork?: boolean;
  lightOverlay?: boolean;
  splineBg?: boolean;
  floatingBoxes?: boolean;
  awardsBg?: boolean;
  heroImage?: string;
  heroImage2?: string;
  heroVideo?: string;
  heroVideoSpeed?: number;
}

export function PageHero({
  title,
  subtitle,
  children,
  align = "left",
  className = "",
  label,
  image,
  video,
  videoSpeed = 1,
  threeBg = false,
  floatingIcons,
  floatingShapes = false,
  particleNetwork = false,
  lightOverlay = false,
  splineBg = false,
  floatingBoxes = false,
  awardsBg = false,
  heroImage,
  heroImage2,
  heroVideo,
  heroVideoSpeed = 1,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className={`relative z-[2] w-full overflow-hidden bg-[#0B0F1A] ${className}`}>
      {/* Background image */}
      {image && !video && (
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-[center_50%]"
          sizes="100vw"
          quality={90}
        />
      )}

      {/* Background video */}
      {video && (
        <LazyVideo
          ref={videoRef}
          src={BANNER_VIDEO_SRC}
          poster={image || BANNER_POSTER_SRC}
          playbackRate={videoSpeed}
          className="absolute inset-0 w-full h-full z-[0]"
        />
      )}

      {/* 3D animated background */}
      {threeBg && (
        <div className="absolute inset-0 z-[1]">
          <FuturisticHeroBg />
        </div>
      )}

      {/* Floating icons background */}
      {floatingIcons && floatingIcons.length > 0 && (
        <FloatingIconsBg icons={floatingIcons} />
      )}

      {/* Floating geometric shapes background */}
      {floatingShapes && <ElegantShapesBg />}

      {/* Particle network background */}
      {particleNetwork && <ParticleNetworkBg />}

      {/* Spline 3D background */}
      {splineBg && <SplineHeroBg />}

      {/* Floating 3D boxes background */}
      {floatingBoxes && <FloatingBoxesBg />}

      {/* Awards themed background */}
      {awardsBg && <AwardsHeroBg />}

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute right-[10%] top-[20%] w-[400px] h-[400px] rounded-full pointer-events-none z-[5]"
        style={{ background: "radial-gradient(circle, rgba(4,120,87,0.12), transparent 70%)" }}
        animate={shouldReduceMotion ? {} : { y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[60%] bottom-[15%] w-[250px] h-[250px] rounded-full pointer-events-none z-[5]"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)" }}
        animate={shouldReduceMotion ? {} : { y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Right-side hero video — blended into banner (same style as heroImage) */}
      {heroVideo && (
        <div className="absolute right-0 top-0 bottom-0 z-[8] hidden lg:block pointer-events-none" style={{ width: "58%" }}>
          <motion.div
            className="absolute inset-0 z-[7]"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative w-full h-full"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 68% 50%, black 30%, transparent 70%)",
                maskImage: "radial-gradient(ellipse 90% 80% at 68% 50%, black 30%, transparent 70%)",
              }}
            >
              <LazyVideo
                ref={heroVideoRef}
                src={BANNER_VIDEO_SRC}
                poster={BANNER_POSTER_SRC}
                playbackRate={heroVideoSpeed}
                className="absolute inset-0 w-full h-full"
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ background: "rgba(11,15,26,0.1)" }}
              />
            </div>
          </motion.div>
          {/* Subtle glow */}
          <div
            className="absolute right-[12%] top-[40%] -translate-y-1/2 w-[400px] h-[400px] rounded-full z-[5]"
            style={{
              background: "radial-gradient(circle, rgba(4,120,87,0.08) 0%, rgba(16,185,129,0.04) 50%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>
      )}

      {/* Right-side hero image(s) — blended into banner */}
      {heroImage && !heroVideo && (
        <div className="absolute right-0 top-0 bottom-0 z-[8] hidden lg:block pointer-events-none" style={{ width: "55%" }}>
          {/* Primary image — front layer */}
          <motion.div
            className="absolute inset-0 z-[7]"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative w-full h-full"
              style={{
                WebkitMaskImage: heroImage2
                  ? "radial-gradient(ellipse 75% 65% at 70% 40%, black 25%, transparent 68%)"
                  : "radial-gradient(ellipse 85% 70% at 65% 50%, black 30%, transparent 72%)",
                maskImage: heroImage2
                  ? "radial-gradient(ellipse 75% 65% at 70% 40%, black 25%, transparent 68%)"
                  : "radial-gradient(ellipse 85% 70% at 65% 50%, black 30%, transparent 72%)",
              }}
            >
              <Image
                src={heroImage}
                alt=""
                fill
                priority
                className="object-cover object-center scale-[1.1]"
                sizes="55vw"
                quality={95}
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ background: "rgba(11,15,26,0.15)" }}
              />
            </div>
          </motion.div>

          {/* Second image — back layer, offset lower-right */}
          {heroImage2 && (
            <motion.div
              className="absolute inset-0 z-[6]"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 60% 68%, black 20%, transparent 65%)",
                  maskImage: "radial-gradient(ellipse 70% 60% at 60% 68%, black 20%, transparent 65%)",
                }}
              >
                <Image
                  src={heroImage2}
                  alt=""
                  fill
                  priority
                  className="object-cover object-center scale-[1.1]"
                  sizes="55vw"
                  quality={90}
                />
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{ background: "rgba(11,15,26,0.5)" }}
                />
              </div>
            </motion.div>
          )}

          {/* Subtle glow behind images */}
          <div
            className="absolute right-[12%] top-[40%] -translate-y-1/2 w-[400px] h-[400px] rounded-full z-[5]"
            style={{
              background: "radial-gradient(circle, rgba(4,120,87,0.08) 0%, rgba(16,185,129,0.04) 50%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div
        className={`relative z-20 flex items-center min-h-[480px] md:min-h-[520px] lg:min-h-[560px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-20 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <div className={`relative w-full ${align === "center" ? "max-w-3xl text-center" : "max-w-[55%] max-lg:max-w-full"}`}>
          {/* Localized soft shade behind text — pure colour, no blur, video stays sharp */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 -inset-y-6 sm:-inset-x-10 sm:-inset-y-8 rounded-[2.5rem]"
            style={{
              background:
                align === "center"
                  ? "radial-gradient(ellipse 80% 75% at 50% 50%, rgba(5,10,20,0.55) 0%, rgba(5,10,20,0.32) 45%, rgba(5,10,20,0.08) 78%, rgba(5,10,20,0) 100%)"
                  : "radial-gradient(ellipse 75% 70% at 35% 50%, rgba(5,10,20,0.6) 0%, rgba(5,10,20,0.35) 45%, rgba(5,10,20,0.08) 78%, rgba(5,10,20,0) 100%)",
            }}
          />
          <motion.div
            className="relative"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Label */}
            {label && (
              <motion.p
                className="text-lg sm:text-xl font-extrabold uppercase tracking-[0.18em] text-[#047857] mb-4 sm:mb-5"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {label}
              </motion.p>
            )}

            {/* Title — word-by-word blur-in for strings */}
            {typeof title === "string" ? (
              <h1
                className={`font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-6 ${threeBg ? "uppercase tracking-wider" : ""}`}
                style={{
                  lineHeight: 1.25,
                  textShadow: threeBg
                    ? "0 0 10px rgba(4,120,87,0.9), 0 0 20px rgba(4,120,87,0.7), 0 0 40px rgba(4,120,87,0.5), 0 0 80px rgba(4,120,87,0.3)"
                    : "0 2px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                {title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            ) : (
              <motion.div
                className={`font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-6 ${threeBg ? "uppercase tracking-wider" : ""}`}
                style={{
                  lineHeight: 1.25,
                  ...(threeBg && { textShadow: "0 0 10px rgba(4,120,87,0.9), 0 0 20px rgba(4,120,87,0.7), 0 0 40px rgba(4,120,87,0.5), 0 0 80px rgba(4,120,87,0.3)" }),
                }}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {title}
              </motion.div>
            )}

            {/* Subtitle */}
            {subtitle && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {typeof subtitle === "string" ? (
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">{subtitle}</p>
                ) : (
                  subtitle
                )}
              </motion.div>
            )}

            {/* Children (buttons, stats, etc.) */}
            {children && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 sm:mt-8"
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-[#047857] via-[#10B981] to-[#047857]" />
    </section>
  );
}
