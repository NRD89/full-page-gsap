import React from "react"
import { motion } from "framer-motion"

const variants = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    pointerEvents: `auto`,
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    pointerEvents: `none`,
  },
}

const MenuItem = ({ wpMenuLink }) => {
  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.95 }}
    >
      <a href={wpMenuLink.url}>{wpMenuLink.label}</a>
    </motion.li>
  )
}

export default MenuItem
