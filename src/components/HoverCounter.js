import React from 'react'
import withCounter from './withCounter'

class HoverCounter extends React.Component{

  render() {
    const {count, incrementHandler} = this.props
    return(
      <div>
      <h1>Hover Counter</h1>
      <h2 onMouseOver={incrementHandler}>Hovered {count} times</h2>
      </div>

    )
  }

}

export default withCounter(HoverCounter)
