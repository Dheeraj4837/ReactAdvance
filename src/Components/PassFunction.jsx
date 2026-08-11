import UserPfunction from "./UserPfunction";

function PassFunction(){
    const displayName= (name)=>{
        alert(name)
    }

    const getUser = ()=>{
        alert("Get User Function Called")
    }

    return(
        <div>
            <h1>Call Parent Component Function from Child Component</h1>
            <UserPfunction displayName={displayName} name="dheeraj" getUser={getUser} />
            <UserPfunction displayName={displayName} name="Sam" getUser={getUser} />
            <UserPfunction displayName={displayName} name="Spider" getUser={getUser} />
        </div>
    )

}
export default PassFunction;