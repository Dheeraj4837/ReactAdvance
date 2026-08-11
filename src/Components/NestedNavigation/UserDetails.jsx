import { Link, useParams } from "react-router";

export function UserDetails() {
    const paramsData = useParams();

  
  return (
    <div style={{ margin: "20px", fontSize: "20px" }}>
      <h1>Welcome to the User Details Page</h1>
      <p>This is the user Details page of the application.</p>
      
      <h4>User Id : {paramsData.id}</h4>
      <Link to="/users">Back</Link>
    </div>
  );
}
