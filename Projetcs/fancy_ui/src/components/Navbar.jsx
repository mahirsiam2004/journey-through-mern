import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Services", "Contact", "About Me", "Insights", "Work"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "0 0 0 rgba(0,0,0,0)",
      }}
      className={`fixed top-0 inset-x-0 z-[999] px-6 md:px-10 lg:px-20 py-4 md:py-5
                  text-zinc-900 backdrop-blur ${scrolled ? "border-b border-zinc-200" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className='font-["Neue_Montreal"] text-lg md:text-xl tracking-tight'
        >
          <span className="font-semibold">FANCY</span>_WEB
        </motion.a>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-8 lg:gap-10 font-['Neue_Montreal']"
        >
          {links.map((item, index) => (
            <motion.a
              variants={item}
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative text-sm lg:text-[15px] font-normal capitalize group 
                         ${index === 4 ? "ml-16" : ""}`}
            >
              {item}
              <span
                className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-zinc-900 
                           transition-all duration-300 group-hover:w-full"
              />
            </motion.a>
          ))}
          <motion.a
            variants={item}
            href="#contact"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-2 rounded-full border border-zinc-900 text-sm"
          >
            Let’s talk
          </motion.a>
        </motion.div>

        {/* Mobile button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center"
        >
          <motion.div
            initial={false}
            animate={open ? { rotate: 45 } : { rotate: 0 }}
            className="absolute w-5 h-[2px] bg-zinc-900"
          />
          <motion.div
            initial={false}
            animate={open ? { rotate: -45 } : { rotate: 0 }}
            className="absolute w-5 h-[2px] bg-zinc-900"
            style={{ transform: open ? "rotate(-45deg)" : "translateY(6px)" }}
          />
          <motion.div
            initial={false}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="absolute w-5 h-[2px] bg-zinc-900"
            style={{ transform: "translateY(-6px)" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 px-1"
          >
            <div className="rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur p-3">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="block w-full px-3 py-3 text-zinc-800 hover:bg-zinc-100 rounded-xl capitalize"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center px-3 py-3 rounded-xl bg-zinc-900 text-white"
              >
                Let’s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
