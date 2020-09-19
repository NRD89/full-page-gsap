import React from "react"
import { Link } from "gatsby"
import { useScrollData } from "scroll-data-hook"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    scrolling,
    time,
    speed,
    direction,
    position,
    relativeDistance,
    totalDistance,
  } = useScrollData({
    onScrollStart: () => {
      console.log("Started scrolling")
    },
    onScrollEnd: () => {
      console.log("Finished scrolling")
    },
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <p>{scrolling ? "Scrolling" : "Not scrolling"}</p>

        <p>Scrolling time: {time} milliseconds</p>

        <p>Horizontal speed: {speed.x} pixels per second</p>

        <p>Vertical speed: {speed.y} pixels per second</p>

        <p>
          Direction: {direction.x} {direction.y}
        </p>

        <p>
          Relative distance: {relativeDistance.x}/{relativeDistance.y}
        </p>

        <p>
          Total distance: {totalDistance.x}/{totalDistance.y}
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
