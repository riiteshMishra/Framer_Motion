import { motion } from "motion/react";
import { useRef } from "react";

const BoxFifteen = () => {
  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      className="bg-cyan-700 h-full flex items-center justify-center"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        initial={{
          height: 100,
          width: 100,
          backgroundColor: "#cde800",
          borderRadius: 20,
          cursor: "grab",
        }}
        //   dragDirectionLock
        whileDrag={{ cursor: "grabbing", scale: 0.7 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
      />
    </div>
  );
};

export default BoxFifteen;
