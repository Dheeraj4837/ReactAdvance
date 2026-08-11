import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'


function API() {
    const [usersData, setUsersData] = useState([]);
    useEffect(()=>{
        getUsersData();

    },[])

    async function getUsersData(){
        const url = "https://dummyjson.com/users";
        let response = await fetch(url)
        response = await response.json()

        setUsersData(response.users)
        
    }
    console.log(usersData);
  return (
    <div>
        <h1 className='text-center text-2xl'>Fetch data from API</h1>
        <ul className='flex justify-around border m-0 p-2 font-bold text-2xl'>
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Age</li>
                </ul>
        {
            usersData && usersData.map((user)=>{
                return <ul className='flex justify-around border m-0 p-2 '>
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    <li>{user.age}</li>
                </ul>
            })
        }
    </div>

  )
}

export default API