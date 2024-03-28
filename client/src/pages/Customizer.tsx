import CustomButton from "../components/reusableUi/CustomButton";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { slideAnimation, fadeAnimation } from "../animations/motion";
import { useContext } from "react";
import MainContext from "../contexts/mainContext";

type Props = {};

export default function Customizer({}: Props) {
  const { intro, setIntro } = useContext(MainContext);

  const EditTabs = [
    {
      id: "1",
      name: "Color",
      icon: "",
      component: "",
    },
    {
      id: "2",
      name: "file",
      icon: "",
      component: "",
    },
    {
      id: "3",
      name: "ai",
      icon: "",
      component: "",
    },
  ];

  const filterTabs = [
    {
      id: "1",
      name: "normal",
      icon: "",
      component: "",
    },
    { id: "2", name: "custom", icon: "", component: "" },
    { id: "3", name: "download", icon: "", component: "" },
  ];

  return (
    <AnimatePresence>
      {!intro && (
        <>
          <motion.div
            className="absolute z-10 top-0 left-2"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen bg-slate-700 ">
              <div className="editor-tab">
                {EditTabs.map((tab) => (
                  <div key={tab.id} className="tab">
                    <p>{tab.name}</p>
                  </div>
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
            className="absolute z-10 bottom-2 right-0 left-0 w-full flex justify-center items-center  gap-4 bg-slate-300"
            {...slideAnimation("up")}
          >
            {filterTabs.map((tab) => (
              <div key={tab.id} className="tab">
                <p>{tab.name}</p>
              </div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
