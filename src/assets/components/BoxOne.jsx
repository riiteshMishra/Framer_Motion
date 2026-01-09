import React from "react";
import { motion } from "motion/react";

const BoxOne = ({ text }) => {
  return (
    <div className="h-full w-full space-y-2">
      {/* Box 1 */}
      <motion.div
        className="h-20 w-20 rounded-xl"
        initial={{ x: 0, rotate: 0, backgroundColor: "#78350f" }} 
        animate={{
          x: [0, 290, 0],
          rotate: 360,
          backgroundColor: ["#78350f", "#3b82f6", "#22c55e"], 
        }}
        transition={{ duration: 2, ease: "anticipate", repeat: Infinity }}
      ></motion.div>

      {/* Box 2 */}
      <motion.div
        className="h-20 w-20 rounded-xl"
        initial={{ x: 0, rotate: 0, backgroundColor: "#3b82f6" }} 
        animate={{
          x: 290,
          rotate: 360,
          backgroundColor: ["#3b82f6", "#a855f7", "#ef4444"], 
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "backInOut" }}
      ></motion.div>

      {/* Box 3 */}
      <motion.div
        className="h-20 w-20 rounded-xl"
        initial={{ x: 0, backgroundColor: "#22c55e" }} 
        animate={{
          x: [0, 290, 0],
          scale: [1, 0.6, 1],
          backgroundColor: ["#22c55e", "#f59e0b", "#22c55e"], 
        }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Box 4 */}
      <motion.div
        className="h-20 w-20 rounded-xl"
        initial={{ x: 0, backgroundColor: "#ef4444" }} 
        animate={{
          x: [0, 290, 0],
          scale: [1, 0.7, 1],
          rotate: [0, 360, 360, 0],
          backgroundColor: ["#ef4444", "#0ea5e9", "#ef4444"],
        }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
      ></motion.div>
    </div>
  );
};

export default BoxOne;
