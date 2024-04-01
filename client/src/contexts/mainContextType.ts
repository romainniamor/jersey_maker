import { Dispatch, SetStateAction } from "react";

export type MainContextType = {
  intro: boolean;
  setIntro: Dispatch<SetStateAction<boolean>>;

  color: string;
  setColor: Dispatch<SetStateAction<string>>;

  currentTabSelected: string | null;
  setCurrentTabSelected: Dispatch<SetStateAction<string | null>>;

  isLogoTexture: boolean;
  setIsLogoTexture: Dispatch<SetStateAction<boolean>>;

  isFullTexture: boolean;
  setIsFullTexture: Dispatch<SetStateAction<boolean>>;

  isFullDecal: boolean;
  setIsFullDecal: Dispatch<SetStateAction<boolean>>;

  logoDecal: string;
  setLogoDecal: Dispatch<SetStateAction<string>>;

  fullDecal: string;
  setFullDecal: Dispatch<SetStateAction<string>>;
};
