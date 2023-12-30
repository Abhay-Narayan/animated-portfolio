import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './skills.scss'

const Skilldataprovider = ({src, width, height, index}) => {
    const {ref,inView} = useInView()
    const ImageVariants={
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    const animationDelay=0.35;
  return (
    <motion.div ref={ref} 
    variants={ImageVariants}
    animate={inView?"visible":"hidden"}
    custom={index}
    transition={{delay:animationDelay*index}}
    >
     <img className='imgs' src={src} width={width} height={height} alt='skills image' />
    </motion.div>
  )
}

export default Skilldataprovider