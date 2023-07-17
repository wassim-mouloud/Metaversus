'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className={`${styles.xPaddings} py-8 relative flex justify-between gap-8 items-center`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={active === false ? 'transition-all translate-x-[-200%] absolute inset-0 h-[50vh] w-[100vw] z-[20] flex flex-col items-center justify-around bg-[#1A232E]' : 'translate-x-0 absolute inset-0 h-[50vh] w-[100vw] z-[99] flex flex-col items-center justify-around bg-[#1A232E] transition-all'}>
        <p className="text-white font-bold text-[16px] ">planet-1</p>
        <p className="text-white font-bold text-[16px] ">planet-2</p>
        <p className="text-white font-bold text-[16px] ">planet-3</p>
      </div>
      <div className="h-[24px] w-[24px] relative flex flex-col gap-[5px] cursor-pointer z-[99]" onClick={() => setActive(!active)}>
        <span className="bg-[white] h-[3px] w-[30%] rounded-[5px]" />
        <span className="bg-[white] h-[3px] w-[70%] rounded-[5px]" />
        <span className="bg-[white] h-[3px] w-full rounded-[5px] " />
      </div>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white cursor-pointer hover:brightness-150">Metaversus</h2>
      <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
    </motion.nav>
  );
};

export default Navbar;
