import React, { Component }  from 'react'
import Clock from './Clock'
import MyForm from './Form'

const name = 'qifa'
const bool = false
function getName (name) {
  if (bool) {
    return `this is ${name}`
  } else {
    return `this is ${name}2`
  }
}
const ele = (
  <div className="ele">
    <span>jhs</span>
    <p>{name.toUpperCase()}</p>
    {name} {name}
  </div>
)

function Welcome (props) {
  return <h2>age, {props.age}</h2>
}
const propss = <div>
    <Welcome age="18" />
    <Welcome age="19" />
    <Welcome age="20" />
    <Welcome age="25" />
  </div>

const numbers = [1,2,3,4,5]
const liNumbers = numbers.map((item, index) =>
  <li key={item}>index is {index} and value is {item * 2}</li>
)

class Test extends Component {
  render () {
    return (
      <section className="test">
        {ele}
        <p>
          {getName(name)}
        </p>
        {propss}
        <Clock />
        <ul>
          {liNumbers}
        </ul>
        <MyForm />
      </section>
    )
  }
}

export default Test