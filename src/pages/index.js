import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import ReactFullpage from "@fullpage/react-fullpage"
import "../components/layout.css"

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
    const title = section.querySelector("h3")
    console.log(title)
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
      onLeave={onLeave}
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
            <a
              href="#"
              id="logo"
              style={{
                position: `fixed`,
                top: `20px`,
                left: `20px`,
                zIndex: `99`,
              }}
            >
              <img
                src="https://res.cloudinary.com/nathandalton-dev/image/upload/f_auto,q_auto:best/v1600824699/logo_cu0dx8.png"
                alt="Global Wealth Partners Logo"
              />
            </a>
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
            <div
              className="section active"
              id="section1"
              data-anchor="firstPage"
            >
              {/* <div
                style={{
                  position: `absolute`,
                  width: `100%`,
                  height: `100%`,
                  top: `0`,
                  left: `0`,
                  backgroundColor: `rgba(255,255,255,.25)`,
                  // backdropFilter: `blur(0.5px)`,
                  zIndex: `11`,
                }}
              ></div> */}
              {/* <div
                className="fp-bg"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),url(https://res.cloudinary.com/nathandalton-dev/image/upload/f_auto,q_auto:good,w_1800/v1600824785/pexels-oliver-sj%C3%B6str%C3%B6m-1223649_n57smo.jpg)`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  backdropFilter: `blur(5px)`,
                }}
              ></div> */}
              <video id="myVideo" loop muted data-autoplay>
                <source
                  src="https://res.cloudinary.com/nathandalton-dev/video/upload/f_auto,q_auto:best/v1600845238/close-up-on-earth-animation_wywwlu-b__D_vgh1qs.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://res.cloudinary.com/nathandalton-dev/video/upload/f_auto,q_auto:best/v1600845238/close-up-on-earth-animation_wywwlu-b__D_vgh1qs.webm"
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
                }}
              >
                <div style={{ textAlign: `center`, color: `rgb(230,230,230)` }}>
                  <h3>Over 100 years of combined experience</h3>
                  <h2>
                    Global Wealth Partners <br />{" "}
                    <span style={{ textTransform: `uppercase` }}>
                      Wealth Planning Firm
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="section" id="section2" data-anchor="secondPage">
              <div
                className="fp-bg"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),url(https://res.cloudinary.com/nathandalton-dev/image/upload/f_auto,q_auto:good,w_1800/v1600824785/pexels-oliver-sj%C3%B6str%C3%B6m-1223649_n57smo.jpg)`,
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
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),url(https://res.cloudinary.com/nathandalton-dev/image/upload/c_scale,f_auto,q_auto:best,w_1800/v1600846722/pexels-andrea-piacquadio-3783585_xkgbwy.jpg)`,
                  backgroundSize: `cover`,
                  backgroundPosition: `50% 100%`,
                  backdropFilter: `blur(5px)`,
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
