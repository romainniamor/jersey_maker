import { useContext } from "react";
import ColorPicker from "../../components/pickers/ColorPicker";
import MainContext from "../../contexts/mainContext";

export default function EditPanel() {
  const { currentTabSelected, setCurrentTabSelected } = useContext(MainContext);
  return (
    <div className="absolute left-full ml-3 p-5">
      {currentTabSelected === "color" && <ColorPicker />}
      {/* {currentTabSelected === "edit" && <EditForm />} */}
    </div>
  );
}
