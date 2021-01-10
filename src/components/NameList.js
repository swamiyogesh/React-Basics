import React, {Component} from 'react'
import Person from './Person'

class NameList extends Component {
  render(){
    const persons = [
      {
        id:1,
        name: 'yogesh',
        age: 21
      },
      {
        id:2,
        name:'swami',
        age: 22
      }
    ]

    const personList = persons.map(person=><Person key={person.id} person = {person} />)
    return(<div>{personList}</div>)
  }


}

export default NameList
