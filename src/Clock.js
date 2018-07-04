import React, { Component } from 'react'

class Clock extends Component {
  constructor () {
    super()
    this.state = {date: new Date()}
  }
  componentDidMount () {
    this.timeId = setInterval(() =>{
      this.tick()
    }, 1000)
  }

  componentWIllUnmount () {
    clearInterval(this.timeId)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  alertTime (content, e) {
    e.preventDefault()
    alert(content)
  }

  render () {
    return (
      <div>
        <a onClick={this.alertTime.bind(this, this.state.date)}>now is {this.state.date.toLocaleTimeString()}</a>
      </div>
    )
  }
}

export default Clock