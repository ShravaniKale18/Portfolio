import React, { useMemo } from 'react';
import * as THREE from 'three';

/**
 * Procedural luminous orbit path with subtle dash / glow styling
 */
export const OrbitPath = ({ radius, isHighlighted, isDimmed }) => {
  const linePoints = useMemo(() => {
    const points = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return points;
  }, [radius]);

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(linePoints);
  }, [linePoints]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        color={isHighlighted ? '#06b6d4' : '#6366f1'}
        transparent
        opacity={isHighlighted ? 0.75 : isDimmed ? 0.08 : 0.22}
        linewidth={1}
      />
    </line>
  );
};
