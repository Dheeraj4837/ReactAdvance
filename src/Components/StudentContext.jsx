import Subject from "./Subject";

export default function StudentContext(){
    return(
        <div style={{backgroundColor: 'green', padding: '20px'}}>
            <h1>Student Component</h1>
            <Subject />
        </div>
    )
}