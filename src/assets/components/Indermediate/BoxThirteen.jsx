import { motion } from "motion/react";
import brickSound from "../../sounds/brick.mp3";

const BoxThirteen = () => {
  const parentVariants = {
    hidden: { y: 30, scale: 1 },
    show: {
      y: 0,
      scale: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, rotate: [0, 10, 0] },
  };

  const playSound = () => {
    const audio = new Audio(brickSound);
    audio.currentTime = 1;
    audio.play();

    setTimeout(() => {
      audio.pause();
      audio.currentTime = 1;
    }, 1500); //  1.5 seconds
  };

  return (
    <div className="bg-black/30 h-full">
      <motion.h1 className="text-center text-2xl capitalize ">
        Stagger basics
      </motion.h1>
      <div className="flex items-center justify-center my-5">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="flex gap-y-1 flex-col"
        >
          {/* Children */}
          {[1, 2, 3, 4].map((elem, idx) => (
            <motion.div
              key={idx}
              variants={childVariants}
              onAnimationComplete={(definition) => {
                if (definition === "show") {
                  playSound();
                }
              }}
              className="h-20 w-30 bg-amber-300 rounded hover:rounded-2xl active:rounded-3xl transition-all cursor-pointer"
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BoxThirteen;
