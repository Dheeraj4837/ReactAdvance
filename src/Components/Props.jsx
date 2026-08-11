import React from 'react'
import PropsUser from './PropsUser'
import ArrayPropps from './ArrayPropps';
import ClickEventProps from './ClickEventProps';
import { useState } from 'react';
import DefaultProps from './DefaultProps';
import Wrapper from './Wrapper';

function Props() {
  let userName = "Mahima Singh";
  let userAge = 50;
  let userEmail = "Lol@gmail.com";

  let userObject = {
    name: "Mili Singh",
    age: 70,
    email: "mililoli@gmail.com"
  }
  let userObject2 = {
    name: "Mili lol",
    age: 40,
    email: "mililoli@gmail.com"
  }
  let collegeName= ['DU', 'NIT', 'IIt', 'JU'];

  const [Student, setStudent] = useState()

  return (
    <div>
        <h1>Props In react Js</h1>
        {/* <PropsUser name="Dheeraj" age={24} email="dj@gmail.com"  / > */}
        {/* <PropsUser name={userName} age={userAge} email={userEmail} /> */}
        
        <ArrayPropps names={collegeName}/>

         {Student && <ClickEventProps name={Student}/>}
         
         <button onClick={()=> setStudent('Dheema')}>Update Student Name</button>

        <PropsUser user={userObject} />
        <PropsUser user={userObject2} />

        <DefaultProps name="M singh" />
        <DefaultProps  />

        <Wrapper color="orange">
          <h1>Hello Everyone!</h1>
        </Wrapper>
        <Wrapper>
          <h1>Hello Guys!</h1>
        </Wrapper>
        <Wrapper color="blue">
          <h1>Hello Admin!</h1>
          <h2 style={{color:"red"}}>login kar!</h2>
        </Wrapper>


    </div>
  )
}

export default Props