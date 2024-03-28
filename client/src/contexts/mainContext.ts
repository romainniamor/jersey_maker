import { createContext } from "react";

const MainContext = createContext({
  intro: true,
  setIntro: () => {},
});

export default MainContext;
