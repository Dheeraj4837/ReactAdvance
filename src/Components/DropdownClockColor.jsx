import Clock from "./Clock";
import { useState } from "react";
function DropdownClockColor(){
    const [color, setColor] = useState("green");
    return(
        <div>
            <h1>Digital Clock in React Js </h1>
            <select onChange={(event)=>setColor(event.target.value)}>
                <option value={"green"}>Green</option>
                <option value={"red"}>Red</option>
                <option value={"blue"}>Blue</option>
                <option value={"orange"}>Orange</option>
            </select>
            <Clock color={color} />
        </div>
    )
}
export default DropdownClockColor;