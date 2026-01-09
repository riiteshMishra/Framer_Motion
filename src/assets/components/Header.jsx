import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header className="px-4 overflow-hidden text-center py-4">
      <div>
        <motion.p
          className="text-white text-sm"
          initial={{ x: 1000, opacity: 0, fontSize: "1.5rem" }}
          animate={{
            x: 0,
            opacity: 1,
            color: "#fff",
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            ease: "anticipate",
          }}
        >
          Learning Framer Motion by myself with guidance from Sheryians Coding
          School
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
