import { easing } from "maath";
import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Shirt() {
  const { nodes, materials } = useGLTF("/shirt.glb");

  return (
    <group>
      <mesh
        castShadow //shadow behin
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      ></mesh>
    </group>
  );
}
