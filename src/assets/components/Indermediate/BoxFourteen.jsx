import { motion, AnimatePresence } from "motion/react";

const BoxFourteen = () => {
  return (
    <div className="bg-black h-full flex items-center justify-center flex-col gap-y-5">
      <motion.div
        title="while-hover"
        initial={{ height: 100, width: 100, backgroundColor: "#5d5e59" }}
        whileHover={{
          scale: 0.8,
          borderRadius: 20,
          cursor: "pointer",
          rotate: 45,
          backgroundColor: "#84a31d",
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 5,
        }}
      />
      <motion.div
        title="while-tap"
        initial={{
          height: 100,
          width: 100,
          backgroundColor: "#5d5e59",
          borderRadius: 20,
          cursor:"pointer"
        }}
        whileTap={{ scale: 0.8, rotate: 280, borderRadius: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 5,
        }}
      //   viewport={{once:true}}
      />
    </div>
  );
};

export default BoxFourteen;
