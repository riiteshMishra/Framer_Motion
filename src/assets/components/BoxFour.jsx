import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const BoxFour = () => {
  const [show, setShow] = useState(true);

  return (
    <motion.div className="h-full w-full flex flex-col items-center justify-center gap-4">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 20, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -20, scale: 0.5, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "backOut",
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="h-20 w-20 bg-cyan-200 rounded-lg"
          />
        )}
      </AnimatePresence>

      {/* toggle button */}
      <motion.div
        onClick={() => setShow((prev) => !prev)}
        className="px-3 py-1 bg-black text-white rounded cursor-pointer"
      >
      {
        !show ? "show":"hide"
      }
      </motion.div>
    </motion.div>
  );
};

export default BoxFour;
