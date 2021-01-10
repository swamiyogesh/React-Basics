import React from 'react'

function Person({person}){
  return(
    <div>
      <h2>My name is {person.name} and age is {person.age}</h2>
    </div>
  )
}

export default Person
