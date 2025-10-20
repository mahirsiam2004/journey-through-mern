import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full p-8 md:p-16 lg:p-20 bg-[#CDEA68] rounded-tr-3xl text-black">
      <motion.h1
        className='font-["Neue_Montreal"] text-[8vw] md:text-[5vw] leading-[1.05] md:leading-[0.9] tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </motion.h1>

      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 pt-8 md:pt-10 border-t-2 mt-10 md:mt-16 border-[#738146]">
        {/* LEFT SIDE */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium">
            Our Approach
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-800 max-w-prose">
            Strategy first, aesthetics always. We align stakeholders, translate
            complex ideas into clear narratives, and prototype fast to validate
            impact before you scale.
          </p>

          <ul className="mt-6 space-y-3 text-base md:text-lg text-zinc-900">
            <li className="flex items-start gap-3">
              <span className="mt-2 block h-2 w-2 rounded-full bg-zinc-900" />
              Narrative architecture and story frameworks that convert.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 block h-2 w-2 rounded-full bg-zinc-900" />
              Modular design systems for speed, consistency, and scale.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 block h-2 w-2 rounded-full bg-zinc-900" />
              Usability-led prototypes to de-risk launches.
            </li>
          </ul>

          <motion.button
            className="px-8 md:px-10 uppercase tracking-wide flex gap-4 items-center mt-8 md:mt-10 py-4 md:py-6 bg-zinc-900 rounded-full text-white"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            Read More
            <span className="w-2 h-2 bg-zinc-100 rounded-full" />
          </motion.button>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm md:text-base text-zinc-800">
            <div>
              <div className="font-semibold text-zinc-950">Avg. timeline</div>
              <div>4–6 weeks</div>
            </div>
            <div>
              <div className="font-semibold text-zinc-950">Deliverables</div>
              <div>Deck + brand kit + prototype</div>
            </div>
            <div>
              <div className="font-semibold text-zinc-950">Team</div>
              <div>Strategy, Design, Motion, Dev</div>
            </div>
            <div>
              <div className="font-semibold text-zinc-950">Industries</div>
              <div>SaaS, FinTech, Health, AI</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.div
          className="md:w-1/2 w-full h-[48vh] md:h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <img
            src="https://alex-labs.com/_astro/what-is-filevault-disk-encryption.CAHNmncW.jpg"
            alt="Presentation and brand strategy visual"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
