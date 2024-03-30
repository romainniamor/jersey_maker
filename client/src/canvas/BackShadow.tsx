import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

export default function BackShadow() {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={1}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.3]}
      bgColor={"#ffffff"}
    >
      <RandomizedLight
        amount={4}
        radius={19}
        intensity={1.9}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={2}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}
