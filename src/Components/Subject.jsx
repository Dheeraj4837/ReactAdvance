import { useContext } from "react"
import { SubjectCont } from "./ContextData"

export default function Subject(){
    const subject =useContext(SubjectCont)
    return(
        <div style={{backgroundColor: 'red', padding: '20px'}}>
            <h1>Subject is: {subject}</h1>
        </div>
    )
}