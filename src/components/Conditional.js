import React, {Component} from 'react'

class Conditional extends Component {
  constructor() {
    super()
    this.state = {
      isloggedin: false
    }
  }

  render(){
    return (
      this.state.isloggedin ? <div>Welcome User</div> : <div>Welcome Guest</div>
    )

  }
}
export default Conditional
