"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND = [
  { r: 37 / 255, g: 99 / 255, b: 235 / 255 },  // Blue #047857
  { r: 34 / 255, g: 197 / 255, b: 94 / 255 },   // Green #10B981
  { r: 196 / 255, g: 30 / 255, b: 58 / 255 },    // Red #047857
  { r: 234 / 255, g: 179 / 255, b: 8 / 255 },    // Yellow #EAB308
  { r: 26 / 255, g: 43 / 255, b: 94 / 255 },     // Navy #064E3B
];

interface BoxData {
  mesh: THREE.Mesh;
  edges: THREE.LineSegments;
  speed: { x: number; y: number; z: number; rotX: number; rotY: number; rotZ: number };
  floatOffset: number;
  floatSpeed: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export function FloatingBoxesBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 8, 10);
    scene.add(dirLight);

    const pointLight1 = new THREE.PointLight(0x2563eb, 1.5, 30);
    pointLight1.position.set(-6, 4, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xc41e3a, 1.2, 30);
    pointLight2.position.set(6, -3, 5);
    scene.add(pointLight2);

    // Create boxes
    const boxes: BoxData[] = [];
    const boxCount = 18;

    for (let i = 0; i < boxCount; i++) {
      const brand = BRAND[i % BRAND.length];
      const size = 0.4 + Math.random() * 1.2;
      const isRounded = Math.random() > 0.5;

      const geometry = isRounded
        ? new THREE.BoxGeometry(size, size, size, 1, 1, 1)
        : new THREE.BoxGeometry(size, size * (0.6 + Math.random() * 0.8), size * (0.6 + Math.random() * 0.8));

      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(brand.r, brand.g, brand.b),
        transparent: true,
        opacity: 0.15 + Math.random() * 0.2,
        roughness: 0.1,
        metalness: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Spread boxes across the scene
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8 - 2
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Glowing edges
      const edgesGeo = new THREE.EdgesGeometry(geometry);
      const edgesMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(brand.r, brand.g, brand.b),
        transparent: true,
        opacity: 0.4 + Math.random() * 0.3,
      });
      const edges = new THREE.LineSegments(edgesGeo, edgesMat);
      mesh.add(edges);

      scene.add(mesh);

      boxes.push({
        mesh,
        edges,
        speed: {
          x: (Math.random() - 0.5) * 0.003,
          y: (Math.random() - 0.5) * 0.003,
          z: (Math.random() - 0.5) * 0.001,
          rotX: (Math.random() - 0.5) * 0.008,
          rotY: (Math.random() - 0.5) * 0.008,
          rotZ: (Math.random() - 0.5) * 0.004,
        },
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.3 + Math.random() * 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.5 + Math.random() * 1.0,
      });
    }

    // Animation
    let time = 0;
    let animId: number;

    const animate = () => {
      time += 0.016;

      for (const box of boxes) {
        // Rotate
        box.mesh.rotation.x += box.speed.rotX;
        box.mesh.rotation.y += box.speed.rotY;
        box.mesh.rotation.z += box.speed.rotZ;

        // Float
        box.mesh.position.y += Math.sin(time * box.floatSpeed + box.floatOffset) * 0.005;
        box.mesh.position.x += box.speed.x;

        // Pulse opacity
        const pulse = (Math.sin(time * box.pulseSpeed + box.pulsePhase) + 1) / 2;
        const mat = box.mesh.material as THREE.MeshPhysicalMaterial;
        mat.opacity = 0.1 + pulse * 0.25;
        const edgeMat = box.edges.material as THREE.LineBasicMaterial;
        edgeMat.opacity = 0.3 + pulse * 0.5;

        // Wrap horizontally
        if (box.mesh.position.x > 12) box.mesh.position.x = -12;
        if (box.mesh.position.x < -12) box.mesh.position.x = 12;
      }

      // Gentle camera sway
      camera.position.x = Math.sin(time * 0.1) * 0.3;
      camera.position.y = Math.cos(time * 0.08) * 0.2;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      for (const box of boxes) {
        box.mesh.geometry.dispose();
        (box.mesh.material as THREE.Material).dispose();
        box.edges.geometry.dispose();
        (box.edges.material as THREE.Material).dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
