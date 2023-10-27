import React, { useState } from "react";

import { OrbitControls } from "@react-three/drei";

function Ambient() {
  return <ambientLight position={[0, 20, 20]} args={["#ffffff", 1]} />;
}

export default Ambient;
