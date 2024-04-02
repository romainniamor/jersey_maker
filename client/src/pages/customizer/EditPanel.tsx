import { useContext } from "react";
import ColorPicker from "../../components/pickers/ColorPicker";
import MainContext from "../../contexts/mainContext";
import AiPicker from "../../components/pickers/AiPicker";
import BrandPicker from "../../components/pickers/BrandPicker";
import LogoPicker from "../../components/pickers/LogoPicker";

export default function EditPanel() {
  const { currentTabSelected } = useContext(MainContext);
  return (
    <div className="absolute left-full ml-3  rounded-lg ">
      {currentTabSelected === "color" && <ColorPicker />}
      {currentTabSelected === "ai" && <AiPicker />}
      {currentTabSelected === "logo" && <LogoPicker />}
      {currentTabSelected === "brand" && <BrandPicker />}
    </div>
  );
}
