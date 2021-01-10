import React from 'react'

class HoverCounterTwo extends React.Component{

  render() {
    const {count, incrementHandler} = this.props
    return(
      <div>
      <h1>Hover Counter Two</h1>
      <h2 onMouseOver={incrementHandler}>Clicked {count} times</h2>
      </div>

    )
  }

}

export default HoverCounterTwo
