'use client';

import { fadeIn } from "../utils/motion";
import {motion} from 'framer-motion'
const InsightCard = ({imgUrl, title, subtitle, index}) => (
  <motion.div
  variants={fadeIn('left','spring',index*0.5, 1)}
  className="flex flex-col md:flex-row gap-4 items-center justify-center"
  >
    <img src={imgUrl} alt={title} className='w-[270px] h-[250px] rounded-[32px] object-cover' />
    <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] text-center md:text-left p-4 md:p-[0px]">
          <h2 className="text-white leading-[32.24px] font-bold text-[24px] mb-[10px]" >{title}</h2>
          <p className="text-white leading-[32.24px]">{subtitle}</p>
    </div>
    
  </motion.div>
);

export default InsightCard;
