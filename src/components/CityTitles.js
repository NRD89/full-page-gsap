import React, { useEffect } from "react"
import { motion, AnimatePresence, usePresence } from "framer-motion"

const CityTitles = ({ currentTime }) => {
  // const [isPresent, safeToRemove] = usePresence()

  // useEffect(() => {
  //   !isPresent && setTimeout(safeToRemove, 1000)
  // }, [isPresent]);

  // const variant = isPresent ? { opacity: 1 } : { opacity: 0 }

  const sv = () => {
    if ((currentTime >= 10) & (currentTime <= 14)) {
      return true
    } else {
      return false
    }
  }

  console.log(sv());

  return (
    <AnimatePresence exitBeforeEnter>
      {(currentTime >= 10) & (currentTime <= 13.7) && (
        <motion.div
          className="cityTitles time"
          key="silicon-valley"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: .6,
          }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <p>Silicon Valley</p>
        </motion.div>
      )}
      {(currentTime >= 15) & (currentTime <= 18.7) && (
        <motion.div
          className="cityTitles time"
          key="silicon-valley"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: .6,
          }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <p>Beverly Hills</p>
        </motion.div>
      )}
      {(currentTime >= 20) & (currentTime <= 23.7) && (
        <motion.div
          className="cityTitles time"
          key="silicon-valley"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: .6,
          }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <p>Miami</p>
        </motion.div>
      )}
      {(currentTime >= 24.7) & (currentTime <= 28.7) && (
        <motion.div
          className="cityTitles time"
          key="silicon-valley"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: .6,
          }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <p>New York City</p>
        </motion.div>
      )}
      {(currentTime >= 29.7) & (currentTime <= 33.7) && (
        <motion.div
          className="cityTitles time"
          key="silicon-valley"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: .6,
          }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <p>London</p>
        </motion.div>
      )}
      {(currentTime >= 34.7) & (currentTime <= 38.7) && (
        <motion.div
          className="cityTitles time"
          key="silicon-valley"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: .6,
          }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <p>Amsterdam</p>
        </motion.div>
      )}
      {(currentTime >= 39.7) & (currentTime <= 43.7) && (
        <motion.div
          className="cityTitles time"
          key="silicon-valley"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: .6,
          }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <p>UAE</p>
        </motion.div>
      )}
      {(currentTime >= 44.7) & (currentTime <= 47.7) && (
        <motion.div
          className="cityTitles time"
          key="silicon-valley"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: .6,
          }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <p>Hong Kong</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CityTitles
