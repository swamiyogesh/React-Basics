import React from 'react'

function Child(props){
  return(
    <button onClick = {()=>props.eventHandler('childComponent')}>Click me</button>
  )
}

export default Child
