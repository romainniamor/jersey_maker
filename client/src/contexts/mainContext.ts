import { createContext } from "react";
import { string } from "three/examples/jsm/nodes/Nodes.js";

const MainContext = createContext({
  intro: true,
  setIntro: () => {},

  color: string,
  setColor: () => {},

  isLogoTexture: true,
  setIsLogoTexture: () => {},

  isFullTexture: false,
  setIsFullTexture: () => {},

  isFullDecal: false,
  setIsFullDecal: () => {},

  logoDecal: string,
  setLogoDecal: () => {},

  fullDecal: string,
  setFullDecal: () => {},
});

export default MainContext;
