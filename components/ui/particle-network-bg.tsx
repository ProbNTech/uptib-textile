"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  r: number;
  g: number;
  b: number;
  /* blink state */
  blinkPhase: number;
  blinkSpeed: number;
  blinkMin: number;
}

const BRAND = [
  { r: 37, g: 99, b: 235 },   // Blue
  { r: 34, g: 197, b: 94 },   // Green
  { r: 196, g: 30, b: 58 },   // Red
  { r: 234, g: 179, b: 8 },   // Yellow
  { r: 255, g: 255, b: 255 }, // White
];

export function ParticleNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const count = Math.min(Math.floor((rect.width * rect.height) / 7000), 100);
      particles = [];
      for (let i = 0; i < count; i++) {
        const brand = BRAND[Math.floor(Math.random() * BRAND.length)];
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2.5 + 1.5,
          color: `rgba(${brand.r},${brand.g},${brand.b},1)`,
          r: brand.r,
          g: brand.g,
          b: brand.b,
          blinkPhase: Math.random() * Math.PI * 2,
          blinkSpeed: 0.03 + Math.random() * 0.06,
          blinkMin: 0.05 + Math.random() * 0.15,
        });
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const connectionDistance = 150;

      // Draw connections with blink-aware opacity
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const pi = particles[i];
            const pj = particles[j];
            const blinkI = (Math.sin(pi.blinkPhase) + 1) / 2;
            const blinkJ = (Math.sin(pj.blinkPhase) + 1) / 2;
            const avgBlink = (blinkI + blinkJ) / 2;
            const opacity = (1 - dist / connectionDistance) * 0.35 * avgBlink;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = `rgba(180,200,255,${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      for (const p of particles) {
        p.blinkPhase += p.blinkSpeed;
        // blink: oscillate between blinkMin and 1
        const blink = p.blinkMin + (1 - p.blinkMin) * ((Math.sin(p.blinkPhase) + 1) / 2);

        // Outer glow — scales with blink
        const glowRadius = p.radius * 8 * blink;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        glow.addColorStop(0, `rgba(${p.r},${p.g},${p.b},${0.6 * blink})`);
        glow.addColorStop(0.4, `rgba(${p.r},${p.g},${p.b},${0.2 * blink})`);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot — blink affects opacity and size
        const coreRadius = p.radius * (0.6 + 0.4 * blink);
        ctx.beginPath();
        ctx.arc(p.x, p.y, coreRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${blink})`;
        ctx.shadowColor = `rgba(${p.r},${p.g},${p.b},${0.9 * blink})`;
        ctx.shadowBlur = 12 * blink;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Move
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
