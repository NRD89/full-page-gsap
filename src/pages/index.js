import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import ReactFullpage from "@fullpage/react-fullpage"
import "../components/layout.css"
import { gsap } from "gsap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const pluginWrapper = () => {
  require("../assets/fullpage.parallax.min.js")
}

const SecondPage = fullpageProps => {
  // useEffect(() => {
  //   ;<ReactFullpage
  //     render={({ state }) => {
  //       console.log(state)
  //       return <div></div>
  //     }}
  //   />
  // }, [state])
  const onLeave = (origin, destination, direction) => {
    const section = destination.item
    console.log(destination.item)
    const mainHeading = section.querySelector("h2")
    const title = section.querySelectorAll("p")
    const tl2 = gsap.timeline({ delay: 2 })
    const tl1 = gsap.timeline({ delay: 1 })
    tl2.fromTo(
      title,
      { y: 50, opacity: 0 },
      { duration: 1.5, y: 0, opacity: 1 }
    )
    tl1.fromTo(mainHeading, { opacity: 0 }, { duration: 0.5, opacity: 1 })

    if (destination.index === 0) {
      const leftSection = section.querySelector("#left-section")
      console.log(leftSection)
      tl2.fromTo(
        leftSection,
        { width: 0, ease: "slow(0.3, 0.7, false)" },
        { duration: 1.5, width: "35%", ease: "slow(0.3, 0.7, false)" }
      )
    }
  }
  const afterLoad = (origin, destination, direction) => {
    const section = destination.item
    console.log(destination.item)
    const mainHeading = section.querySelector("h2")
    const title = section.querySelectorAll("p")
    const hr = section.querySelectorAll("hr")
    const tl2 = gsap.timeline({ delay: 3 })
    const tl1 = gsap.timeline({ delay: 2 })
    const tl = gsap.timeline({ delay: 0.5 })
    tl2.fromTo(
      title,
      { y: 50, opacity: 0 },
      { duration: 1.5, y: 0, opacity: 1 }
    )
    tl1.fromTo(mainHeading, { opacity: 0 }, { duration: 1.5, opacity: 1 })
    tl1.fromTo(
      hr,
      { width: 0, ease: "slow(0.3, 0.7, false)" },
      { duration: 1.5, width: "100%", ease: "slow(0.3, 0.7, false)" }
    )

    if (destination.index === 0) {
      const leftSection = section.querySelector("#left-section")
      console.log(leftSection)
      tl.fromTo(
        leftSection,
        { width: 0, ease: "slow(0.3, 0.7, false)" },
        { duration: 1.5, width: "50%", ease: "slow(0.3, 0.7, false)" }
      )
    }
  }

  const [something, setSomething] = useState()
  console.log(something)
  return (
    <ReactFullpage
      {...fullpageProps}
      pluginWrapper={pluginWrapper}
      parallax={true}
      parallaxOptions={{ percentage: 100 }}
      parallaxKey={"9CA6BD29-008B42B4-8AEA4CDF-FBC960E5"}
      // onLeave={onLeave}
      afterLoad={afterLoad}
      scrollingSpeed={2000}
      easing={"easeInOutBounce"}
      anchors={["firstPage", "secondPage", "thirdPage"]}
      menu={"#myMenu"}
      fixedElements={["#logo"]}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state) // eslint-disable-line no-console
        console.log(fullpageProps)

        if (state.callback === "onLeave") {
          if (state.direction === "down") {
            console.log("going down..." + state.origin.index)
          }
        }
        return (
          <div id="fullpage-wrapper">
            <div
              id="logo"
              style={{
                position: `fixed`,
                top: `20px`,
                // left: `20px`,
                width: `100%`,
                zIndex: `99`,
                display: `flex`,
                justifyContent: `flex-start`,
                marginLeft: `1rem`,
              }}
            >
              <a href="#">
                <img
                  src="https://res.cloudinary.com/nathandalton-dev/image/upload/dpr_auto,f_auto,q_auto:best/v1600824699/logo_cu0dx8.png"
                  alt="Global Wealth Partners Logo"
                />
              </a>
            </div>
            <ul
              id="myMenu"
              style={{
                position: `fixed`,
                bottom: `20px`,
                width: `100%`,
                zIndex: `70`,
                display: `flex`,
                justifyContent: `space-evenly`,
              }}
            >
              <li data-menuanchor="firstPage" className="menu-link active">
                <a href="#firstPage">Global</a>
              </li>
              <li data-menuanchor="secondPage" className="menu-link">
                <a href="#secondPage">Wealth</a>
              </li>
              <li data-menuanchor="thirdPage" className="menu-link">
                <a href="#thirdPage">Partners</a>
              </li>
            </ul>
            // First Slide
            <div
              className="section active"
              id="section1"
              data-anchor="firstPage"
            >
              <aside
                id="left-section"
                style={{
                  position: `absolute`,
                  width: `50%`,
                  height: `100%`,
                  top: `0`,
                  left: `0`,
                  backgroundColor: `rgba(10, 10, 10, .5)`,
                  // backdropFilter: `blur(0.5px)`,
                  zIndex: `11`,
                }}
              ></aside>
              <div
                className="fp-bg"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(27,27,27,.65), rgba(27,27,27,.65))`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  backdropFilter: `blur(5px)`,
                }}
              ></div>
              <video id="myVideo" loop muted data-autoplay>
                <source
                  src="https://res.cloudinary.com/nathandalton-dev/video/upload/f_auto,q_auto:best/v1600978156/Pexels_Videos_1851190_pj4i9y.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://res.cloudinary.com/nathandalton-dev/video/upload/f_auto,q_auto:best/v1600978156/Pexels_Videos_1851190_pj4i9y.webm"
                  type="video/webm"
                />
              </video>
              <div
                className="layer"
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  flexDirection: `column`,
                  margin: `0 auto`,
                  zIndex: `12`,
                }}
              >
                {/* style={{ textAlign: `center`, color: `rgb(230,230,230)`, backgroundColor: `rgba(255,255,255, .8)`, padding: `1rem`, boxShadow: `7px 29px 49px 0px rgba(0, 0, 0, 0.5)`}} */}
                <div>
                  <hr />
                  <p className="subheading">
                    Over 100 years of combined experience
                  </p>
                  <h2 className="hero-heading">
                    Global <br /> <span>Wealth</span>
                    <br />
                    Partners
                  </h2>
                  <p className="subheading">Wealth Planning Firm</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="section" id="section2" data-anchor="secondPage">
              <div
                className="fp-bg"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(27,27,27,.5), rgba(27,27,27,.5)),url(https://res.cloudinary.com/nathandalton-dev/image/upload/f_auto,q_auto:good,w_1800/v1600824785/pexels-oliver-sj%C3%B6str%C3%B6m-1223649_n57smo.jpg)`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  backdropFilter: `blur(5px)`,
                }}
              ></div>
              <div
                className="layer"
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  flexDirection: `column`,
                  margin: `0 auto`,
                }}
              >
                <div style={{ textAlign: `center`, color: `rgb(230,230,230)` }}>
                  <h3>Customized and Unbiased Advice</h3>
                  <h2>
                    Deep Insight <br />{" "}
                    <span style={{ textTransform: `uppercase` }}>
                      Into The Investment Markets
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="section" id="section3" data-anchor="thirdPage">
              <div
                className="fp-bg"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),url(https://res.cloudinary.com/nathandalton-dev/image/upload/c_scale,f_auto,q_auto:best,w_2407/v1600851248/pexels-bongkarn-thanyakij-3740400_ky9fkq.jpg)`,
                  backgroundSize: `cover`,
                  backgroundPosition: `40% center`,
                }}
              ></div>
              <div
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  flexDirection: `column`,
                  margin: `0 auto`,
                }}
              >
                <div style={{ textAlign: `center`, color: `rgb(230,230,230)` }}>
                  <h3>Highest Level of Integrity and Service</h3>
                  <h2>
                    Let Us Help You Find The Right Path <br />{" "}
                    <span style={{ textTransform: `uppercase` }}>
                      To Creating and Managing Wealth
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default SecondPage
