import React, { useEffect, useRef, useState } from "react"
// import Div100vh from "react-div-100vh"
import CityTitles from "../components/CityTitles"
import SideBarNav from "../components/SideBarNav"
import "../components/fullpage.css"

const FullPageVid = () => {
  const vidRef = useRef(null)
  // const vidCurrentTime = useVidCurrentTime()
  const [currentTime, setCurrentTime] = useState()
  const [menuState, setMenuState] = useState(false)
  // const [silicon, setSilicon] = useState(false)
  // console.log(silicon);

  const onTimeUpdate = () => {
    setCurrentTime(vidRef.current.currentTime)
  }

  // if (currentTime === 10) {

  //   setTimeout(() => {
  //     setSilicon(true)
  //   }, 2500)
  // }

  // setTimeout(() => {
  //   setSilicon(false)
  // }, 5500)

  // useEffect(() => {
  //   if (currentTime >= 10 && currentTime <= 14 ) {
  //     // setSilicon(true)
  //     setTimeout(() => {
  //       setSilicon(true)
  //     }, 2500)
  //   }
  // }, [currentTime])

  return (
    <div>
      <div
        style={{
          position: `fixed`,
          zIndex: `1`,
          width: `100%`,
          height: `100%`,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6),rgba(0,0,0,.0))`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`
        }}
      >
        <header
          id="header"
          style={{
            // position: `fixed`,
            top: `20px`,
            // left: `20px`,
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
          <div>
            <button
              className={`menu-trigger ${menuState ? "menu-close" : ""}`}
              onClick={() => setMenuState(!menuState)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <SideBarNav menuState={menuState} setMenuState={setMenuState} />
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
          {/* style={{ textAlign: `center`, color: `rgb(230,230,230)`, backgroundColor: `rgba(255,255,255, .8)`, padding: `1rem`, boxShadow: `7px 29px 49px 0px rgba(0, 0, 0, 0.5)`}} */}
          <div className="text-container">
            <hr />
            <p className="subheading">Over 100 years of combined experience</p>
            <h2 className="hero-heading">
              Global <br /> <span>Wealth</span>
              <br />
              Partners
            </h2>
            <p className="subheading">Wealth Planning Firm</p>
            <hr />
          </div>
        </div>
        <div className="time">
          <CityTitles currentTime={currentTime} />
        </div>
      </div>

      <video
        ref={vidRef}
        id="fullPageVid"
        src="https://res.cloudinary.com/nathandalton-dev/video/upload/v1601421578/GWP-smooth_a2m7sh.mp4"
        autoPlay
        muted
        loop
        onTimeUpdate={onTimeUpdate}
      ></video>
    </div>
  )
}

export default FullPageVid
