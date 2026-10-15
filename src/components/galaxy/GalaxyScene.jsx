import React, { useMemo } from 'react';
import * as THREE from 'three';
import { StarField } from './StarField';
import { OrbitPath } from './OrbitPath';
import { GalacticCore } from './GalacticCore';
import { ProjectPlanet } from './ProjectPlanet';
import { GalaxyCameraController } from './GalaxyCameraController';

/**
 * Procedural planet configuration generator based on authentic project category and priority
 */
const getPlanetSpecs = (project, index, total) => {
  // Evenly distribute orbit radii from 4.5 to 14.5
  const orbitRadius = 4.6 + (index * 1.95);
  // Stagger initial angle
  const initialAngle = (index / total) * Math.PI * 2 + (index * 0.4);
  // Gentle orbital speeds (inner planets orbit slightly faster, outer slower)
  const orbitSpeed = (0.07 / (1 + index * 0.25)) * (index % 2 === 0 ? 1 : -0.85);

  let color = '#06b6d4';
  let emissiveColor = '#06b6d4';
  let ringColor = '#06b6d4';
  let hasRings = false;
  let size = project.featured ? 0.95 : 0.8;

  switch (project.category) {
    case 'AI/ML':
      color = '#06b6d4'; // Electric Cyan
      emissiveColor = '#0891b2';
      hasRings = true;
      ringColor = '#22d3ee';
      size = 1.05;
      break;
    case 'Python':
      color = '#38bdf8'; // Sky / Teal
      emissiveColor = '#0284c7';
      hasRings = index % 2 === 0;
      ringColor = '#7dd3fc';
      size = 0.9;
      break;
    case 'Web Development':
      color = '#a855f7'; // Electric Violet
      emissiveColor = '#7c3aed';
      hasRings = true;
      ringColor = '#c084fc';
      size = 0.92;
      break;
    case 'Academic Projects':
      color = '#34d399'; // Emerald
      emissiveColor = '#059669';
      hasRings = false;
      size = 0.82;
      break;
    default:
      color = '#818cf8'; // Indigo
      emissiveColor = '#4f46e5';
      hasRings = false;
      size = 0.85;
      break;
  }

  return { orbitRadius, initialAngle, orbitSpeed, color, emissiveColor, ringColor, hasRings, size };
};

export const GalaxyScene = ({
  projects,
  selectedProject,
  hoveredProject,
  onSelectProject,
  onHoverProject,
  onPointerOut,
  isMobile
}) => {
  // Generate planet layout configurations for all active projects
  const planetConfigs = useMemo(() => {
    return projects.map((p, idx) => ({
      project: p,
      specs: getPlanetSpecs(p, idx, projects.length)
    }));
  }, [projects]);

  // Compute selected planet position for camera focus
  const selectedPlanetPos = useMemo(() => {
    if (!selectedProject) return null;
    const config = planetConfigs.find((c) => c.project.id === selectedProject.id);
    if (!config) return null;
    // Approximation of radius position
    const r = config.specs.orbitRadius;
    const theta = config.specs.initialAngle;
    return new THREE.Vector3(Math.cos(theta) * r, 0, Math.sin(theta) * r);
  }, [selectedProject, planetConfigs]);

  const hasSelection = Boolean(selectedProject);

  return (
    <>
      {/* Restrained galactic ambient & directional lighting */}
      <ambientLight intensity={0.45} />
      <directionalLight position={[10, 15, 10]} intensity={0.8} color="#e0e7ff" />
      <directionalLight position={[-10, -10, -10]} intensity={0.25} color="#818cf8" />

      {/* Galaxy Camera Controller */}
      <GalaxyCameraController
        selectedPlanetPos={selectedPlanetPos}
        isOverview={!hasSelection}
        isMobile={isMobile}
      />

      {/* Background StarField */}
      <StarField count={isMobile ? 500 : 900} />

      {/* Central Visual Anchor - Developer Universe Core */}
      <GalacticCore isDimmed={hasSelection} />

      {/* Render Orbits & Project Planets */}
      {planetConfigs.map(({ project, specs }) => {
        const isSelected = selectedProject?.id === project.id;
        const isHovered = hoveredProject?.id === project.id;
        const isDimmed = hasSelection && !isSelected;

        return (
          <React.Fragment key={project.id}>
            {/* Luminous orbital ring */}
            <OrbitPath
              radius={specs.orbitRadius}
              isHighlighted={isSelected || isHovered}
              isDimmed={isDimmed}
            />

            {/* Celestial Project Planet */}
            <ProjectPlanet
              project={project}
              orbitRadius={specs.orbitRadius}
              initialAngle={specs.initialAngle}
              orbitSpeed={specs.orbitSpeed}
              size={specs.size}
              color={specs.color}
              emissiveColor={specs.emissiveColor}
              ringColor={specs.ringColor}
              hasRings={specs.hasRings}
              isSelected={isSelected}
              isHovered={isHovered}
              isDimmed={isDimmed}
              onSelect={onSelectProject}
              onHover={onHoverProject}
              onPointerOut={onPointerOut}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
