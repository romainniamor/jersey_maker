import CustomButton from "../components/reusableUi/CustomButton";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  slideAnimation,
  headTextAnimation,
  headContentAnimation,
  headContainerAnimation,
} from "../animations/motion";

import { useContext } from "react";
import MainContext from "../contexts/mainContext";

type Props = {};

function Home({}: Props) {
  const { intro, setIntro } = useContext(MainContext);
  return (
    <AnimatePresence>
      {intro && (
        <motion.div
          className="h-full w-full bg-slate-600 p-5"
          {...slideAnimation("left")}
        >
          <motion.div className="" {...headContainerAnimation}>
            <motion.div className="" {...headTextAnimation}>
              <h1 className="text-8xl mb-9 ">Let's create</h1>
            </motion.div>
            <motion.div className="" {...headContentAnimation}>
              <p className="text-gray-800 min-w-2/5 max-w-lg mb-4">
                Fan of Captain Tsubasa!? Create your own shirt style for your
                favorite team. <strong>Unleash your imagination</strong> and
                define your own style.
              </p>

              <CustomButton
                label="Get Started"
                onClick={() => setIntro(false)}
                color={"bg-gradient-to-r from-sky-400 to-pink-400"}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Home;
