'use client';
import {motion} from 'framer-motion'
import { staggerContainer } from '../utils/motion';
import {insights} from '../constants'
import styles from '../styles';
import {InsightCard, TitleText, TypingText} from '../components'
const Insights = () => (
  <section>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    animate="show"
    viewport={{once:false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col items-center `}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={'Insight about metaverse'} textStyles="text-center" />
      <div className='flex flex-col mt-[50px] gap-[30px]'>
        {insights.map((item, index)=>(
          <InsightCard key={`insight-${index}`} {...item} index={index+1}/>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
