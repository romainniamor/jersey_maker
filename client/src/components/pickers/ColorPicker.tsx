import React from "react";
import { SketchPicker } from "react-color";
import { useContext } from "react";
import MainContext from "../../contexts/mainContext";

export default function ColorPicker() {
  const { color, setColor } = useContext(MainContext);
  return (
    <div className="absolute top-0 left-9 bg-slate-800">
      <p>dfqbf,qsbf</p>
      <SketchPicker
        color={color}
        disableAlpha
        onChange={(color) => setColor(color.hex)}
      />
    </div>
  );
}
