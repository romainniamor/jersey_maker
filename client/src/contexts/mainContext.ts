import { createContext } from "react";
import { string } from "three/examples/jsm/nodes/Nodes.js";
import { MainContextType } from "./mainContextType";

const MainContext = createContext<MainContextType>({
  intro: true,
  setIntro: () => {},

  color: string,
  setColor: () => {},

  currentTabSelected: "",
  setCurrentTabSelected: () => {},

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

  prompt: string,
  setPrompt: () => {},
});

export default MainContext;
