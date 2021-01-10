import React from 'react'

const withCounter= WrapperComponent =>{
  class WithCounter extends React.Component{
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
        <WrapperComponent count = {this.state.count} incrementHandler={this.incrementHandler}/>
      )
    }
  }
  return WithCounter
}

export default withCounter
