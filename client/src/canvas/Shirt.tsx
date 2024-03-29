import { easing } from "maath";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Shirt() {
  const { nodes, materials } = useGLTF("/shirt.glb");

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, state.color, 0.25, delta);
  });

  return (
    <group>
      <mesh
        castShadow //shadow behind
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      ></mesh>
    </group>
  );
}
