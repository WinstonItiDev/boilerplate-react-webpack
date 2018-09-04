import React from 'react'
import request from 'superagent'

const apiEndPoint = 'https://eda-te-reo.herokuapp.com/api/proverbs'

class App extends React.Component  {
  constructor (props) {
    super(props)
  
    this.state = {
      proverb: []
    }
    this.getProverb = this.getProverb.bind(this)
  }

  getProverb() {
    return request.get(apiEndPoint)
    .then(res => {
      console.log(res.text)
      this.setState({
        proverb: res.body
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Te Reo translations:</h1>
        <button onClick={this.getProverb}>Get Proverb</button>
        <h3>Te Reo:</h3>
        <p>{this.state.proverb.source}</p>
        <h3>English:</h3>
        <p>{this.state.proverb.translation}</p>
      </div>
    )
  }

}

export default App

