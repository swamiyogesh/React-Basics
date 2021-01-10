import React from 'react'
import withCounter from './withCounter'

class ClickCounter extends React.Component{

  render() {
    const {count, incrementHandler} = this.props
    return(
      <div>
      <h1>Click Counter</h1>
      <button onClick={incrementHandler}>Clicked {count} times</button>
      </div>

    )
  }

}

export default withCounter(ClickCounter)
