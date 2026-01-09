import React from "react";
import { details } from "../data/nav-links";
import { motion } from "motion/react";

const LeftBox = ({ setActiveBox, activeBox }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="max-w-100 w-11/12 max-h-125 bg-[#ffffff38] p-4 rounded flex flex-col gap-y-4 overflow-auto"
    >
      {details.map((detail) => (
        <motion.div
          key={detail.id}
          whileHover={activeBox === detail.id ? {} : { scale: 1.04 }}
          whileTap={{ scale: 0.92 }}
          onTap={() => setActiveBox(detail.id)}
          transition={{ type: "spring", stiffness: 200, damping: 5 }}
          className={`px-4 py-2 rounded cursor-pointer select-none text-sm
            ${
              activeBox === detail.id
                ? "bg-gray-950 text-white"
                : "bg-gray-800 text-gray-200"
            }`}
        >
          {detail.text}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <span
              className=" capitalize text-xs bg-black rounded-2xl leading-3 px-2 py-0.5"
              style={
                detail.id <= 10
                  ? { color: "green" }
                  : detail.id > 20
                  ? { color: "red" }
                  : { color: "yellow" }
              }
            >
              {detail.id <= 10
                ? "beginner"
                : detail.id >= 20
                ? "advance"
                : "intermediate"}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LeftBox;
