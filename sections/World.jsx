'use client';
import {motion} from 'framer-motion'
import styles from '../styles';
import { TitleText, TypingText } from '../components/CustomTexts';
import {fadeIn, staggerContainer} from '../utils/motion'
const World = () => (
  <section className={`${styles.paddings} relative z-10`} >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className="flex flex-col 2xl:max-w-[1280px] w-full mx-auto">

      <TypingText title="| People on the world" textStyles="text-center"/>      

      <TitleText title="Track friends around you and invite them to play together in the same world" textStyles="text-center"/>

      <motion.div
      variants={fadeIn('right', 'tween', 0.3, 1)}
      className='relative mt-[68px] md:h-[550px] flex w-full h-[300px]'
      >
          <img src="/map.png" alt="map" className='object-contain w-full h-full md:object-cover'/>
          <div className='absolute h-[30px] w-[30px] bottom-[200px] right-[100px] md:h-[70px] md:w-[70px] md:bottom-[350px] md:right-[750px] rounded-full bg-[#5D6680]'>
            <img src="/people-03.png" alt="person-1" className='w-full h-full' />
          </div>
          <div className='absolute h-[30px] w-[30px] bottom-[100px] right-[50px] rounded-full md:h-[70px] md:w-[70px] md:bottom-[450px] md:right-[550px] bg-[#5D6680]'>
            <img src="/people-02.png" alt="person-1" className='w-full h-full' />
          </div>ff
      </motion.div>    

    </motion.div> 
  </section>
);

export default World;
