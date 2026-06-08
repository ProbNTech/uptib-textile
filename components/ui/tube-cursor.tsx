"use client";

import { useEffect, useRef } from "react";

type TubesCursorProps = {
  initialColors?: string[];
  lightColors?: string[];
  lightIntensity?: number;
  enableRandomizeOnClick?: boolean;
  className?: string;
  children?: React.ReactNode;
};

declare global {
  interface Window {
    __tubesCursorApp?: any;
    __tubesCursorCanvas?: HTMLCanvasElement;
  }
}

const TubesCursor = ({
  initialColors = ["#047857", "#10B981", "#047857"],
  lightColors = ["#059669", "#4ade80", "#E74C5E", "#6EE7B7"],
  lightIntensity = 200,
  enableRandomizeOnClick = false,
  className = "",
  children,
}: TubesCursorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Singleton: skip if already running (but NOT if stuck on "loading")
    if (window.__tubesCursorApp && window.__tubesCursorApp !== "loading") {
      if (window.__tubesCursorCanvas && containerRef.current) {
        if (!containerRef.current.contains(window.__tubesCursorCanvas)) {
          containerRef.current.appendChild(window.__tubesCursorCanvas);
        }
      }
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;";
    containerRef.current?.appendChild(canvas);
    window.__tubesCursorCanvas = canvas;
    window.__tubesCursorApp = "loading";

    // Use Function constructor to bypass bundler static analysis for dynamic import
    const dynamicImport = new Function("url", "return import(url)");

    dynamicImport("/scripts/tubes1.min.js")
      .then((mod: any) => {
        const Ctor = mod.default;
        if (!Ctor || !window.__tubesCursorCanvas) return;

        try {
          // Hide WebGPU to force WebGL fallback (Windows 10 compat)
          const gpu = (navigator as any).gpu;
          Object.defineProperty(navigator, "gpu", {
            value: undefined,
            configurable: true,
          });

          const app = Ctor(window.__tubesCursorCanvas, {
            tubes: {
              colors: initialColors,
              lights: {
                intensity: lightIntensity,
                colors: lightColors,
              },
            },
          });

          window.__tubesCursorApp = app;

          if (gpu) {
            Object.defineProperty(navigator, "gpu", {
              value: gpu,
              configurable: true,
            });
          }
        } catch (e) {
          console.warn("[TubesCursor] Init failed:", e);
          window.__tubesCursorApp = null;
        }
      })
      .catch((e: any) => {
        console.warn("[TubesCursor] Script load failed:", e);
        window.__tubesCursorApp = null;
      });
  }, [initialColors, lightColors, lightIntensity, enableRandomizeOnClick]);

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export { TubesCursor };
