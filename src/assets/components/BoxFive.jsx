import { motion, AnimatePresence } from "motion/react";
const BoxFive = () => {
  return (
    <div className="h-full flex items-center justify-center ">
      <motion.div
        initial={{
          height: 70,
          width: 70,
          backgroundColor: "#fda",
          borderRadius: 20,
          translateY: "-210%",
        }}
        animate={{
          translateY: "200%",
        }}
        transition={{ duration: 2, repeat: Infinity,repeatType:"reverse" }}
      ></motion.div>
    </div>
  );
};

export default BoxFive;
