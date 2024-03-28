import CustomButton from "../components/reusableUi/CustomButton";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  slideAnimation,
  fadeAnimation,
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
        <motion.div className="" {...slideAnimation("left")}>
          <motion.div className="" {...headContainerAnimation}>
            <motion.div className="" {...headTextAnimation}>
              <h1>Let's create</h1>
            </motion.div>
            <motion.div className="" {...headContentAnimation}>
              <p>
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
