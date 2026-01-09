import { motion } from "motion/react";

const BoxSeven = () => {
  return (
    <motion.div
      initial={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <motion.div
        initial={{
          x: 290,
          scale: 0,
          //     opacity: 0,
          height: 100,
          width: 100,
          borderRadius: 20,
          backgroundColor: "#fff",
        }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.3,
          ease: "anticipate",
          stiffness: 200,
          damping: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        whileHover={{ backgroundColor: "red", borderRadius:"50%" ,cursor:"pointer" }}
      ></motion.div>
    </motion.div>
  );
};

export default BoxSeven;
