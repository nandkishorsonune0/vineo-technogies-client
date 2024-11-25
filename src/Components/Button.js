import React, { useContext } from 'react'
import { NameContext } from './Context'
function Button() {
  const {name}=useContext(NameContext)
    console.log("Button rendered")
  return (
    <button onClick={()=>{console.log({name})}}> Click me</button>
  )
}

export default React.memo(Button) 
