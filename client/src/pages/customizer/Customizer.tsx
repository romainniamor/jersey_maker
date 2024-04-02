import CustomButton from "../../components/reusableUi/CustomButton";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { slideAnimation, fadeAnimation } from "../../animations/motion";
import { useContext } from "react";
import MainContext from "../../contexts/mainContext";
import Toast from "../../components/reusableUi/Toast";
import "react-toastify/dist/ReactToastify.css";

import Tab from "../../components/reusableUi/Tab";
import { getEditTabsConfig } from "../../config/getEditTabsConfig";

import EditPanel from "./EditPanel";

export default function Customizer() {
  const { intro, setIntro, currentTabSelected, setCurrentTabSelected } =
    useContext(MainContext);

  //comportements
  const returnToHome = async () => {
    await setCurrentTabSelected("");
    setIntro(true);
  };

  const selectTab = (tabselected: string) => {
    if (tabselected === currentTabSelected) return setCurrentTabSelected("");
    setCurrentTabSelected(tabselected);
  };
  console.log("currentTabSelected", currentTabSelected);

  const editTabs = getEditTabsConfig(currentTabSelected);
  return (
    <AnimatePresence>
      {!intro && (
        <>
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
                {currentTabSelected && <EditPanel />}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              label="Go Back"
              onClick={returnToHome}
              color={"bg-gradient-to-l from-slate-100 to-slate-300"}
            />
          </motion.div>

          <motion.div
            className="absolute z-10 bottom-2 right-0 left-0 w-full flex justify-center items-center  gap-4 "
            {...slideAnimation("up")}
          ></motion.div>
        </>
      )}
      <Toast />
    </AnimatePresence>
  );
}
