import React from 'react'
import { useRef } from 'react'

function UseReffHooks() {
    const inputRef = useRef(null);
    const h1ref = useRef(null);

    function inputHandler(){
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color='red';
        inputRef.current.value='123';
        inputRef.current.placeholder='Enter Your Password';
        
    }
    const toggleHandler = ()=>{
        console.log(inputRef);
        if (inputRef.current.style.display!='none') {
            inputRef.current.style.display='none';
            
        }else{
            inputRef.current.style.display='inline';
        }

    }
    const h1Handler = ()=>{
        h1ref.current.style.color='blue';
        h1ref.current.style.backgroundColor='yellow';
        h1ref.current.style.padding='10px';
        h1ref.current.style.borderRadius='10px';
        h1ref.current.style.width='300px';
        h1ref.current.style.margin='20px';

    }
  return (
    <div>
        
        <h1>UseReffHooks</h1>
        <button onClick={toggleHandler}> Toogle</button>

        <input ref={inputRef} type="text" placeholder='Enter Your Name' />
        <button onClick={inputHandler}>Focus on Input Field</button>

        <h1 ref={h1ref}>Code Step by Step</h1>
        <button onClick={h1Handler}>Handler H1</button>
    </div>
  )
}

export default UseReffHooks