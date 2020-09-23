import React from "react"
// import { Link } from "gatsby"
// import { useScrollData } from "scroll-data-hook"
// import "../components/page-3.css"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  

  return (
    <div className="smooth">
      <SEO title="Home" />
      <div className="header">
        <ul>
          <li href="#home">Home</li>
          <li href="#about">About</li>
          <li href="#price">Price</li>
          <li href="#contact">Contact</li>
        </ul>
      </div>
      <section id="home">
        <h2>Full page Scroll</h2>
      </section>
      <section id="about">
        <h2>About</h2>
      </section>
      <section id="price">
        <h2>Price</h2>
      </section>
      <section id="contact">
        <h2>Contact</h2>
      </section>
    </div>
  )
}

export default IndexPage
