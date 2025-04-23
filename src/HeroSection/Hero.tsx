// Hero.tsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className=" py-60 px-6 md:px-30 flex flex-col md:flex-row items-center justify-between">
      <div className="">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-bold text-blue-200 mb-4 text-7xl"
        >
          Organize Your Day with Ease ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-blue-300 mb-6 ml-5"
        >
          Boost your productivity and never miss a task. Manage your to-dos effortlessly, all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex space-x-4 ml-5"
        >
          <button
  onClick={() => {
    const el = document.getElementById("task-preview");
    el?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
>
  Get Started
</button>

          <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition">
            See How It Works
          </button>
        </motion.div>
      </div>
    </section>
  );
}
