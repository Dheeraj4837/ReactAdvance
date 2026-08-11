import React from 'react'
import { useTransition } from 'react';

function UseTransition() {
    const [pending, startTransition] =useTransition();

    const handleButton = ()=>{
        startTransition(async() =>{
           await new Promise(res =>setTimeout(res, 5000))
           console.log("Submit");
           

        })
    }

  return (
    <div>
        <h1>UseTransition in React js</h1>
        {
            pending?
            <img style={{width:'500px'}} src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTRsN3l5azZjbWl6NWloc2NvYTUyYmN5ejhzd3Ayd2N6bTNldWtobCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.gif" alt="" />
            :null
        }
        <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  )
}

export default UseTransition;