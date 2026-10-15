import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

/**
 * GalacticCore represents Shravani's central developer identity anchor
 * Procedural luminous core with rotating equatorial rings and subtle corona
 */
export const GalacticCore = ({ isDimmed }) => {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.15;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.2;
      ring1Ref.current.rotation.x += delta * 0.05;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.15;
      ring2Ref.current.rotation.x -= delta * 0.1;
    }
  });

  const coreOpacity = isDimmed ? 0.35 : 1;

  return (
    <group position={[0, 0, 0]}>
      {/* Central pulsating star/core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshStandardMaterial
          color="#1e1b4b"
          emissive="#6366f1"
          emissiveIntensity={1.4 * coreOpacity}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Outer atmosphere halo */}
      <mesh>
        <sphereGeometry args={[1.7, 24, 24]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.15 * coreOpacity}
          blending={THREE.AdditiveBlending}
          wireframe
        />
      </mesh>

      {/* Orbiting ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 64]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.45 * coreOpacity}
        />
      </mesh>

      {/* Orbiting ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.55, 0.015, 16, 64]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.35 * coreOpacity}
        />
      </mesh>

      {/* Point light emitted from core */}
      <pointLight color="#818cf8" intensity={18 * coreOpacity} distance={20} decay={2} />
    </group>
  );
};
