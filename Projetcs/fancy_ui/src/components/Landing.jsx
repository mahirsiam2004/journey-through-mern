import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Landing = () => {
  return (
    <div className="w-full min-h-screen bg-white text-zinc-900 pt-1">
      {/* HERO */}
      <div className="textstructure mt-28 md:mt-40 px-6 md:px-20">
        {/* First Line */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="masker"
        >
          <h1 className='uppercase text-[9vw] md:text-[7.5vw] leading-[8vw] md:leading-[6vw] font-["Test_Founders_Grotesk_X-Condensed"]'>
            From designs to interactive UIs, I bring ideas to life with code.
          </h1>
        </motion.div>

        {/* Second Line */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease: "easeOut" }}
          className="masker mt-1"
        >
          <div className="w-fit flex items-center">
            <div className="w-[8vw] md:w-[7.5vw] h-[5vw] relative top-1 bg-red-500 mr-[1vw] rounded-md" />
            <h1 className='uppercase text-[9vw] md:text-[7.5vw] leading-[8vw] md:leading-[6vw] font-["Test_Founders_Grotesk_X-Condensed"]'>
              Eye opening
            </h1>
          </div>
        </motion.div>

        {/* Third Line */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9, ease: "easeOut" }}
          className="masker"
        >
          <h1 className='uppercase text-[9vw] md:text-[7.5vw] leading-[8vw] md:leading-[6vw] font-["Test_Founders_Grotesk_X-Condensed"]'>
            Presentations
          </h1>
        </motion.div>
      </div>

      {/* SPLIT FOOTER (TAGLINES + CTA) */}
      <div className="border-t border-zinc-200 mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 px-6 md:px-20">
        {["For Public and Private Companies", "From the first Pitch to IPO"].map(
          (item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 + index * 0.15, duration: 0.8 }}
              className="text-sm md:text-base font-light text-zinc-600 tracking-tight leading-none"
            >
              {item}
            </motion.p>
          )
        )}

        <motion.div
          className="start flex items-center gap-4 md:gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          {/* CTA Button */}
          <motion.button
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 border-2 border-zinc-900 rounded-full font-medium text-sm text-zinc-900 cursor-pointer capitalize bg-white"
          >
            Start The Project
          </motion.button>

          {/* Arrow Icon */}
          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 border-2 border-zinc-900 rounded-full flex items-center justify-center"
          >
            <span className="rotate-[45deg]">
              <FaArrowUpLong className="text-zinc-900" />
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM INFO (NEW) */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 md:px-20 pb-20 md:pb-28"
      >
        {/* Three info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6">
          {/* Services */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-zinc-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Services
            </div>
            <h3 className="text-xl md:text-2xl mt-2 font-semibold">
              Design → Code, end-to-end
            </h3>
            <ul className="mt-4 space-y-2 text-zinc-700">
              <li>Product UI & rapid prototyping</li>
              <li>Design systems & theming</li>
              <li>High-performance frontend (React/Next)</li>
              <li>Motion & micro-interactions</li>
            </ul>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-zinc-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Capabilities
            </div>
            <h3 className="text-xl md:text-2xl mt-2 font-semibold">
              Built for speed & scale
            </h3>
            <ul className="mt-4 space-y-2 text-zinc-700">
              <li>Type-safe stacks (TS) & clean architecture</li>
              <li>Animations with Framer Motion</li>
              <li>Tailwind UI kits & accessibility</li>
              <li>Vite/Next tooling & CI-ready</li>
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-zinc-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Outcomes
            </div>
            <h3 className="text-xl md:text-2xl mt-2 font-semibold">
              Measurable impact
            </h3>
            <ul className="mt-4 space-y-2 text-zinc-700">
              <li>▲ 30–60% faster delivery cycles</li>
              <li>▲ Improved Lighthouse & Core Web Vitals</li>
              <li>▲ Higher conversions via motion & clarity</li>
              <li>▲ Dev-friendly design systems</li>
            </ul>
          </motion.div>
        </div>

        {/* Quick stats row */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8"
        >
          {[
            { k: "Projects", v: "120+" },
            { k: "Sectors", v: "8" },
            { k: "Avg. timeline", v: "4–6 wks" },
            { k: "Stack", v: "React • TS • Vite" },
          ].map((stat, i) => (
            <motion.div
              key={stat.k}
              variants={item}
              className="rounded-xl border border-zinc-200 p-4 flex flex-col"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-500">
                {stat.k}
              </span>
              <span className="text-2xl md:text-3xl font-semibold mt-1">
                {stat.v}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <p className="text-zinc-600 max-w-2xl">
            Need a launch-ready interface, crafted with care and performance?
            I turn Figma files into robust, animated, accessible products.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-zinc-900 text-white border border-zinc-900"
          >
            Let’s talk
            <FaArrowUpLong className="-rotate-45" />
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Landing;
