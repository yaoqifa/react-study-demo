import React, { Component } from 'react'

class MyForm extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: '',
      selectValue: 'c'
    }
  }

  handleSubmit = (e) => {
    if (this.state.inputValue) {
      console.log('input name is ' + this.state.inputValue)
    } else {
      console.log('no input')
    }
    e.preventDefault()
  }

  handelChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    console.log(name, '  ', value)
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          a select
          <select name="selectValue" value={this.state.selectValue} onChange={this.handelChange}>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
        </label>
        <label>
          name>
          <input name="inputValue" type="text" value={this.state.inputValue} onChange={this.handelChange} placeholder="holder"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default MyForm