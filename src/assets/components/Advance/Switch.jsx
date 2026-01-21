import { motion } from "framer-motion";

const Switch = ({ active, setActive }) => {
  const tabs = ["Beginner", "Advance"];

  return (
    <div className="max-w-xl mx-auto">
      <div className="relative w-fit mx-auto bg-slate-900 p-1 rounded-full">
        <div className="flex relative">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative z-10 px-6 py-2 text-sm font-medium rounded-full   cursor-pointer
                ${active === tab ? "text-black" : "text-white/70"}`}
            >
              {tab}

              {/*  Sliding indicator */}
              {active === tab && (
                <motion.span
                  layoutId="active-pill"
                  className=" absolute inset-0 bg-gray-400 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Switch;
