"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─── Inline Simplex Noise (no external dep) ─── */
const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
const F3 = 1.0 / 3.0;
const G3 = 1.0 / 6.0;
const F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
const G4 = (5.0 - Math.sqrt(5.0)) / 20.0;

class SimplexNoise {
  p: Uint8Array;
  perm: Uint8Array;
  permMod12: Uint8Array;

  constructor(random: () => number = Math.random) {
    this.p = new Uint8Array(256);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (let i = 0; i < 256; i++) this.p[i] = i;
    for (let i = 255; i > 0; i--) {
      const r = Math.floor(random() * (i + 1));
      const t = this.p[i];
      this.p[i] = this.p[r];
      this.p[r] = t;
    }
    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  noise4D(x: number, y: number, z: number, w: number): number {
    const perm = this.perm;
    let n0: number, n1: number, n2: number, n3: number, n4: number;
    const s = (x + y + z + w) * F4;
    const i = Math.floor(x + s);
    const j = Math.floor(y + s);
    const k = Math.floor(z + s);
    const l = Math.floor(w + s);
    const t = (i + j + k + l) * G4;
    const x0 = x - (i - t);
    const y0 = y - (j - t);
    const z0 = z - (k - t);
    const w0 = w - (l - t);
    const c =
      (x0 > y0 ? 32 : 0) +
      (x0 > z0 ? 16 : 0) +
      (x0 > w0 ? 8 : 0) +
      (y0 > z0 ? 4 : 0) +
      (y0 > w0 ? 2 : 0) +
      (z0 > w0 ? 1 : 0);
    const i1 = c & 1 ? 1 : 0, j1 = c & 2 ? 1 : 0, k1 = c & 4 ? 1 : 0, l1 = c & 8 ? 1 : 0;
    const i2 = c & 16 ? 1 : 0, j2 = c & 32 ? 1 : 0, k2 = c & 64 ? 1 : 0, l2 = c & 128 ? 1 : 0;
    const x1 = x0 - i1 + G4, y1 = y0 - j1 + G4, z1 = z0 - k1 + G4, w1 = w0 - l1 + G4;
    const x2 = x0 - i2 + 2 * G4, y2 = y0 - j2 + 2 * G4, z2 = z0 - k2 + 2 * G4, w2 = w0 - l2 + 2 * G4;
    const x3 = x0 - 1 + 3 * G4, y3 = y0 - 1 + 3 * G4, z3 = z0 - 1 + 3 * G4, w3 = w0 - 1 + 3 * G4;
    const ii = i & 255, jj = j & 255, kk = k & 255, ll = l & 255;
    const g = (hash: number, a: number, b: number, c: number, d: number) => {
      const h = hash & 31;
      const u = h < 24 ? a : b;
      const v = h < 16 ? b : c;
      const ww = h < 8 ? c : d;
      return ((h & 1) ? -u : u) + ((h & 2) ? -v : v) + ((h & 4) ? -ww : ww);
    };
    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
    n0 = t0 < 0 ? 0 : (t0 *= t0, t0 * t0 * g(perm[ii + perm[jj + perm[kk + perm[ll]]]], x0, y0, z0, w0));
    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
    n1 = t1 < 0 ? 0 : (t1 *= t1, t1 * t1 * g(perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]], x1, y1, z1, w1));
    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
    n2 = t2 < 0 ? 0 : (t2 *= t2, t2 * t2 * g(perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]], x2, y2, z2, w2));
    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
    n3 = t3 < 0 ? 0 : (t3 *= t3, t3 * t3 * g(perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]], x3, y3, z3, w3));
    return 27.0 * (n0 + n1 + n2 + n3);
  }
}

/* ─── Particle colors — mostly bright white/cyan, few brand accents ─── */
const BRIGHT_WHITE = new THREE.Color(0xffffff);
const BRIGHT_CYAN = new THREE.Color(0x00ffff);
const LIGHT_BLUE = new THREE.Color(0xadd8e6);
const BRAND_BLUE = new THREE.Color(0x2563eb);
const BRAND_GREEN = new THREE.Color(0x22c55e);
const BRAND_RED = new THREE.Color(0xc41e3a);
const BRAND_ORANGE = new THREE.Color(0xff4500);

