import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import Div100vh from "react-div-100vh"

import "../components/layout.css"
import useWindowSize from "../hooks/useWindowSize"

const isBrowser = typeof window !== `undefined`

// if (isBrowser) {
//   gsap.registerPlugin(ScrollTrigger)
//   gsap.core.globals("ScrollTrigger", ScrollTrigger)
// }

const GsapPage = () => {
  const size = useWindowSize()
  // let pageRef = useRef()

  useEffect(() => {
    if (!isBrowser) return false
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
    gsap.core.globals("ScrollToPlugin", ScrollToPlugin)

    function goToSection(i, anim) {
      // if (!isBrowser) return false
      // gsap.set("body", { overflow: "hidden" })

      gsap.to("body", {
        scrollTo: { y: i * size, autoKill: false },
        duration: 1.4,
        overwrite: true,
        // onComplete: () => gsap.set("body", { overflow: "auto" }),
      })

      if (anim) {
        anim.restart()
      }
    }

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        onEnter: () => goToSection(i),
      })

      ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i),
      })
    })
  }, [size])

  // console.log(size.height)
  return (
    <div>
      <Div100vh
        className="panel"
        // ref={element => {
        //   pageRef = element
        // }}
        style={{ backgroundColor: `red` }}
      >
        ONE
      </Div100vh>
      <Div100vh
        className="panel"
        // ref={element => {
        //   pageRef = element
        // }}
        style={{ backgroundColor: `blue` }}
      >
        TWO
      </Div100vh>
      <Div100vh
        className="panel"
        // ref={element => {
        //   pageRef = element
        // }}
        style={{ backgroundColor: `green` }}
      >
        THREE
      </Div100vh>
      <Div100vh
        className="panel"
        // ref={element => {
        //   pageRef = element
        // }}
        style={{ backgroundColor: `purple` }}
      >
        FOUR
      </Div100vh>
    </div>
  )
}

export default GsapPage
