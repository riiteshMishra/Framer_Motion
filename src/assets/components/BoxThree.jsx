import { motion } from "motion/react";

const BoxThree = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ x: "100%", opacity: 1 }}
        animate={{ y: "200%", opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="h-30 w-30 bg-amber-400 absolute rounded-xl"
      />
    </div>
  );
};

export default BoxThree;
