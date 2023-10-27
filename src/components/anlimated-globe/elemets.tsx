"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";

import Nucleus from "../three/Mesh/nucleus";
import Orbit from "../three/Orbit/orbit";
import StarGeometry from "../three/Geometry/star";
import SphereBackground from "../three/Sphere/spherebackground";
import ClickablePoint from "../three/Points/clickablePoints";
import Diractional from "../three/Light/directional";
import { constantPounts, sphres } from "../constants/contsants";
import Ambient from "../three/Light/ambient";
export default function Elemets() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );
  camera.position.set(0, 0, 230);
  camera.fov = 60;
  const ref = useRef();
  let previousMouseX = 0;
  let previousMouseY = 0;
  useFrame((state) => {
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;
    const deltaX = mouseX - previousMouseX;
    const deltaY = mouseY - previousMouseY;

    // Adjust the rotation speed based on mouse movement
    const rotationSpeed = 0.103;

    // Rotate the entire scene around the Y-axis based on mouse movement
    ref.current.rotation.y += deltaX * rotationSpeed * 2;

    // Rotate the entire scene around the X-axis based on mouse movement
    ref.current.rotation.x += deltaY * rotationSpeed * 2;

    previousMouseX = mouseX;
    previousMouseY = mouseY;
  });
  return (
    <mesh ref={ref}>
      <Orbit />
      <Diractional />
      <Ambient />
      <StarGeometry />
      <Nucleus />
      {sphres.map(function (points) {
        return (
          <SphereBackground
            anisotropy={points.anisotropy}
            args={points.args}
            key={Math.random()}
            opacity={points.opacity}
            rotaionX={points.rotaionX}
            rotaionY={points.rotaionX}
            rotaionZ={points.rotaionZ}
          />
        );
      })}
    </mesh>
  );
}
