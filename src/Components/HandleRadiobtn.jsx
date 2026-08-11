import { useState } from "react";

function HandleRadiobtn() {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState('Delhi')
  return (
    <div className="text-center p-5 text-2xl">
      <h1>Handle Radio Button</h1>
      <h4>Select Gender:</h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="male"
        value={"male"}
        checked={gender== "male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        value={"female"}
        name="gender"
        id="female"
        checked={gender == "female"}
      />
      <label htmlFor="female">Female</label>

      <h5>Selected Gender: {gender}</h5>


      <br /><br /><br />
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={'Delhi'}>
        <option value="Patna" >Patna</option>
        <option value="Delhi">Delhi</option>
        <option value="Gaya">Gaya</option>
      </select>
      <h5 >Selected City : {city}</h5>
    </div>
  );
}
export default HandleRadiobtn;
