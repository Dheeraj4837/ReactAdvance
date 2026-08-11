import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function UseEffect() {
     const [counter, setCounter] = useState(0);
     const [data, setData] = useState(0);

     useEffect(()=>{
        //  callOnce();
        counterfunction();

     },[counter])

     function counterfunction(){
        console.log("Counter function",{counter});
     }
    function callOnce(){
        console.log("CallOnce function called")
        
    }
  return (
    <div>
        <h1>UseEffect Hooks</h1>
        <button onClick= {()=>setCounter(counter+1)}>Counter:{counter}</button>
        <button onClick={()=>setData(data+1)}>Data:{data}</button>
    </div>
  )
}

export default UseEffect