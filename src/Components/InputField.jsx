import React from 'react'
import { useState } from 'react';

function InputField() {
    const [val, setVal] = useState("Dheeraj");
  return (
    <div>
        <h1>Input Field Is Here!</h1>
        <input type="text" value={val} onChange={()=>setVal(event.target.value)} placeholder="Enter Your Name" />
        <h1>{val}</h1>
        <button onClick={()=>setVal("")}>Clear Value</button>
    </div>
  )
}

export default InputField