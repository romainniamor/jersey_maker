import ai from "../assets/icons/ai.png";
import logo from "../assets/icons/logo.png";
import color from "../assets/icons/color.png";
import brand from "../assets/icons/brand.png";

export const getEditTabsConfig = (currentTabSelected: string) => [
  {
    index: "color",
    label: "colorpicker",
    icon: color,
    className: currentTabSelected === "color" ? "active" : "",
  },
  {
    index: "logo",
    label: "logopicker",
    icon: logo,
    className: currentTabSelected === "logo" ? "active" : "",
  },
  {
    index: "brand",
    label: "brandpicker",
    icon: brand,
    className: currentTabSelected === "brand" ? "active" : "",
  },
  {
    index: "ai",
    label: "aipicker",
    icon: ai,
    className: currentTabSelected === "ai" ? "active" : "",
  },
];
