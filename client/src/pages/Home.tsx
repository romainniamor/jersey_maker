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

function Home() {
  const { intro, setIntro } = useContext(MainContext);
  return (
    <AnimatePresence>
      {intro && (
        <motion.div
          className="w-fit xl:h-full flex xl:justify-between justify-start items-start flex-col xl:py-8 xl:px-36 sm:p-8 p-6 max-xl:gap-7 absolute z-10"
          {...slideAnimation("left")}
        >
          <motion.div className="" {...headContainerAnimation}>
            <motion.div className="" {...headTextAnimation}>
              <h1 className="text-9xl mb-9 ">Let's create!</h1>
            </motion.div>
            <motion.div className="" {...headContentAnimation}>
              <p className="text-gray-800 min-w-2/5 max-w-lg mb-6 text-xl">
                Make your own style for your favorite soccer team. <br /> Add
                logo, brand and texture. Use IA and{" "}
                <strong className="text-yellow-400">
                  Unleash your imagination.
                </strong>
              </p>

              <CustomButton
                label="Get Started"
                onClick={() => setIntro(false)}
                color={"bg-gradient-to-r from-yellow-100 to-yellow-400"}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Home;
