import * as THREE from "three";
import React, { FunctionComponent } from "react";

import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef } from "react";
import { IRotaion, ConstSphereBackgroundImg } from "../Common/interfaces";

const SphereBackground: FunctionComponent<IRotaion> = (props) => {
  const texturenucleus = useLoader(TextureLoader, ConstSphereBackgroundImg);
  const customMesh = useRef();

  if (props.anisotropy) {
    texturenucleus.anisotropy = props.anisotropy;
  }

  useFrame(({}) => {
    customMesh.current.rotation.x += props.rotaionX;
    customMesh.current.rotation.y += props.rotaionY;
    customMesh.current.rotation.z += props.rotaionZ;
  });

  return (
    <mesh ref={customMesh}>
      <sphereGeometry args={props.args} />
      <meshBasicMaterial
        side={THREE.BackSide}
        map={texturenucleus}
        transparent={true}
        opacity={props.opacity}
      />
    </mesh>
  );
};

export default SphereBackground;
