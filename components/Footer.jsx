'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} flex flex-col gap-8 mx-auto`}>
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between">
        <h2 className="text-white text-[64px] font-bold">Enter the Metaverse</h2>
        <button type="submit" className="flex items-center justify-center bg-[#25618B] gap-[12px] py-[10px] px-[15px] rounded-[40px] min-w-[50px] max-w-[250px]">
          <img src="/headset.svg" alt="headset" className="object-contain w-[24px] h-[24px]" />
          <span className="text-white text-[16px]">Enter the Metaverse</span>
        </button>
      </div>
      <div className="h-[2px] bg-white rounded-[5px] opacity-[10%]" />
      <div className="flex flex-col md:flex-row md:justify-between gap-[20px]">
        <h2 className="text-white font-bold text-[24px]">Metaversus</h2>
        <p className="text-white text-[14px] opacity-[80%]">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <img src={social.url} alt={social.name} key={social.name} className="w-[24px] h-[24px] object-contain" />
          ))}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
