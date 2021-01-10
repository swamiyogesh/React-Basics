import React, {Component} from 'react'

class Form extends Component{
  constructor(){
    super()
    this.state = {
      username:'',
      comment:'',
      type: 'react'
    }
  }

  handleUser = event =>{
    this.setState({
      username: event.target.value
    })
  }

  handleComment = event =>{
    this.setState({
      comment: event.target.value
    })
  }

  handleType = event =>{
    this.setState({
      type: event.target.value
    })
  }

  handleSubmit= event =>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.type}`)
    event.preventDefault()
  }

  render(){
    const {username,comment, type} = this.state
    return(
      <div>
      <form onSubmit = {this.handleSubmit}>
          <h2>Fill the form</h2>
          <label>Username</label>
          <input type='text' value ={username} onChange = {this.handleUser}/>

          <div >
          <label>Comment</label>
          <textarea value = {comment} onChange = {this.handleComment}></textarea>
          </div>

          <div>
          <label>Type</label>
          <select value={type} onChange = {this.handleType}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="viu">Viu</option>
          </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

    )
  }

}

export default Form
