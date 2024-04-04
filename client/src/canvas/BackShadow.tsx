import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useContext } from "react";
import MainContext from "../contexts/mainContext";

export default function BackShadow() {
  const { color } = useContext(MainContext);

  return (
    <AccumulativeShadows
      temporal
      frames={100}
      color={color}
      toneMapped={true}
      opacity={0.7}
      scale={4}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.17]}
    >
      <RandomizedLight
        amount={4}
        radius={90}
        intensity={1.7}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={50}
        intensity={1.6}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}
