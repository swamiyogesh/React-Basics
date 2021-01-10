import React,{Component} from 'react'
import Child from './Child'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      message: "parent"
    }
    this.handler = this.handler.bind(this)
  }

  handler(child){
    alert(`Hello ${this.state.message} from ${child}`)
  }


  render(){
    return(
      <div>
      <Child eventHandler={this.handler}/>
      </div>
    )
  }

}

export default Parent
