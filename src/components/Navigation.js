import React from "react"
import { motion } from "framer-motion"
import MenuItem from "./MenuItem"
import { useStaticQuery, graphql } from "gatsby"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const Navigation = ({ wpMenuLinks }) => {
  return (
    <motion.ul variants={variants}>
      {wpMenuLinks.map(wpMenuLink => {
        return (
          wpMenuLink.parentId === null && (
            <MenuItem key={wpMenuLink.id} wpMenuLink={wpMenuLink} />
          )
        )
      })}
    </motion.ul>
  )
}

export default Navigation
