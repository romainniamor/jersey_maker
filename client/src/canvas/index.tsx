import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import BackShadow from "./BackShadow";
import CameraRig from "./CameraRig";
import { useContext } from "react";
import MainContext from "../contexts/mainContext";

export default function CanvasModel() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all duration-500 ease-in-out"
    >
      <ambientLight intensity={0.3} />
      <Environment preset="sunset" />
      <CameraRig>
        <BackShadow />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
}
