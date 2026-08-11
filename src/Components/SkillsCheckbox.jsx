import { useState } from "react";

function SkillCheckbox(){
    const [skills, setSkills]= useState([]);

    const handleSkills = (event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
        
    }
    return(
        <div className="text-center p-5 font-bold">
            <h1>Skill CheckBox!</h1>
            <input type="checkbox" onChange={handleSkills} id="php" value="php"  />
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="java" value="java" />
            <label htmlFor="java">Java</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="node" value="node" />
            <label htmlFor="node">Node</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="Js" value="Js" />
            <label htmlFor="Js">JS</label>

            <h3>{skills.toString()}</h3>

        </div>
    )
}
export default SkillCheckbox;