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
      {(currentTime >= 1) & (currentTime <= 4.3) && (
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
      {(currentTime >= 5.3) & (currentTime <= 8.7) && (
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
      {(currentTime >= 10.3) & (currentTime <= 13.7) && (
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
      {(currentTime >= 15.3) & (currentTime <= 18.7) && (
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
      {(currentTime >= 19.7) & (currentTime <= 22.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">San Diego</h2>
        </motion.div>
      )}
      {(currentTime >= 24.3) & (currentTime <= 27.7) && (
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
      {(currentTime >= 29) & (currentTime <= 32.7) && (
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
      {(currentTime >= 34) & (currentTime <= 37) && (
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
      {(currentTime >= 38.3) & (currentTime <= 41.7) && (
        <motion.div
          key="silicon-valley"
          initial="hidden"
          animate="visible"
          transition="transition"
          exit="hidden"
          variants={variants}
        >
          {" "}
          <h2 className="hero-heading">Dubai</h2>
        </motion.div>
      )}
      {(currentTime >= 43.3) & (currentTime <= 46.7) && (
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
