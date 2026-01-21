import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

const BoxNineteen = () => {
  const controls = useAnimation();
  const [pause, setPause] = useState(false);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, []);

  const toggleAnimation = () => {
    if (pause) {
      controls.start({
        rotate: 360,
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
    setPause(!pause);
  };

  return (
    <div className="h-full bg-lime-900">
      <h1 className="text-xl capitalize text-center py-5">
        Pause and resume animation using animation controls
      </h1>

      <motion.div
        className="w-32 h-32 bg-linear-30 from-cyan-400 via-emerald-400 to-pink-400 rounded-xl mx-auto"
        animate={controls}
      />

      <motion.button
        className="bg-gray-800 py-2 px-4 rounded-lg w-24 mx-auto my-10 block capitalize"
        onClick={toggleAnimation}
      >
        {pause ? "resume" : "pause"}
      </motion.button>
    </div>
  );
};

export default BoxNineteen;
