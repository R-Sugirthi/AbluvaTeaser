"use client";

export default function Perspective() {
  return (
    <mesh>
      <perspectiveCamera
        args={[75, window.innerWidth / window.innerHeight, 0.01, 1000]}
        position={[0, 0, 230]}
      />
    </mesh>
  );
}
