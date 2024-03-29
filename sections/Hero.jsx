'use client';
import {motion} from 'framer-motion'
import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(1.2)} className={styles.heroHeading} >
          Metaverse
        </motion.h1>
        <motion.div     
          variants={textVariant(1.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='flex flex-row items-center justify-center'>
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}/>
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.25, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]">
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.webp"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-5 relative -top-[50px]"
        />
        <a href="#explore">
          <div className='relative z-10 w-full ' >
            <img src="/stamp.png" alt="explore" className='object-contain w-[100px] sm:w-[155px] h-[100px] sm:h-[155px] absolute  md:bottom-[3px] md:left-[1000px] left-[220px] bottom-[10px]' />
          </div>
        </a>
    </motion.div>
  </motion.div>
  </section>
);

export default Hero;
