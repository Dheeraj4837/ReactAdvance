import React from "react";
import { useState } from "react";
function DerivedState() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleAddUser = () => {
    setUsers([...users, user]);
    
  }
  // Derived State
  const total= users.length;
  const last = users[users.length -1];
  const unique = [...new Set(users)].length
  return (
    <div>
      <h1>Derived State in React</h1>
      <h1>Total Users: {total}</h1>
      <h1>Last Users: {last}</h1>
      <h1>Total Unique Users: {unique}</h1>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Add User Name"
      />
      <button onClick={handleAddUser}>Add User</button>

      {users.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  );
}
export default DerivedState;
