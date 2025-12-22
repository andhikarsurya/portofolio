import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-indigo-400">Sandy</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Frontend Developer • UI Designer • React Enthusiast
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {["About Me", "Projects", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/60 backdrop-blur rounded-2xl p-6 shadow-lg cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                {item}
              </h3>
              <p className="text-sm text-slate-400">
                Click to explore my {item.toLowerCase()} and see smooth UI animations.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-14"
        >
          <button className="px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/40">
            View My Work
          </button>
        </motion.div>
      </div>
    </div>
  );
}
