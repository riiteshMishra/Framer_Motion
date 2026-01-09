import { motion } from "motion/react";

const BoxEleven = () => {
  return (
    <div className="w-full h-full overflow-auto px-4 space-y-6">
      <div>
        {/* Box 1 */}
        <motion.div
          className="w-full h-80 rounded-xl bg-red-800 my-4"
          initial={{ opacity: 0, y: 50, scale: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            border: "1px dashed black",
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
          // viewport={{ once: true }}
        />

        {/* Box 2 */}
        <motion.div
          className="w-full h-72 rounded-xl bg-pink-500 my-4"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
        />

        {/* Box 3 */}
        <motion.div
          className="w-full h-72 rounded-xl bg-blue-500 my-4"
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          // viewport={{ once: true }}
        />

        {/* Box 4 */}
        <motion.div
          className="w-full h-72 rounded-xl bg-yellow-500 my-4"
          initial={{ rotate: -8, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          // whileDrag={{x:50}}
          // viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default BoxEleven;
