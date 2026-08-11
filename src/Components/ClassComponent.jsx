import StudentContext from "./StudentContext";


export default function ClassComponent(){
    return(
        <div style={{backgroundColor: 'skyblue', padding: '20px'}}>
            <h1>ClassComponent Component</h1>
            <StudentContext />
        </div>
    )
}