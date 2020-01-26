import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { toggleDarkMode } from "../state/app"
const IndexPage = ({ isDarkMode, dispatch }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button
      className="btn"
      onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
    >
      {isDarkMode ? "Dark" : "Light"} Mode
    </button>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(IndexPage)
