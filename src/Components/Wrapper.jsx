

function Wrapper({children, color="green"}){
    return(
        <div style={{
            color:color, border:"2px solid green", width:"300px", 
            fontSize: "40px", margin:"20px"
        }}>
            {children}
        </div>
    )
}
export default Wrapper;