"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Feature, Geometry } from "geojson";

/* ISO 3166-1 numeric codes for highlighted countries */
const HIGHLIGHT_CODES: Record<string, string> = {
  "826": "#047857", // UK  — Blue
  "586": "#10B981", // Pakistan — Green
  "840": "#047857", // USA — Rose
  "276": "#F59E0B", // Germany — Amber
  "784": "#8B5CF6", // UAE — Purple
  "682": "#06B6D4", // Saudi Arabia — Cyan
  "792": "#EC4899", // Turkey — Pink
  "156": "#EF4444", // China — Red
  "458": "#14B8A6", // Malaysia — Teal
  "124": "#F97316", // Canada — Orange
  "208": "#6EE7B7", // Denmark — Light Blue
  "250": "#A78BFA", // France — Light Purple
  "528": "#FB923C", // Netherlands — Light Orange
  "372": "#34D399", // Ireland — Emerald
  "578": "#38BDF8", // Norway — Sky
  "752": "#FBBF24", // Sweden — Yellow
  "56":  "#C084FC", // Belgium — Violet
  "76":  "#4ADE80", // Brazil — Light Green
  "484": "#2DD4BF", // Mexico — Teal
};

/* Approx centroids for each country */
const COUNTRY_CENTERS: Record<string, [number, number]> = {
  UK: [-2, 54],
  PK: [69, 30],
  US: [-98, 39],
  DE: [10, 51],
  AE: [54, 24],
  SA: [45, 24],
  TR: [35, 39],
  CN: [104, 35],
  MY: [102, 4],
  CA: [-106, 56],
  DK: [10, 56],
  FR: [2, 47],
  NL: [5, 52],
  IE: [-8, 53],
  NO: [10, 62],
  SE: [16, 62],
  BE: [4, 51],
  BR: [-52, -14],
  MX: [-102, 23],
};

/* Network connections — pairs of country keys */
const CONNECTIONS: [string, string][] = [
  // Primary corridor
  ["UK", "PK"],
  // UK ↔ Europe neighbours
  ["UK", "IE"],
  ["UK", "FR"],
  ["UK", "NL"],
  ["UK", "BE"],
  ["UK", "DE"],
  ["UK", "DK"],
  ["UK", "NO"],
  ["UK", "SE"],
  // UK ↔ Americas & Middle East
  ["UK", "US"],
  ["UK", "CA"],
  ["UK", "AE"],
  ["UK", "TR"],
  // European inter-connections
  ["FR", "DE"],
  ["FR", "BE"],
  ["NL", "DE"],
  ["NL", "BE"],
  ["DK", "NO"],
  ["DK", "SE"],
  ["DK", "DE"],
  ["NO", "SE"],
  ["DE", "TR"],
  // Americas cluster
  ["US", "CA"],
  ["US", "MX"],
  ["US", "BR"],
  ["CA", "MX"],
  // Pakistan ↔ regional
  ["PK", "AE"],
  ["PK", "SA"],
  ["PK", "CN"],
  ["PK", "MY"],
  ["PK", "TR"],
  // Middle East / Asia
  ["AE", "SA"],
  ["CN", "MY"],
];

interface GlobeProps {
  size?: number;
  className?: string;
}

