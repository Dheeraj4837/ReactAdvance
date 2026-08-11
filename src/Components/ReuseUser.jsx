const User =({data})=>{
    console.log(data);
    
    return(
        <div
        style={{
            border: '1px solid green',
            padding: '10px',
            margin: '10px',
            width: '400px',
            borderRadius: '20px',
            fontSize: '19px',
            fontWeight: '500'
        }}
        >
            <h2>Name: <span style={{color:'green'}}>{data.Name}</span></h2>
            <h2>College: <span style={{color:'green'}}>{data.College}</span></h2>
            <h2>Email: <span style={{color:'green'}}>{data.Email}</span></h2>
            <h2>Id: <span style={{color:'green'}}>{data.Id}</span></h2>

        </div>
    )
}
export default User;