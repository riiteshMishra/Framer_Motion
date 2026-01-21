import { motion } from "motion/react";
import { useEffect, useState } from "react";

const BoxEighteen = () => {
  const bgColor = [
    "#0f172a", // midnight navy
    "#111827", // rich charcoal
    "#1f2937", // graphite gray
    "#312e81", // deep indigo
    "#3f3cbb", // royal violet
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgColor.length);
    }, 1000); // 1 second per color

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-linear-60 from-red-500 to-cyan-500">
      <motion.h1
        className="text-2xl capitalize text-center"
        style={{ color: "black", fontWeight: "600" }}
      >
        motion learning box 18
      </motion.h1>

      <motion.div
        initial={{
          height: "200px",
          width: "200px",
          backgroundColor: bgColor[0],
          margin: "3rem auto",
          borderRadius: "8px",
        }}
        animate={{
          backgroundColor: bgColor[index],
          borderRadius: ["50px", "0px", "50px", "80px", "100px"],
        }}
        transition={{
          duration: 0.8,
          ease: "linear",
          repeat:Infinity
        }}
      />
    </div>
  );
};

export default BoxEighteen;
