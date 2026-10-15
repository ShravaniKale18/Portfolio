import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

/**
 * ProjectPlanet represents an individual authentic project as a custom 3D celestial object.
 * Procedural geometry, glowing rings, atmosphere, and smooth hover/selection responses.
 */
export const ProjectPlanet = ({
  project,
  orbitRadius,
  initialAngle = 0,
  orbitSpeed = 0.05,
  size = 0.85,
  color = '#06b6d4',
  emissiveColor = '#06b6d4',
  hasRings = false,
  ringColor = '#06b6d4',
  isSelected = false,
  isHovered = false,
  isDimmed = false,
  onSelect,
  onHover,
  onPointerOut
}) => {
  const planetRef = useRef();
  const ringRef = useRef();
  const angleRef = useRef(initialAngle);

  // Smooth orbital motion
  useFrame((state, delta) => {
    // Only orbit gently if not currently selected for smooth interaction
    if (!isSelected) {
      angleRef.current += delta * orbitSpeed;
    }

    const x = Math.cos(angleRef.current) * orbitRadius;
    const z = Math.sin(angleRef.current) * orbitRadius;

    if (planetRef.current) {
      planetRef.current.position.set(x, 0, z);
      planetRef.current.rotation.y += delta * 0.4;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
    }
  });

  // Calculate dynamic scale & visual intensity
  const targetScale = isSelected ? size * 1.35 : isHovered ? size * 1.2 : size;
  const currentOpacity = isDimmed ? 0.25 : 1;
  const emissiveIntensity = isSelected ? 1.8 : isHovered ? 1.4 : 0.6;

  return (
    <group ref={planetRef}>
      {/* Interactive Hit Area Sphere & Mesh */}
      <mesh
        scale={targetScale}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(project);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
          onHover(project);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'auto';
          onPointerOut();
        }}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={emissiveColor}
          emissiveIntensity={emissiveIntensity * currentOpacity}
          roughness={0.35}
          metalness={0.65}
          wireframe={false}
        />
      </mesh>

      {/* Atmospheric Glow Mesh */}
      <mesh scale={targetScale * 1.22}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshBasicMaterial
          color={emissiveColor}
          transparent
          opacity={(isSelected ? 0.35 : isHovered ? 0.25 : 0.08) * currentOpacity}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          wireframe
        />
      </mesh>

      {/* Optional Celestial Rings */}
      {hasRings && (
        <mesh
          ref={ringRef}
          rotation={[Math.PI / 3, 0.2, 0]}
          scale={targetScale * 1.75}
        >
          <ringGeometry args={[1.2, 1.6, 32]} />
          <meshBasicMaterial
            color={ringColor}
            side={THREE.DoubleSide}
            transparent
            opacity={(isSelected ? 0.6 : isHovered ? 0.45 : 0.28) * currentOpacity}
          />
        </mesh>
      )}

      {/* Highlight beacon when selected */}
      {isSelected && (
        <mesh position={[0, -targetScale * 1.5, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 2.5, 8]} />
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.65}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {/* Compact floating 3D label - visible on Hover or Selection */}
      {(isHovered || isSelected) && (
        <Html
          position={[0, targetScale * 1.35 + 0.4, 0]}
          center
          distanceFactor={18}
          zIndexRange={[100, 0]}
        >
          <div className="pointer-events-none select-none px-3 py-1.5 rounded-xl bg-midnight-950/90 border border-white/15 backdrop-blur-md shadow-xl text-center whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
            <p className="text-xs font-display font-bold text-white tracking-tight flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: color }}
              />
              {project.title}
            </p>
            <p className="text-[10px] font-mono text-slate-400 mt-0.5">
              {project.category} • {project.timeline || 'Project'}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
};
