import React from "react";
import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";
import BoxThree from "./BoxThree";
import { motion, AnimatePresence } from "motion/react";
import BoxFour from "./BoxFour";
import BoxFive from "./BoxFive";
import BoxSix from "./BoxSix";
import BoxSeven from "./BoxSeven";
import BoxEight from "./BoxEight";
import BoxNine from "./BoxNine";
import BoxTen from "./BoxTen";
import BoxEleven from "./Indermediate/BoxEleven";
import BoxTwelve from "./Indermediate/BoxTwelve";
import BoxThirteen from "./Indermediate/BoxThirteen";
import BoxFourteen from "./Indermediate/BoxFourteen";

const RightBox = ({ activeBox }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="max-w-100 w-11/12 bg-[#ffffff38] p-4 rounded flex flex-col gap-y-4"
    >
      <p className="py-4">Play ground</p>

      <div className="border h-95 py-5 rounded-lg overflow-hidden relative">
        <AnimatePresence mode="wait">
          {activeBox === 1 && (
            <motion.div
              key="box1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <BoxOne />
            </motion.div>
          )}

          {activeBox === 2 && (
            <motion.div
              key="box2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <BoxTwo />
            </motion.div>
          )}

          {activeBox === 3 && (
            <motion.div
              key="box3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <BoxThree />
            </motion.div>
          )}
          {activeBox === 4 && (
            <motion.div
              key="box4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <BoxFour />
            </motion.div>
          )}
          {activeBox === 5 && (
            <motion.div
              key={"box5"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {" "}
              <BoxFive />
            </motion.div>
          )}
          {activeBox === 6 && (
            <motion.div
              key={"box6"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <BoxSix />
            </motion.div>
          )}
          {activeBox === 7 && (
            <motion.div
              key={"box7"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <BoxSeven />
            </motion.div>
          )}
          {activeBox === 8 && (
            <motion.div
              key={"box8"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <BoxEight />
            </motion.div>
          )}

          {activeBox === 9 && (
            <motion.div
              key={"box9"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <BoxNine />
            </motion.div>
          )}
          {activeBox === 10 && (
            <motion.div
              key={"box10"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <BoxTen />
            </motion.div>
          )}
          {activeBox === 11 && (
            <motion.div
              key={"box11"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <BoxEleven />
            </motion.div>
          )}
          {activeBox === 12 && (
            <motion.div
              key={"box11"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <BoxTwelve />
            </motion.div>
          )}

          {activeBox === 13 && (
            <motion.div
              key={"box11"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <BoxThirteen />
            </motion.div>
          )}
          {activeBox === 14 && (
            <motion.div
              key={"box14"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <BoxFourteen />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RightBox;
