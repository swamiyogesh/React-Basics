import React from 'react'

class RenderProps extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      count:0
    }
  }

  incrementHandler = ()=>
    this.setState(prevState=> {
      return{
        count : prevState.count +1
      }
    })

  render(){
    return(
      <div>
        {this.props.render(this.state.count, this.incrementHandler)}
      </div>
    )
  }
}

export default RenderProps
