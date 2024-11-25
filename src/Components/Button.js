import React from 'react'

function Button(props) {
    console.log("Button")
  return (
    <button onClick={()=>{console.log(props.name)}}> Click me</button>
  )
}

export default React.memo(Button) 
