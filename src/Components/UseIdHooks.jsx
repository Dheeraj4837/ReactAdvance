import React from 'react'
import { useId } from 'react'

function UseIdHooks() {
  return (
    <div>
        <h1>UseId Hooks in react Js</h1>
        <UserForm />
        <hr />
        <UserForm />
    </div>
  )
}

export default UseIdHooks

function UserForm() {
    const name = useId();
    const password = useId();
    const skills = useId();
    const terms = useId();

    return(
        <div>
            <form action="">
            <label htmlFor={name}>Enter User Name: </label>
            <input type="text" id={name} placeholder='Enter Name' />
            <br /><br />

            <label htmlFor={password}>Enter Password: </label>
            <input type="password" id={password} placeholder='Enter Password' />
            <br /><br />

            <label htmlFor={skills}>Enter Skills: </label>
            <input type="text"  id={skills} placeholder='Enter Skills' />
            <br /><br />

            <label htmlFor={terms}>Terms & condition</label>
            <input type="checkbox"  id={terms} />

        </form>
        </div>
    )
}