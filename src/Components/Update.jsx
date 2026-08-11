import React from "react";
import { useState } from "react";

function Update() {
  const [data, setData] = useState({
    name: "Dheeraj",
    address: {
      city: "Patna",
      country: "India",
    },
  });
  const handleName = (val) => {
    data.name = val;

    setData({ ...data });
  }
  const handleCity = (city)=>{
    data.address.city = city;
    console.log(city);
    setData({...data,address:{...data.address}})
  }
  const handleCountry= (country)=>{
    data.address.country =country;
    setData({...data,address:{...data.address}})
  }
  return (
    <div>
      <h1>Update Object in State</h1>

      <input
        type="text"
        placeholder="Update Names"
        onChange={(event) => handleName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Update City"
        onChange={(event) => handleCity(event.target.value)}
      />
      <input
        type="text"
        placeholder="Update Country"
        onChange={(event) => handleCountry(event.target.value)}
      />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>City: {data.address.country}</h2>
    </div>
  );
}

export default Update;
