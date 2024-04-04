import { easing } from "maath";
import { useGLTF, Decal, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext } from "react";
import MainContext from "../contexts/mainContext";

export default function Shirt() {
  const { nodes, materials } = useGLTF("/shirt.glb");
  const { logoDecal, fullDecal, isFullTexture, isLogoTexture, color } =
    useContext(MainContext);

  const logoTexture = useTexture(logoDecal);
  const fullTexture = useTexture(fullDecal);

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, color, 0.25, delta);
  });

  return (
    <group>
      <mesh
        castShadow //shadow behind
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {isLogoTexture && (
          <Decal
            position={[0.01, 0.1, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
}
