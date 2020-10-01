import { useState, useEffect } from "react"

const useVidCurrentTime = () => {
  const isBrowser = typeof window !== `undefined`
  // const getSize = () => {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   }
  // }

  const [currentTime, setCurrentTime] = useState()

  useEffect(() => {
    if (!isBrowser) return false

    const vid = document.getElementsByTagName('video')[0]

    console.log(vid);

    // const handleCurrentTime = (event) => {
    //   setCurrentTime(vid.currentTime)
    // }

    window.addEventListener("timeupdate", function(event){
      setCurrentTime(vid.currentTime)
    }, false)

    // return () => {
    //   window.removeEventListener("timeupdate", handleCurrentTime)
    // }
  }, [currentTime, setCurrentTime])

  console.log(currentTime);
  return currentTime
}

export default useVidCurrentTime
