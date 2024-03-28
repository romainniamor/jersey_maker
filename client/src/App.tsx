import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import Canvas from "./canvas";
import MainContext from "./contexts/mainContext";
import { useState } from "react";

function App() {
  const [intro, setIntro] = useState(true);

  const mainContextValue = {
    intro,
    setIntro,
  };

  return (
    <MainContext.Provider value={mainContextValue}>
      <Canvas />
      <Customizer />
      <Home />
    </MainContext.Provider>
  );
}

export default App;
