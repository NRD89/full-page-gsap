import React, { useEffect, useRef, useState } from "react"
// import Div100vh from "react-div-100vh"
import CityTitles from "../components/CityTitles"
import SideBarNav from "../components/SideBarNav"
import FullPageNav from "../components/FullPageNav"
import "../components/fullpage.css"
import vid from "../assets/Global-Wealth-Partners.mp4"

const FullPageVid = ({ data }) => {
  const vidRef = useRef(null)
  // const vidCurrentTime = useVidCurrentTime()
  const [currentTime, setCurrentTime] = useState()
  const [menuState, setMenuState] = useState(false)
  const wpMenuLinks = data.wpcontent.menuItems.nodes
  // const [silicon, setSilicon] = useState(false)
  // console.log(silicon);

  const onTimeUpdate = () => {
    setCurrentTime(vidRef.current.currentTime)
  }

  return (
    <div>
      <div
        style={{
          position: `fixed`,
          zIndex: `1`,
          width: `100%`,
          height: `100%`,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5),rgba(0,0,0,.0))`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
        }}
      >
        <header
          id="header"
          style={{
            width: `100%`,
            zIndex: `99`,
            display: `flex`,
            justifyContent: `space-between`,
            marginLeft: `1rem`,
            marginTop: `1rem`,
          }}
        >
          <a id="logo" href="#">
            <img
              src="https://res.cloudinary.com/nathandalton-dev/image/upload/dpr_auto,f_auto,q_auto:best/v1600824699/logo_cu0dx8.png"
              alt="Global Wealth Partners Logo"
            />
          </a>
          <FullPageNav wpMenuLinks={wpMenuLinks} />
          {/* <div>
            <button
              className={`menu-trigger ${menuState ? "menu-close" : ""}`}
              onClick={() => setMenuState(!menuState)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <SideBarNav menuState={menuState} setMenuState={setMenuState} /> */}
        </header>

        <div
          // className="centered-text"
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            flexDirection: `column`,
            margin: `0 auto`,
            zIndex: `12`,
            width: `100%`,
            // backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.4))`,
          }}
        >
          <div className="text-container">
            <hr />
            <p className="subheading">Over 100 years of combined experience</p>
            <div className="cityTitles">
              <CityTitles currentTime={currentTime} />
            </div>
            <p className="subheading">Wealth Planning Firm</p>
            <hr />
          </div>
        </div>
        <div className="time">
          {/* <CityTitles currentTime={currentTime} /> */}
        </div>
      </div>

      <video
        ref={vidRef}
        id="fullPageVid"
        src={vid}
        autoPlay
        muted
        loop
        onTimeUpdate={onTimeUpdate}
      ></video>
    </div>
  )
}

export default FullPageVid

export const query = graphql`
  query WpMenuQuery {
    wpcontent {
      menuItems(where: { location: PRIMARYNAVIGATION }, first: 100) {
        nodes {
          id
          label
          url
          childItems {
            nodes {
              label
              url
              parentId
            }
          }
          parentId
        }
      }
    }
  }
`
