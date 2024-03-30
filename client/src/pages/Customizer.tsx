import CustomButton from "../components/reusableUi/CustomButton";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { slideAnimation, fadeAnimation } from "../animations/motion";
import { useContext } from "react";
import MainContext from "../contexts/mainContext";
import { useState } from "react";

import Tab from "../components/reusableUi/Tab";
import { getEditTabsConfig } from "../config/getEditTabsConfig";
import ColorPicker from "../components/pickers/ColorPicker";

type Props = {};

export default function Customizer({}: Props) {
  const { intro, setIntro } = useContext(MainContext);

  const [currentTabSelected, setCurrentTabSelected] = useState(null);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  //comportements
  const selectTab = (tabselected) => {
    setCurrentTabSelected(tabselected);
    alert(`click de tab ${tabselected}`);
  };

  const editTabs = getEditTabsConfig(currentTabSelected);

  return (
    <AnimatePresence>
      {!intro && (
        <>
          <ColorPicker />
          <motion.div
            className="absolute z-10 top-0 left-2"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen ">
              <div className="glassmorphism w-16 border-[2px] rounded-lg flex flex-col justify-center items-center ml-1 py-4 gap-3">
                {editTabs.map((tab) => (
                  <Tab
                    key={tab.index}
                    tab={tab}
                    onClick={() => selectTab(tab.index)}
                    isActiveTab={tab.className === "active" ? true : false}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              label="Go Back"
              onClick={() => setIntro(!intro)}
              color={"bg-gradient-to-r from-sky-400 to-pink-400"}
            />
          </motion.div>

          <motion.div
            className="absolute z-10 bottom-2 right-0 left-0 w-full flex justify-center items-center  gap-4 "
            {...slideAnimation("up")}
          >
            {/* {filterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                onClick={() => alert(`click de tab ${tab.name}`)}
                isActiveTab={false}
                isFilterTab={true}
              />
            ))} */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
