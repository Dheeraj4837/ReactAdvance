function UserPfunction({displayName, name, getUser}){
    // Child component can call the parent component function by using props. Here, we are passing the function as a prop to the child component and calling it on button click.
    return(
        <div>
            
            <button onClick={()=>displayName(name)}>Display Name</button>
            <button onClick={()=>getUser()}>Get User</button>
        </div>
    )
}

export default UserPfunction;