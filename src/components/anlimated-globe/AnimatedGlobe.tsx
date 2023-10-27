"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";
import Elemets from "./elemets";
import Div from "../elements/div";
import {
  WINDOW_INNERWIDTH,
  WINDOW_INNERHEIGHT,
  WINDOW_DEVICE_PIXEL_RATIO,
} from "../constants/contsants";
export default function AnimatedGlobe() {
  const camera = new THREE.PerspectiveCamera(
    75,
    WINDOW_INNERWIDTH / WINDOW_INNERHEIGHT,
    0.01,
    1000
  );
  camera.position.set(0, 0, 230);
  camera.fov = 60;

  return (
    <Div className="bg-transparent h-full">
      <Canvas
        dpr={WINDOW_DEVICE_PIXEL_RATIO}
        flat
        linear
        camera={camera}
        gl={{ antialias: true, alpha: true }}
      >
        <Elemets />
      </Canvas>
    </Div>
  );
}
