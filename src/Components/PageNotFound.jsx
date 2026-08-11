import {Link} from 'react-router'
export function PageNotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div>
        <Link to='/'>Goto Home page</Link>
        

      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvTEtz0uvIWvEglF33uGLb9-n5KFH94KGEdzvB0xd4qkwOgy-iAbYYeJL&s=10"
        alt=""
      />
    </div>
  );
}
