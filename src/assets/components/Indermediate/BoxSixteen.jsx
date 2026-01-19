import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const LayoutIdExample = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="p-10">
      <div className="flex gap-4">
        {[1, 2, 3].map((id) => (
          <motion.div
            key={id}
            layoutId={`card-${id}`}
            layout
            onClick={() => handleSelected(id)}
            className="w-20 h-20 bg-blue-500 rounded-lg cursor-pointer"
          >
            {id}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            layoutId={`card-${selected}`}
            layout
            className="fixed inset-0 m-auto w-80 h-80 bg-blue-500 rounded-2xl"
            onClick={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LayoutIdExample;
