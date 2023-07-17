'use client';
import styles from "../styles";
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn } from "../utils/motion";
const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div 
     variants={staggerContainer}
     initial="hidden"
     animate="show"
     viewport={{ once: false, amount: 0.25 }}
     className={`${styles.innerWidth}  mx-auto flex lg:flex-row flex-col gap-6`}>
      <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[3px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div className="mb-[30px]">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Samantha
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Founder Metaverus
            </p>
          </div>
            <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white mb-[20px]">
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 'tween', 0.2, 1)}
          viewport={{once:false, amount:0.25}}
          className='flex items-center justify-center flex-1 '>
           <img src="/planet-09.png" alt="planet-09" className="object-cover rounded-[40px]
           w-full lg:h-[610px] h-auto min-h-[210px] "/> 
        </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
