import { motion } from "motion/react";

const BoxEight = () => {
  return (
    <motion.div
      initial={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <motion.div
        initial={{
          height: 100,
          width: 100,
          borderRadius: 20,
          y: 100,
          opacity: 0,
          scale: 0,
          backgroundColor: "#fff",
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1, type: "spring", stiffness: 200, damping: 5 }}
        whileHover={{ cursor: "pointer", scale: 1.2,border:"5px solid hotPink" }}
      ></motion.div>
    </motion.div>
  );
};

export default BoxEight;
