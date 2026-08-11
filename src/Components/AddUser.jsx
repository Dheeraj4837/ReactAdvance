import React from 'react'

function AddUser({setUser}) {
  return (
    <div>
        <h1>Lifting State</h1>
        <h2>Add User</h2>
        <input type="text"onChange={(event)=>setUser(event.target.value)} placeholder='Add user' />
        <br />
        <br />
        <hr />
    </div>
  )
}

export default AddUser