import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

export default function BackDrop() {
  return (
    <AccumulativeShadows position={(0, 0, -0.14)}>
      <RandomizedLight amount={4}></RandomizedLight>
    </AccumulativeShadows>
  );
}