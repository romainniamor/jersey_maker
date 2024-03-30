import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import Canvas from "./canvas";
import MainContext from "./contexts/mainContext";
import { useState } from "react";

function App() {
  const [intro, setIntro] = useState(true);
  const [color, setColor] = useState("#FDE100");
  const [isLogoTexture, setIsLogoTexture] = useState(true);
  const [isFullTexture, setIsFullTexture] = useState(false);
  const [isFullDecal, setIsFullDecal] = useState(false);
  const [logoDecal, setLogoDecal] = useState("/teams/7.png");
  const [fullDecal, setFullDecal] = useState("/teams/1.png");

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
