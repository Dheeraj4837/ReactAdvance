import React from 'react'
import { useState } from 'react';

function Satate() {
    const [fruit, setFruit] = useState('Apple');
    const handleFruits = ()=>{
        setFruit('Banana');
    }

  return (
    <div>
        <h1>State in react Js</h1>
        <h2>{fruit}</h2>   
        <button onClick={handleFruits}>Change Fruits</button> 

    </div>
  )
}

export default Satate