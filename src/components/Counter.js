import React, {Component} from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count:0
    }
  }

  inc(){
    this.setState((prevState)=>({
      count : prevState.count + 1
    }))
  }

  dec(){
    this.setState((prevState)=>({
      count:prevState.count-1
    }))
  }



  render(){
    return(
      <div>
      <h3>{this.state.count}</h3>
      <button onClick={()=>this.inc()}>Increment</button>
      <button onClick={()=>this.dec()}>Decrement</button>
      </div>
    )
  }
}

export default Counter
