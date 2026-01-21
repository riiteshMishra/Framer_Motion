import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const BoxSeventeen = () => {
  const [loader, setLoader] = useState(false);
  return (
    <div className="h-full bg-amber-800/40">
      <motion.h1 className="text-xl text-center">
        Loader using keyframes
      </motion.h1>

      <motion.div
        className="h-60 w-60 flex items-center justify-center bg-amber-800 border mx-auto my-10 rounded-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        onAnimationComplete={() => setLoader(true)}
      >
        {loader && (
          <AnimatePresence>
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.7 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 5,
                stiffness: 100,
              }}
              exit={{ y: 50, opacity: 0, scale: 0.7 }}
            >
              <motion.div
                //   initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: [0, 360] }}
                transition={{
                  duration: 0.8,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="h-20 w-20 rounded-full border-l-4 border-t-4 pointer-events-none"
              >
                {/* <div className="w-20 h-20 border-t-2 border-b-2 border-l-2 bg-transparent rounded-full"></div> */}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
};

export default BoxSeventeen;
