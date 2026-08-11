import React from 'react'
import { useActionState } from 'react'

function UseActionState() {
    const handleSubmit =async (previousData, formData)=>{
        let name = formData.get('name');
        let password = formData.get('password');
        
        await new Promise (res => setTimeout(res, 2000));
        console.log("handleSubmit", name, password);

        if(name && password){
            return {message: 'Data submitted successfully' , name,password};
        }else{
            return {error: 'Data not Submitted. Enter proper Data', name,password};
        }
    }


    const [data, action, pending]= useActionState(handleSubmit, undefined)
    console.log(data);
    
  return (
    <div>
        <h1>Use Action State in React JS</h1>
        <form action={action}>
            <input type="text" defaultValue={data?.name} placeholder='Enter Name' name='name' />
            <br /><br />
            
            <input type="password" defaultValue={data?.password} placeholder='Enter Password' name='password' />
            <br /><br />
            <button disabled={pending}>Submit data</button>
            <br />
            {
                data?.error && <span style={{color: 'red'}}>{data?.error}</span>
            }
            {
                data?.message && <span style={{color:'green'}}>{data?.message}</span>
            }
        </form>
        <h1>Name: {data?.name}</h1>
        <h1>Password: {data?.password}</h1>
    </div>
  )
}

export default UseActionState