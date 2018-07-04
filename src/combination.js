import React from 'react'

function Aa (props) {
  return (
    <div className="Aa">
      <div className="left">
        {props.left}
      </div>
      <div className="right">
        {props.right}
      </div>
    </div>
  )
}

function Bb () {
  return (
    <div className="bb">
      <span>this is bb</span>
    </div>
  )
}

class Combine extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="combination">
        <Aa left="is left" right={<Bb />} />
      </div>
    )
  }
}

export default Combine