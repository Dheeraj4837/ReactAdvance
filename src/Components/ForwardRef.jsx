import { useRef } from "react";
import ForwardChildcomp from "./ForwardChildcomp";

function ForwardRef(){
    const inputRef = useRef(null);

    const UpdateInput = ()=>{
        console.log("hello");
        inputRef.current.value='Dheeraj';
        inputRef.current.focus();
        inputRef.current.style.color='red';
        
    }
    return(
        <div>
            <h1>Forward Ref in React</h1>
            <ForwardChildcomp ref={inputRef}/>
            <button onClick={UpdateInput}>Update Input Field</button>

        </div>
    )
}
export default ForwardRef;