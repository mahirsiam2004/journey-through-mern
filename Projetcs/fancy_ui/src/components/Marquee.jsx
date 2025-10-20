import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
    return (
       
        <div className='w-full py-10  bg-green-600'>
            <div className="text  border-zinc-300 flex gap-8 whitespace-nowrap overflow-hidden ">
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold uppercase'>Mahir On Fire </motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold uppercase'>Mahir On Fire </motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold uppercase'>Mahir On Fire </motion.h1>
            </div>
        </div>
    );
};

export default Marquee;