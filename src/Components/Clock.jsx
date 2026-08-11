import { useEffect } from "react";
import { useState } from "react";
function Clock({color}){

    const [time, setTime] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [])
    return(
        <div style={{
            color: color,
            backgroundColor: "black",
            width: '180px',
            padding:'5px',
            margin:'15px',
            borderRadius:'5px'


        }}>
            <h1>{time}</h1>
        </div>
    )
}
export default Clock;