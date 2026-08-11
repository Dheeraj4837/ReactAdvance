function Student({student}){
    return(
        <div style={
            {
                backgroundColor: "#1111",
                padding: "20px",
                borderBottom: "2px solid #000",
                margin: "10px",
                borderRadius: "20px"
                

            }
        }>
            <h1>Student</h1>
                    {
                    student.map((stud, index)=>(
                        <ul>
                            <li>
                               Name : {stud.Name} - Age: {stud.Age}
                            </li>
                        </ul>

                    ))
                
                }
        </div>
    )
}
export default Student;