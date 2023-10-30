import React, { useRef, useMemo } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const particlesCount = 150;

function randomPointSphere(radius: number) {
  let theta = 2 * Math.PI * Math.random();
  let phi = Math.acos(2 * Math.random() - 1);
  let dx = 0 + radius * Math.sin(phi) * Math.cos(theta);
  let dy = 20 + radius * Math.sin(phi) * Math.sin(theta);
  let dz = 0 + radius * Math.cos(phi);
  return new THREE.Vector3(dx, dy, dz);
}

export default function Star() {
  const geometry = new THREE.BufferGeometry();
  let positions = [];
  let normals = [];
  const ref = useRef<THREE.Points>();

  const texture = useLoader(
    THREE.TextureLoader,
    "https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png"
  );

  for (var counter = 0; counter < particlesCount; counter++) {
    let particleStar = randomPointSphere(particlesCount);
    positions.push(particleStar.x, particleStar.y, particleStar.z);
  }
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  geometry.computeVertexNormals(); // Compute normals

  useFrame((state) => {
    const geometryRef = ref.current;
    if (geometryRef) {
      const positionAttribute = geometryRef.geometry.getAttribute("position");
      const vertex = new THREE.Vector3();
      for (let i = 0; i < positionAttribute.count; i++) {
        const v = vertex.fromBufferAttribute(positionAttribute, i);
        positionAttribute.setXYZ(i, v.x, v.y, v.z);
      }
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <>
      <points geometry={geometry} ref={ref}>
        <pointsMaterial
          size={6}
          map={texture}
          color={"#ffffff"}
          transparent={true}
          alphaTest={0.5}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}
