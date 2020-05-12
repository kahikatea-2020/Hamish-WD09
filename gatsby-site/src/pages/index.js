import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import request from 'superagent'
import APOD from "../components/APOD"

const apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=tynhBERmkQ5gVU912sgnrGaG8FHfMmH3&tag=&rating=G'

class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hello World!</h1>
        <p>Click the links below to see some cool gifs!</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <ul>
          <APOD />
        <li><Link to="/page-2/">Dogs</Link></li>
        <li><Link to="/page-3/">Friends</Link></li>
        <li><Link to="/page-4/">Spongebob</Link></li>
        </ul>
      </Layout>
    )
  }
}

export default IndexPage
