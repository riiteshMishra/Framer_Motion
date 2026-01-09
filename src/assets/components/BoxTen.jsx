import { motion } from "motion/react";

const BoxTen = () => {
  return (
    <div className="flex  justify-center  h-full">
      <motion.div
        className="h-20 w-20 bg-amber-50 rounded-full"
        initial={{ y: 0, scale: 1 }}
        animate={{ y: [0, 298] }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </div>
  );
};

export default BoxTen;
