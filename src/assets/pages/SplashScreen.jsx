import React from "react";
import { motion } from "motion/react";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        {/* Name Animation */}
        <motion.h1
          initial={{ y: 20, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="text-3xl font-semibold text-white tracking-widest"
        >
          Ritesh Mishra
        </motion.h1>

        {/* Loader Line */}
        <motion.div className="h-0.5 w-24 bg-white/30 overflow-hidden">
          <motion.div
            className="h-full w-1/2 bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
