import React from 'react'
import './Navbar.css'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className = "navbar">
        <div className = "personName retroFont">Marie Wolfel</div>
        <div className = "Buttons">
            <motion.button whileHover={{y: -5}} whileTap = {{ scale: 0.9, duration: 0.1}} className = "button retroFont">About Me</motion.button>
            <motion.button whileHover={{y: -5}} whileTap = {{ scale: 0.9, duration: 0.1}} className = "button retroFont">Work</motion.button>
            <motion.button whileHover={{y: -5}} whileTap = {{ scale: 0.9, duration: 0.1}} className = "button retroFont">Projects</motion.button>
            <motion.button whileHover={{y: -5}} whileTap = {{ scale: 0.9, duration: 0.1}} className = "button retroFont">Contact</motion.button>
        </div>
    </div>
  )
}

export default Navbar
