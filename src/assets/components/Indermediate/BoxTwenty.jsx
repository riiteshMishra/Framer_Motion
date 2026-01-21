import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const BoxTwenty = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full bg-cyan-800 relative flex flex-col items-center justify-center">
      <h1 className="text-white mb-6">
        Single file modal with AnimatePresence
      </h1>

      {/* Open Modal Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="bg-black px-4 py-2 rounded cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0" onClick={() => setOpen(false)} />

            {/* Modal Box */}
            <motion.div
              className="relative border p-6 rounded-xl w-80 z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
            >
              <h2 className="text-xl font-bold mb-2">Lorem</h2>
              <p className="mb-4">Ipsum dolor sit amet</p>

              <div className="flex justify-end gap-2">
                <button
                  className="bg-gray-600 px-3 py-1 rounded cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-cyan-600 text-white px-3 cursor-pointer py-1 rounded"
                  onClick={() => setOpen(false)}
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoxTwenty;
