import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";
import { useContext } from "react";
import MainContext from "../contexts/mainContext";

export default function BackShadow() {
  const shadows = useRef();
  const { color } = useContext(MainContext);
  return (
    <AccumulativeShadows
      temporal
      frames={100}
      color={color}
      // colorBlend={20}
      toneMapped={true}
      opacity={0.9}
      scale={5}
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
