import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

/**
 * Procedural StarField with varying star sizes, distances, and subtle celestial twinkle
 */
export const StarField = ({ count = 900 }) => {
  const pointsRef = useRef();

  const [positions, colors, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const scl = new Float32Array(count);

    const cyan = new THREE.Color('#06b6d4');
    const violet = new THREE.Color('#8b5cf6');
    const blue = new THREE.Color('#3b82f6');
    const white = new THREE.Color('#f8fafc');

    for (let i = 0; i < count; i++) {
      // Spherical distribution with radius between 25 and 75
      const radius = 25 + Math.random() * 55;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (radius * Math.sin(phi) * Math.sin(theta)) * 0.45; // slightly flattened disk
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Color variation
      const r = Math.random();
      let starColor = white;
      if (r < 0.2) starColor = cyan;
      else if (r < 0.35) starColor = violet;
      else if (r < 0.5) starColor = blue;

      col[i * 3] = starColor.r;
      col[i * 3 + 1] = starColor.g;
      col[i * 3 + 2] = starColor.b;

      scl[i] = Math.random() * 1.5 + 0.5;
    }

    return [pos, col, scl];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
