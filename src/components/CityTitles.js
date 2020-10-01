import React, { useEffect } from "react"
import { motion, AnimatePresence, usePresence } from "framer-motion"

const CityTitles = ({ currentTime }) => {
  // const [isPresent, safeToRemove] = usePresence()

  // useEffect(() => {
  //   !isPresent && setTimeout(safeToRemove, 1000)
  // }, [isPresent]);

  // const variant = isPresent ? { opacity: 1 } : { opacity: 0 }

  const variants = {
    visible: { opacity: 1, transition: { ease: "easeIn", duration: 1 } },
    hidden: { opacity: 0, transition: { ease: "easeOut", duration: 1 } },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {(currentTime >= 0) & (currentTime <= 8.5) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">
            Global <br /> <span>Wealth</span>
            <br />
            Partners
          </h2>
        </motion.div>
      )}
      {(currentTime >= 10) & (currentTime <= 13.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">Silicon Valley</h2>
        </motion.div>
      )}
      {(currentTime >= 15) & (currentTime <= 18.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">Beverly Hills</h2>
        </motion.div>
      )}
      {(currentTime >= 20) & (currentTime <= 23.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">Miami</h2>
        </motion.div>
      )}
      {(currentTime >= 24.7) & (currentTime <= 28.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">New York City</h2>
        </motion.div>
      )}
      {(currentTime >= 29.7) & (currentTime <= 33.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">London</h2>
        </motion.div>
      )}
      {(currentTime >= 34.7) & (currentTime <= 38.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">Amsterdam</h2>
        </motion.div>
      )}
      {(currentTime >= 39.7) & (currentTime <= 43.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          transition="transition"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">UAE</h2>
        </motion.div>
      )}
      {(currentTime >= 44.7) & (currentTime <= 47.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">Hong Kong</h2>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CityTitles