export function WireframeDottedGlobe({ size = 500, className = "" }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: -30, y: -20 }); // start facing UK/Pak region
  const velocityRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const animIdRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let s = Math.min(container.getBoundingClientRect().width, container.getBoundingClientRect().height, size);
    const dpr = window.devicePixelRatio || 1;
    canvas.width = s * dpr;
    canvas.height = s * dpr;
    canvas.style.width = `${s}px`;
    canvas.style.height = `${s}px`;
    ctx.scale(dpr, dpr);

    const projection = d3
      .geoOrthographic()
      .scale(s / 2 - 20)
      .translate([s / 2, s / 2])
      .clipAngle(90);

    const pathGenerator = d3.geoPath().projection(projection).context(ctx);
    const graticule = d3.geoGraticule().step([15, 15])();

    /* Load world topology */
    let countries: FeatureCollection<Geometry> | null = null;
    let landFeature: Feature<Geometry> | null = null;

    import("world-atlas/countries-110m.json").then((topoRaw) => {
      const topo = topoRaw.default as unknown as Topology<{ countries: GeometryCollection; land: GeometryCollection }>;
      countries = feature(topo, topo.objects.countries) as unknown as FeatureCollection<Geometry>;
      if (topo.objects.land) {
        const landCollection = feature(topo, topo.objects.land) as unknown as FeatureCollection<Geometry>;
        landFeature = landCollection.features[0];
      }
    });

    let time = 0;

    const draw = () => {
      time += 0.016;

      if (!isDraggingRef.current) {
        rotationRef.current.x += 0.12;
        rotationRef.current.x += velocityRef.current.x;
        rotationRef.current.y += velocityRef.current.y;
        velocityRef.current.x *= 0.95;
        velocityRef.current.y *= 0.95;
      }

      rotationRef.current.y = Math.max(-60, Math.min(60, rotationRef.current.y));
      projection.rotate([rotationRef.current.x, rotationRef.current.y]);

      ctx.clearRect(0, 0, s, s);

      /* Globe background — dark sphere */
      ctx.beginPath();
      ctx.arc(s / 2, s / 2, s / 2 - 20, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(11, 15, 26, 0.4)";
      ctx.fill();

      /* Globe outline */
      ctx.beginPath();
      pathGenerator({ type: "Sphere" } as d3.GeoPermissibleObjects);
      ctx.strokeStyle = "rgba(4,120,87, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /* Graticule wireframe */
      ctx.beginPath();
      pathGenerator(graticule);
      ctx.strokeStyle = "rgba(4,120,87, 0.1)";
      ctx.lineWidth = 0.4;
      ctx.stroke();

      if (countries) {
        /* Regular countries — subtle fill + border */
        for (const f of countries.features) {
          const id = String((f as Feature & { id?: string | number }).id ?? "");
          const highlightColor = HIGHLIGHT_CODES[id];

          if (!highlightColor) {
            ctx.beginPath();
            pathGenerator(f);
            ctx.fillStyle = "rgba(4,120,87, 0.08)";
            ctx.fill();
            ctx.strokeStyle = "rgba(4,120,87, 0.2)";
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }

        /* Highlighted countries — UK and Pakistan with glow */
        for (const f of countries.features) {
          const id = String((f as Feature & { id?: string | number }).id ?? "");
          const highlightColor = HIGHLIGHT_CODES[id];

          if (highlightColor) {
            // Pulsing glow
            const pulse = 0.6 + 0.4 * Math.sin(time * 2);

            // Outer glow pass
            ctx.beginPath();
            pathGenerator(f);
            ctx.fillStyle = highlightColor + Math.round(pulse * 80).toString(16).padStart(2, "0");
            ctx.fill();

            // Main fill
            ctx.beginPath();
            pathGenerator(f);
            ctx.fillStyle = highlightColor + "90";
            ctx.fill();

            // Bright border
            ctx.beginPath();
            pathGenerator(f);
            ctx.strokeStyle = highlightColor;
            ctx.lineWidth = 1.8;
            ctx.shadowColor = highlightColor;
            ctx.shadowBlur = 12 * pulse;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        /* Connection arcs between network countries */
        const arcPulse = 0.5 + 0.5 * Math.sin(time * 3);

        for (let ci = 0; ci < CONNECTIONS.length; ci++) {
          const [keyA, keyB] = CONNECTIONS[ci];
          const a = COUNTRY_CENTERS[keyA];
          const b = COUNTRY_CENTERS[keyB];
          const projA = projection(a);
          const projB = projection(b);

          if (projA && projB) {
            const line: GeoJSON.Feature<GeoJSON.LineString> = {
              type: "Feature",
              properties: {},
              geometry: { type: "LineString", coordinates: [a, b] },
            };

            // Stagger the pulse per connection
            const p = 0.5 + 0.5 * Math.sin(time * 3 + ci * 0.7);
            const isPrimary = (keyA === "UK" && keyB === "PK") || (keyA === "PK" && keyB === "UK");

            ctx.beginPath();
            pathGenerator(line);
            ctx.strokeStyle = isPrimary
              ? `rgba(4,120,87, ${0.5 + p * 0.4})`
              : `rgba(148, 163, 184, ${0.2 + p * 0.25})`;
            ctx.lineWidth = isPrimary ? 2 : 1.2;
            ctx.setLineDash([6, 4]);
            if (isPrimary) {
              ctx.shadowColor = "#047857";
              ctx.shadowBlur = 8 * p;
            }
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.shadowBlur = 0;
          }
        }

        /* Endpoint dots for all network countries */
        const codeToColor: Record<string, string> = {
          UK: "#047857", PK: "#10B981", US: "#047857", DE: "#F59E0B",
          AE: "#8B5CF6", SA: "#06B6D4", TR: "#EC4899", CN: "#EF4444",
          MY: "#14B8A6", CA: "#F97316", DK: "#6EE7B7", FR: "#A78BFA",
          NL: "#FB923C", IE: "#34D399", NO: "#38BDF8", SE: "#FBBF24",
          BE: "#C084FC", BR: "#4ADE80", MX: "#2DD4BF",
        };

        for (const [key, center] of Object.entries(COUNTRY_CENTERS)) {
          const pt = projection(center);
          if (pt) {
            const dotColor = codeToColor[key] || "#94A3B8";
            const isPrimary = key === "UK" || key === "PK";
            const radius = isPrimary ? 4.5 : 3.5;

            // Outer glow ring
            ctx.beginPath();
            ctx.arc(pt[0], pt[1], radius + 3, 0, Math.PI * 2);
            ctx.fillStyle = dotColor + "30";
            ctx.fill();

            // Main dot
            ctx.beginPath();
            ctx.arc(pt[0], pt[1], radius, 0, Math.PI * 2);
            ctx.fillStyle = dotColor;
            ctx.shadowColor = dotColor;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      animIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    /* Mouse interaction */
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      velocityRef.current = { x: 0, y: 0 };
      canvas.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      rotationRef.current.x += dx * 0.3;
      rotationRef.current.y -= dy * 0.3;
      velocityRef.current = { x: dx * 0.15, y: -dy * 0.15 };
      lastPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      canvas.style.cursor = "grab";
    };

    /* Touch interaction */
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        lastPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        velocityRef.current = { x: 0, y: 0 };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - lastPosRef.current.x;
      const dy = e.touches[0].clientY - lastPosRef.current.y;
      rotationRef.current.x += dx * 0.3;
      rotationRef.current.y -= dy * 0.3;
      velocityRef.current = { x: dx * 0.15, y: -dy * 0.15 };
      lastPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd);

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      s = Math.min(rect.width, rect.height, size);
      const newDpr = window.devicePixelRatio || 1;
      canvas.width = s * newDpr;
      canvas.height = s * newDpr;
      canvas.style.width = `${s}px`;
      canvas.style.height = `${s}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(newDpr, newDpr);
      projection.scale(s / 2 - 20).translate([s / 2, s / 2]);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animIdRef.current);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <canvas
        ref={canvasRef}
        style={{ cursor: "grab", maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}
