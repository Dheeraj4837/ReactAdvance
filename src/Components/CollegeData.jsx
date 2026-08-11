import Student from "./Student";

function CollegeData({collegeProps}){
    console.log(collegeProps);
    
    return(
        <div style={
            {
                backgroundColor: "#ccc",
                padding: "20px",
                borderBottom: "2px solid #000",
                margin: "20px",
                borderRadius: "20px"

            }
        }>
            
            <h1>Name: {collegeProps.Name}</h1>
            <ul>
                <li>
                    <h2>City: {collegeProps.City}</h2>
                </li>
                <li>
                    <h2>Website: {collegeProps.Website}</h2>
                </li>
                
                <li>

                    <Student student = {collegeProps.StudentData} />
                </li>
            </ul>


        </div>
    )
}
export default CollegeData;