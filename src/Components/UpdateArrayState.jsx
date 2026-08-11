import React, { useState } from 'react'

function UpdateArrayState() {
    const [data, setData] = useState([
        'dj', 'mahima', 'mili', 'golu'
    ])
    const [dataDetails, setDataDetails] = useState([
        {name: 'Dheeraj', age: 24 },
        {name: 'Don', age: 20 },
        {name: 'Mili', age: 24 },
        {name: 'Golu', age: 24},
    ])
    const HandleUser = (name)=>{
        data[data.length-1] = name;
        console.log(name);
        setData([...data])
        
    }
    const handleUserAge = (age)=>{
        dataDetails[dataDetails.length-1].age = age;
        setDataDetails([...dataDetails])
    }
  return (
    <div>
        <h1>Updating Array in State</h1>
        <input type="text" placeholder='Update Last user Name'
        onChange={(event)=>HandleUser(event.target.value)} />
        {
            data.map((item, index)=>(
                <h2 key={index}>{item}</h2>
            ))
        }
        <hr />
        <input type="text" placeholder='Update last User age'
        onChange={(event)=>handleUserAge(event.target.value)} />
        {
            dataDetails.map((item, index)=>(
                <h2 key={index}>{item.name}, {item.age}</h2>
            ))
        }

    </div>
  )
}

export default UpdateArrayState