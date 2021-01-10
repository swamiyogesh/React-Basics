import React, {Component} from 'react'

class Greet extends Component{
  constructor(){
    super()
    this.state = {
      message: 'Press submit'
    }

    this.change = this.change.bind(this)
  }
  change(){
    this.setState({
      message:'Submitted'
    })
  }

  render(){
    return(
      <div>
      <h2>{this.state.message}</h2>
      <button onClick = {this.change}>Submit</button>
      </div>

    )
  }
}

export default Greet
