import { motion } from "motion/react";

const BoxSix = () => {
  return (
    <motion.div
      initial={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{      
          height: 100,
          width: 100,
          opacity: 0,
          scale: 0,
          borderRadius: 20,
          backgroundColor: "#fdac",
          rotate:0,
          y:100
        }}
        animate={{ y:0,scale: 1, opacity: 1,rotate:360 }}
        transition={{
          duration: 1,
          delay: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 5,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default BoxSix;
