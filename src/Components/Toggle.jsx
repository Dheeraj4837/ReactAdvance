import React from 'react'
import { useState } from 'react'

function Toggle() {
    const [display, setDisplay] = useState(true)

  return (
    <>
    <h1>
        Toggle Or Hide and show
    </h1>
    <button onClick={()=>setDisplay(!display)}>Toggle</button>

    {
        display?<h1>Dheeraj</h1>:null
    }

     </>
  )
}

export default Toggle