'use client';
import {motion} from 'framer-motion'
import styles from '../styles';
import { staggerContainer, planetVariants,fadeIn } from '../utils/motion';

import { MotionConfig } from "framer-motion";
import { TitleText, TypingText } from '../components/CustomTexts';
import { newFeatures } from '../constants';
import NewFeatures from '../components/NewFeatures';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} flex flex-col lg:flex-row gap-8 mx-auto`}>
        <motion.div
          variants={planetVariants('right')}
          className='flex items-center justify-center flex-1'>
          <img src="/whats-new.webp" alt="what's-new" className='w-[90%] h-[90%] object-contain'/>
        </motion.div>
      <motion.div 
          variants={fadeIn('right', 'tween', 1.2, 1)}
          className='flex flex-col  gap-[8px] mt-[30px] flex-[0.75] px-[20px]'>
          <TypingText title="| What's new"/>
          <TitleText title={<>What's new about Metaversus?</>}/>
          <div className='flex flex-col lg:flex-row gap-[14px]'>
            {newFeatures.map((feature)=>{
              return(
                  <NewFeatures {...feature} key={feature.title}/>
              )
            })}
          </div>
      </motion.div>
      
   
    </motion.div>
  </section>
);

export default WhatsNew;
