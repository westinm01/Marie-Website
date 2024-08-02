import React from 'react'
import './Navbar.css'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className = "navbar">
        <div className = "personName retroFont">Marie Wolfel</div>
        <div className = "Buttons">
          <Link smooth spy to ="about">
            <motion.button whileHover={{y: -5}} whileTap = {{ scale: 0.9, duration: 0.1}} className = "button retroFont">About Me</motion.button>
          </Link>

          <Link smooth spy to ="work">
            <motion.button whileHover={{y: -5}} whileTap = {{ scale: 0.9, duration: 0.1}} className = "button retroFont">Work</motion.button>
          </Link>

          <Link smooth spy to ="projects">
            <motion.button whileHover={{y: -5}} whileTap = {{ scale: 0.9, duration: 0.1}} className = "button retroFont">Projects</motion.button>
          </Link>
          
          <Link smooth spy to ="contact">
            <motion.button whileHover={{y: -5}} whileTap = {{ scale: 0.9, duration: 0.1}} className = "button retroFont">Contact</motion.button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar
