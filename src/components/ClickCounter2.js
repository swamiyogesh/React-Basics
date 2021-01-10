import React from 'react'

class ClickCounterTwo extends React.Component{

  render() {
    const {count, incrementHandler} = this.props
    return(
      <div>
      <h1>Click Counter Two</h1>
      <button onClick={incrementHandler}>Clicked {count} times</button>
      </div>

    )
  }

}

export default ClickCounterTwo
