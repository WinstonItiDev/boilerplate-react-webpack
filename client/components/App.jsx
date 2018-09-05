import React from 'react'
import request from 'superagent'

const apiEndPoint = 'https://eda-te-reo.herokuapp.com/api/proverbs'
const seagalImg = 'https://www.stevensegallery.com/'

class App extends React.Component  {
  constructor (props) {
    super(props)
  
    this.state = {
      proverb: [],
      img: []
    }
    this.getProverb = this.getProverb.bind(this)
    this.getSeagal = this.getSeagal.bind(this)
  }

  getProverb() {
    return request.get(apiEndPoint)
    .then(res => {
      this.setState({
        proverb: res.body
      })
    })
  }

  getSeagal() {
    let randomWidth = Math.floor((Math.random() * 800) + 200)
    let randomHeight = Math.floor((Math.random() * 600) + 300)

      this.setState({
        img: seagalImg + '/' + randomWidth + '/' + randomHeight
      })
  }

  render () {
    return (
      <div>
        <h1>Te Reo translations:</h1>
        <button onClick={this.getProverb}>Get Proverb</button>
        <button onClick={this.getSeagal}>Get Seagal</button>
        <h3>Te Reo:</h3>
        <p>{this.state.proverb.source}</p>
        <h3>English:</h3>
        <p>{this.state.proverb.translation}</p>
        <img src={this.state.img}/>
      </div>
    )
  }

}

export default App

