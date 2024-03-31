import { SketchPicker } from "react-color";
import { useContext } from "react";
import MainContext from "../../contexts/mainContext";

export default function ColorPicker() {
  const { color, setColor } = useContext(MainContext);

  const handleChange = (color) => {
    setColor(color.hex);
  };
  return (
    <SketchPicker
      className="h-52 overflow-hidden"
      color={color}
      width={250}
      onChange={handleChange}
      disableAlpha
      presetColors={[]}
    />
  );
}
