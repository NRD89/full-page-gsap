import React from 'react'
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize"
import Navigation from "./Navigation"
import MenuToggle from "./MenuToggle"


const FullPageNav = ({ wpMenuLinks }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const height = useWindowSize()

  const sidebar = {
    open: (height) => ({
      clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        // restDelta: 2,
        damping: 10
      }
    }),
    closed: {
      clipPath: "circle(0px at 100% 0px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      id="nav"
    >
      <motion.div className="background" custom={height} variants={sidebar} />
      <Navigation wpMenuLinks={wpMenuLinks} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}


export default FullPageNav