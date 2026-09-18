import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.z = 9;

      const geometry = new THREE.BufferGeometry();
      const count = 900;
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const d = 7 + Math.random() * 20;
        positions[i * 3] = Math.cos(a) * d * (0.5 + Math.random());
        positions[i * 3 + 1] = (Math.random() - 0.5) * 17;
        positions[i * 3 + 2] = -Math.random() * 25;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0xD4C5A0,
        size: 0.022,
        transparent: true,
        opacity: 0.35,
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);

      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;

      const handlePointerMove = (e: PointerEvent) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      const handleResize = () => {
        if (!renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('resize', handleResize);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        currentX += (targetX - currentX) * 0.02;
        currentY += (targetY - currentY) * 0.02;

        stars.rotation.y += 0.00015;
        stars.rotation.x = currentY * 0.025;
        stars.rotation.z = currentX * 0.01;

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('resize', handleResize);
        geometry.dispose();
        material.dispose();
        renderer?.dispose();
      };
    } catch (e) {
      console.warn('WebGL initialization failed:', e);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
    />
  );
}
