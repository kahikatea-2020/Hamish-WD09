import React from 'react'
import request from 'superagent'

const apiUrl = "https://api.giphy.com/v1/gifs/random?api_key=tynhBERmkQ5gVU912sgnrGaG8FHfMmH3&tag=&rating=G"

class APOD extends React.Component {
  state = {
    gif: ''
  }

  componentDidMount() {
    request.get(apiUrl)
      .query({
        apiUrl: apiUrl,
      })
      .then(res => {
        this.setState({
          gif: (res.body.data.images.original.url) 
        })
      })
  }

  render() {
    return (
      <img src={this.state.gif} alt=""/>
    )
  }
}

export default APOD