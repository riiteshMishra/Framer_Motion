import { motion, AnimatePresence, scale } from "motion/react";
import { useState } from "react";

const BoxNine = () => {
  const [show, setShow] = useState(true);
  return (
    <motion.div
      initial={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div className="flex items-center flex-col gap-y-10">
        <AnimatePresence>
          {/* box */}
          {show && (
            <motion.div
              key={"box1"}
              initial={{
                height: 100,
                width: 100,
                y: 100,
                borderRadius: 20,
                opacity: 0,
                scale: 0,
                backgroundColor: "#fff",
              }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: "anticipate",
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              exit={{ opacity: 0, scale: 0, y: -100 }}
            ></motion.div>
          )}
          {/* button */}
        </AnimatePresence>{" "}
        <button
          key={show} // 👈 THIS IS THE FIX
          className={`bg-amber-600 py-1 cursor-pointer rounded px-4 ${
            show ? "text-red-600" : "text-green-500"
          }`}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "hide" : "show"}
        </button>
      </div>
    </motion.div>
  );
};

export default BoxNine;
