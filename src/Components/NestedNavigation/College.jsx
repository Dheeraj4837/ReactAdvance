import { Link, NavLink, Outlet } from "react-router";

export function College() {
  return (
    <div className="SubNavbar">
      <h2><Link to="/"> Go Back to Home</Link></h2>
      <h1>College</h1>
      <p>This is the college page of the application.</p>
      <div className="college">
        <NavLink className="link" to="">Student</NavLink>
        <NavLink className="link" to="department">Department</NavLink>
        <NavLink className="link" to="details">College Details</NavLink>
        <Outlet />
      </div>
    </div>
  );
}
