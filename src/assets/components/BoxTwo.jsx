import { motion } from "motion/react";

const BoxTwo = () => {
  return (
    <div className="h-full w-full space-y-2">
      <motion.div
        className="h-20 w-20 bg-red-500 rounded-xl"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: [0, 290, 0], opacity: [0.4, 1, 0.7] }}
        transition={{ duration: 2, delay: 1, ease: "backIn", repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="h-20 w-20 rounded-xl ml-10"
        initial={{ backgroundColor: "#3b82f6", opacity: 1 }}
        animate={{
          backgroundColor: ["#3b82f6", "#22c55e", "#a855f7"],
          opacity: [0.4, 1, 0.7],
        }}
        transition={{
          duration: 2,
          delay: 1.2,
          ease: "backIn",
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div
        className="h-20 w-20 bg-green-500 rounded-xl"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: [0, 290, 0], opacity: [0.4, 1, 0.7] }}
        transition={{
          duration: 2,
          delay: 1.4,
          ease: "backInOut",
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div
        className="h-20 w-20 bg-purple-500 rounded-xl"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: [0, 290, 0], opacity: [0.4, 1, 0.7] }}
        transition={{
          duration: 2,
          delay: 1.6,
          ease: "backInOut",
          repeat: Infinity,
        }}
      ></motion.div>
    </div>
  );
};

export default BoxTwo;
