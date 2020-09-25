import React, { useRef, useEffect } from "react"
import gsap from "gsap"
const SidebarNav = props => {
  let sidebarMenu = useRef(null)
  let sidebarMenuOverlay = useRef(null)
  let menuLayer = useRef(null)
  let menuWrapper = useRef(null)
  const menuTimeline = useRef()

  const { menuState, setMenuState } = props

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true })
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuWrapper, sidebarMenu],
      {
        duration: 2,
        // y: "-100%",
        x: "100%",
        autoAlpha: 0,
        borderRadius: "100%",
        ease: "slow(0.9, 0.1, false)",
      },
      {
        duration: 1.5,
        // y: 0,
        x: 0,
        ease: "slow(0.9, 0.1, false)",
        // stagger: {
        //   amount: 0.4,
        // },
        autoAlpha: 1,
        borderRadius: 0,
      }
    )
  }, [])

  useEffect(() => {
    menuState ? menuTimeline.current.play() : menuTimeline.current.reverse()
  }, [menuState])

  // useEffect(() => {
  //   const { history } = props
  //   history.listen(() => setMenuState(false))
  // })

  return (
    <>
      <div
        className="sidebarNavigationOverlay"
        ref={el => (sidebarMenuOverlay = el)}
        onClick={() => setMenuState(false)}
      ></div>
      <div className="menu-wrapper" ref={el => (menuWrapper = el)}>
        {/* <div className="menu-layer" ref={el => (menuLayer = el)}></div> */}
        <nav className="sidebarNavigation" ref={el => (sidebarMenu = el)}>
          <div className="sidebar-top">
            <div className="links-wrapper">
              <a className="menu-link" href="#">
                HOME
              </a>
              <a
                className="menu-link"
                href="http://rugmall.com/wealth-management/"
              >
                WEALTH MANAGEMENT
              </a>
              <a
                className="menu-link"
                href="http://rugmall.com/alternative-investments/"
              >
                ALTERNATIVE INVESTMENTS
              </a>
              <a
                className="menu-link"
                href="http://rugmall.com/human-capital-risk/"
              >
                HUMAN CAPITAL RISK
              </a>
              <a className="menu-link" href="http://rugmall.com/resources/">
                RESOURCES
              </a>
              <a
                className="menu-link"
                href="http://rugmall.com/financial-and-economic-news/"
              >
                FINANCIAL AND ECONOMIC NEWS
              </a>
              <a className="menu-link" href="http://rugmall.com/contact/">
                CONTACT GWP TODAY!
              </a>
              <a className="menu-link" href="https://brokercheck.finra.org/">
                BROKERS CHECK® BY FINRA
              </a>
              <a
                className="menu-link"
                href="http://rugmall.com/pages/faq-page/"
              >
                FAQ PAGE
              </a>
              <a
                className="menu-link"
                href="http://rugmall.com/pages/about-the-agency/"
              >
                ABOUT US
              </a>
              <a
                className="menu-link"
                href="http://rugmall.com/pages/about-the-agency/"
              >
                WHO WE ARE
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default SidebarNav
