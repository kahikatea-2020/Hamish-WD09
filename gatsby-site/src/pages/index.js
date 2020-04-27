import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import request from 'superagent'


const apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=tynhBERmkQ5gVU912sgnrGaG8FHfMmH3&tag=&rating=G'

class IndexPage extends React.Component {

  State = {
    slug: "",
    // title: "",
    embed_url: "",
  }

  componentDidMount() {
    request.get(apiUrl)
      .then(res => {
        const {slug, embed_url} = res.body
        this.setState({
          slug,
          embed_url
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
        {/* <div>Title: {this.state.title}</div> */}
        <img src={this.state.embed_url} alt="gif" />
        <div>Description: {this.state.slug}</div>
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
