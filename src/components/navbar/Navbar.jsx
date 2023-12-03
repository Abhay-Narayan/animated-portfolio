import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
        <motion.span
          initial={{y:-250, opacity: 0, scale: 1 }}
          animate={{y:0, opacity: 1, scale: 1 }}
          transition={{type:"spring", duration: 2 }}
        >
          Abhay
        </motion.span>
          <motion.div 
          initial={{y:-250, opacity: 1, scale: 1 }} 
          animate={{y:0, opacity: 1, scale: 1 }}
          transition={{ type:"spring",duration: 2 }}
          className="social">
            <a href='#'><img src="/instagram.png" alt="" /></a>
            <a href='#'><img src="/facebook.png" alt="" /></a>
            <a href='#'><img src="/linkedin.png" alt="" /></a>
            <a href='#'><img src="/github.png" alt="" /></a>
          </motion.div>
        </div>
    </div>
  )
}

export default Navbar