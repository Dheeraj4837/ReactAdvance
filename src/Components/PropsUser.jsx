import React from "react";

/*
function PropsUser({ name, age, email }) {
  
  return (
    <div>
      <h1>User Components</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
}
  */

function PropsUser({user}){
    return(
        <div>
            <hr />
            <h1>User Components</h1>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    )
}

export default PropsUser;