/* ─── Component ─── */
export function FuturisticHeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement!;
    const w = () => parent.clientWidth;
    const h = () => parent.clientHeight;

    /* Scene */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w() / h(), 0.1, 1000);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(w(), h());
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // transparent

    /* Lights */
    const pointLight = new THREE.PointLight(0x2563eb, 1.5, 100);
    pointLight.position.set(0, 0, 7);
    scene.add(pointLight);
    scene.add(new THREE.AmbientLight(0x404040, 2));

    /* Noise */
    const simplex = new SimplexNoise();

    /* Artifact (morphing icosahedron) */
    const artifactGeo = new THREE.IcosahedronGeometry(2.5, 20);
    artifactGeo.setAttribute("originalPosition", artifactGeo.attributes.position.clone());
    const artifactMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.25,
      roughness: 0.1,
      transparent: true,
      opacity: 0.45,
      premultipliedAlpha: true,
    });
    const artifact = new THREE.Mesh(artifactGeo, artifactMat);
    scene.add(artifact);

    /* Energy core */
    const coreGeo = new THREE.IcosahedronGeometry(0.9, 5);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xc41e3a, wireframe: true });
    const core = new THREE.Mesh(coreGeo, coreMat);
    artifact.add(core);

    /* Nebula particles — bright white/cyan dominant, few colored accents */
    const COUNT = 12000;
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const brightPalette = [BRIGHT_WHITE, BRIGHT_CYAN, LIGHT_BLUE];
    const accentPalette = [BRAND_BLUE, BRAND_GREEN, BRAND_RED, BRAND_ORANGE];
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      /* 75% bright white/cyan, 25% brand color accents */
      const c = Math.random() < 0.75
        ? brightPalette[Math.floor(Math.random() * brightPalette.length)]
        : accentPalette[Math.floor(Math.random() * accentPalette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    const nebulaGeo = new THREE.BufferGeometry();
    nebulaGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    nebulaGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const nebulaMat = new THREE.PointsMaterial({
      size: 0.012,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
    });
    const nebula = new THREE.Points(nebulaGeo, nebulaMat);
    scene.add(nebula);

    /* Mouse parallax */
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 100;
      mouseY = (e.clientY - window.innerHeight / 2) / 100;
    };
    window.addEventListener("mousemove", onMouseMove);

    /* Resize */
    const onResize = () => {
      camera.aspect = w() / h();
      camera.updateProjectionMatrix();
      renderer.setSize(w(), h());
    };
    window.addEventListener("resize", onResize);

    /* Animate */
    const clock = new THREE.Clock();
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      artifact.rotation.y = 0.1 * t;
      artifact.rotation.x = 0.1 * t;
      core.rotation.y = -0.5 * t;
      core.scale.setScalar(Math.sin(t * 2) * 0.2 + 1);
      nebula.rotation.y += 0.0002;

      /* Vertex displacement */
      const positions = artifact.geometry.attributes.position;
      const originals = artifact.geometry.attributes.originalPosition;
      for (let i = 0; i < positions.count; i++) {
        const ox = originals.getX(i);
        const oy = originals.getY(i);
        const oz = originals.getZ(i);
        const noise = simplex.noise4D(ox * 0.5, oy * 0.5, oz * 0.5, t * 0.15);
        const dir = new THREE.Vector3(ox, oy, oz).normalize().multiplyScalar(noise * 0.35);
        positions.setX(i, ox + dir.x);
        positions.setY(i, oy + dir.y);
        positions.setZ(i, oz + dir.z);
      }
      positions.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      renderer.dispose();
      artifactGeo.dispose();
      artifactMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      nebulaGeo.dispose();
      nebulaMat.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
