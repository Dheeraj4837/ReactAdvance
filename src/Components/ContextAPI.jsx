import React from "react";
import College from "./College";
import { SubjectCont } from "./ContextData";
import { useState } from "react";

function ContextAPI() {
    const [subject, setSubject] = useState('')
  return (
    <div style={{ backgroundColor: "yellow", padding: "20px" }}>
      <SubjectCont.Provider value={subject}>
        <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
            <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="English">Enlgish</option>
            <option value="Bio">Bio</option>
            <option value="Science">Science</option>
        </select>
        <button onClick={()=>setSubject('')}>Clear Subject</button>
        <h1>Context API in React</h1>
        <College />
      </SubjectCont.Provider>
    </div>
  );
}

export default ContextAPI;
