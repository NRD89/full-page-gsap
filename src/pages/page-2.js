import React from "react"
import { Link } from "gatsby"
import ReactFullpage from "@fullpage/react-fullpage"
import { Parallax } from "react-parallax"
import YachtPic from "../images/pexels-oliver-sjöström-1223649.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

// const pluginWrapper = () => {
//   require('../../node_modules/fullpage.js/vendors/fullpage.parallax.limited.min.js');
// };

const SecondPage = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    // pluginWrapper = {pluginWrapper}
    parallax
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state) // eslint-disable-line no-console
      console.log(state)

      if (state.callback === "onLeave") {
        if (state.direction === "down") {
          console.log("going down..." + state.origin.index)
        }
      }
      return (
        <div id="fullpage-wrapper">
          <div className="section section1" >
            <Parallax bgImage={YachtPic} style={{ height: `80%` }}>
              <h3>Section 1</h3>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Move down
              </button>
            </Parallax>
          </div>
          <div className="section">
            <div className="slide">
              <h3>Slide 2.1</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.2</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.3</h3>
            </div>
          </div>
          <div className="section">
            <h3>Section 3</h3>
          </div>
        </div>
      )
    }}
  />
)

export default SecondPage
