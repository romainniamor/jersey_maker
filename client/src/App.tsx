import Home from "./pages/Home";
import Customizer from "./pages/customizer/Customizer";
import Canvas from "./canvas";
import MainContext from "./contexts/mainContext";
import { useState } from "react";

function App() {
  const [intro, setIntro] = useState(true);
  const [color, setColor] = useState("#2e088f");
  const [isLogoTexture, setIsLogoTexture] = useState(true);
  const [isFullTexture, setIsFullTexture] = useState(false);
  const [isFullDecal, setIsFullDecal] = useState(false);
  const [logoDecal, setLogoDecal] = useState("/meiwa.png");
  const [fullDecal, setFullDecal] = useState("/meiwa.png");
  const [currentTabSelected, setCurrentTabSelected] = useState(null);

  const mainContextValue = {
    intro,
    setIntro,
    color,
    setColor,
    isLogoTexture,
    setIsLogoTexture,
    isFullTexture,
    setIsFullTexture,
    isFullDecal,
    setIsFullDecal,
    logoDecal,
    setLogoDecal,
    fullDecal,
    setFullDecal,
    currentTabSelected,
    setCurrentTabSelected,
  };

  return (
    <MainContext.Provider value={mainContextValue}>
      <div className="relative w-full h-screen overflow-hidden">
        <Home />
        <Canvas />
        <Customizer />
      </div>
    </MainContext.Provider>
  );
}

export default App;
