import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";

export default function CanvasModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      {/* <CameraRig>
      <BackDrop /> */}
      <Center>
        <Shirt />
      </Center>
      {/* </CameraRig> */}
    </Canvas>
  );
}
