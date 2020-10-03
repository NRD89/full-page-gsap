import { useState, useEffect } from "react"

const useWindowSize = () => {
  const isBrowser = typeof window !== `undefined`
  // const getSize = () => {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   }
  // }

  const [height, setHeight] = useState(undefined)

  useEffect(() => {
    if (!isBrowser) return false
    const handleResize = () => {
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return height
}

export default useWindowSize
