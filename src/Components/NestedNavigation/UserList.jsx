import { Link } from "react-router";

export function UserList() {
    const userData = [
      { id: 1, name: "Dheeraj" },
      { id: 2, name: "Alice" },
      { id: 3, name: "Bob" },
        { id: 4, name: "Charlie" },
        { id: 5, name: "Diana" },
    ];
    
  return (
    <div style={{margin:'20px', fontSize:'20px'}}>
        {/* Dynamic Routing is used in this page. Click on the user name to see the details of the user. */}
      <h1>Welcome to the User List Page</h1>
      <p>This is the user list page of the application.</p>
      {
        userData.map((item)=>(
            <div>
                <h4><Link to={"/users/" + item.id}>{item.name}</Link></h4>
            </div>
        ))
      }

      <h1>Welcome to the User List Page with Nmae</h1>
      <p>This is the user list page With Name of the application.</p>
      {
        userData.map((item)=>(
            <div>
                <h4><Link to={"/users/" + item.id +"/"+ item.name}>{item.name}</Link></h4>
            </div>
        ))
      }
     
    </div>
  );
}