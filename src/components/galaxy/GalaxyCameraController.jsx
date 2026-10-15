import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

/**
 * GalaxyCameraController handles smooth camera framing between full universe overview
 * and focused project inspection. Interruptible, smooth, and bounded.
 */
export const GalaxyCameraController = ({ selectedPlanetPos, isOverview, isMobile }) => {
  const { camera } = useThree();
  const controlsRef = useRef();

  // Target camera position
  const targetCamPos = useRef(new THREE.Vector3(0, isMobile ? 18 : 14, isMobile ? 22 : 18));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    if (selectedPlanetPos && !isOverview) {
      // Focus near selected planet with offset
      const offset = isMobile ? new THREE.Vector3(0, 4.5, 7.5) : new THREE.Vector3(2.5, 3.5, 6);
      targetCamPos.current.copy(selectedPlanetPos).add(offset);
      targetLookAt.current.copy(selectedPlanetPos);
    } else {
      // Return to galaxy overview
      targetCamPos.current.set(0, isMobile ? 18 : 14, isMobile ? 22 : 18);
      targetLookAt.current.set(0, 0, 0);
    }
  }, [selectedPlanetPos, isOverview, isMobile]);

  useFrame((state, delta) => {
    // Smooth lerp camera position
    camera.position.lerp(targetCamPos.current, delta * 2.8);

    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLookAt.current, delta * 2.8);
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={true}
      minDistance={6}
      maxDistance={35}
      maxPolarAngle={Math.PI / 2.05} // prevent going underneath disk
      minPolarAngle={Math.PI / 8}
      rotateSpeed={0.65}
      zoomSpeed={0.7}
      dampingFactor={0.05}
    />
  );
};
