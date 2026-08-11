import {Link, Outlet} from "react-router"
import "./Header.css"
export default function NavBar(){
    return (
        <div>
            <div className="header">
            <div>
            <Link className="link" to={"/"}><h1>Logo</h1></Link>

            </div>
            <div>
                <ul>
                    <li><Link className="link" to={"/"}>Home</Link></li>
                    <li><Link className="link" to={"/About"}>About</Link></li>
                    <li><Link className="link" to={"/login"}>Login</Link></li>
                    <li><Link className="link" to={"/college"}>College</Link></li>
                    <li><Link className="link" to={"/users"}>Users</Link></li>

                </ul>
            
            </div>
        </div>
        <Outlet />
        </div>
    
    )
}