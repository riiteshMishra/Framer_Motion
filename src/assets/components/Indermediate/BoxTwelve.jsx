import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
const BoxTwelve = () => {
  const [exit, setExit] = useState(false);

  const onExit = () => console.log("exit ho gya ");
  return (
    <div className="bg-cyan-400/30 h-full  items-center justify-center">
      <div className="h-1/2 w-full bg-amber-300/30 flex items-center justify-center">
        <AnimatePresence onExitComplete={() => onExit()}>
          {!exit && (
            <motion.div
              className="h-40 w-40 border border-cyan-400"
              initial={{
                backgroundColor: "#facd",
                color: "#ddd",
                borderRadius: 20,
                y: 100,
                scale: 0,
                opacity: 0.5,
              }}
              animate={{
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 5,
              }}
              exit={{ y: -100, scale: 0, opacity: 0.5 }}
              onAnimationStart={() => {
                console.log("ENTER animation started");
              }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="h-1/2 w-full bg-cyan-400/30 flex justify-center items-center">
        <motion.button
          onClick={() => setExit((prev) => !prev)}
          className="bg-amber-800 rounded-lg py-2 px-8 cursor-pointer"
          initial={{}}
          animate={{ duration: 0.1 }}
          whileHover={{
            rotate: 10,
            boxShadow: "5px 5px 10px black",
            outlineColor: "white",
            outlineStyle: "double",
          }}
        >
          {exit ? "enter" : "exit"}
        </motion.button>
      </div>
    </div>
  );
};

export default BoxTwelve;
