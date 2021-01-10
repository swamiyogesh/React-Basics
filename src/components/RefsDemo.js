import React, {Component} from 'react'

class Refs extends Component{
  constructor(props){
    super(props)
    this.inputRef = React.createRef()
    this.cbRef =null
    this.setCbRef = element =>{
      this.cbRef = element
    }
  }

  componentDidMount(){
    if(this.cbRef){
      this.cbRef.focus()
    }
    // this.inputRef.current.focus()
  }

  clickHandler =()=>{
    alert(`${this.inputRef.current.value}`)
  }

  render(){
    return(
      <div>
        <h1>Refs Demo</h1>
        <input type='text' ref = {this.inputRef}/>
        <input type='text' ref = {this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Refs
