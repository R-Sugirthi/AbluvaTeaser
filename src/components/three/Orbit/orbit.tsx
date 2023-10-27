import React from "react";

import { OrbitControls } from "@react-three/drei";

function Orbit() {
  return (
    <OrbitControls
      enableZoom={false}
      autoRotate={true}
      autoRotateSpeed={2}
      maxDistance={450}
      minDistance={110}
      enablePan={false}
      rotateSpeed={0.008}
      screenSpacePanning={true}
    />
  );
}

export default Orbit;
