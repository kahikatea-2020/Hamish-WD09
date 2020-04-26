import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/trending")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <ul>
        <li><Link to="/page-2/">Go to page 2</Link></li>
        <li><Link to="/page-3/">Go to page 3</Link></li>
        <li><Link to="/page-4/">Go to page 4</Link></li>
        </ul>
      </Layout>
    )
  }
}

export default IndexPage
