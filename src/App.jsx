import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import API from "./Components/API";
import Satate from "./Components/Satate";
import Toggle from "./Components/Toggle";
import MultipleCondition from "./Components/MultipleCondition";
import Props from "./Components/Props";
import ArrayPropps from "./Components/ArrayPropps";
import InputField from "./Components/InputField";
import ControlledComponents from "./Components/ControlledComponents";
import HandleCheckbox from "./Components/HandleCheckbox";
import HandleRadiobtn from "./Components/HandleRadiobtn";
import Loop from "./Components/Loop";
import ReuseComp from "./Components/ReuseComp";
import Clock from "./Components/Clock";
import DropdownClockColor from "./Components/DropdownClockColor";
import Nestedloop from "./Components/Nestedloop";
import UseEffect from "./Components/UseEffect";
import CssModules from "./Components/CssModules";
import UseReffHooks from "./Components/UseReffHooks";
import UncontrolledComponent from "./Components/UncontrolledComponent";
import PassFunction from "./Components/PassFunction";
import ForwardRef from "./Components/ForwardRef";
import UseForm from "./Components/Useform";
import UseTransition from "./Components/UseTransition";
import DerivedState from "./Components/derivedState";
import LiftingState from "./Components/LiftingState";
import Update from "./Components/Update";
import UpdateArrayState from "./Components/UpdateArrayState";
import UseActionState from "./Components/UseActionState";
import UseIdHooks from "./Components/UseIdHooks";
import ContextAPI from "./Components/ContextAPI";
import CutomeHook from "./Components/CutomeHook";
import { Link, Navigate, Route, Routes } from "react-router";
import { Home } from "./Components/NestedNavigation/Home";
import { About } from "./Components/NestedNavigation/About";
import { PageNotFound } from "./Components/PageNotFound";
import NavBar from "./Components/NestedNavigation/NavBar";
import { Login } from "./Components/NestedNavigation/Login";
import { College } from "./Components/NestedNavigation/College";
import { Student } from "./Components/NestedNavigation/Student";
import { Department } from "./Components/NestedNavigation/Department";
import { Details } from "./Components/NestedNavigation/Details";
import { UserList } from "./Components/NestedNavigation/UserList";
import { UserDetails } from "./Components/NestedNavigation/UserDetails";

function App() {
  return (
    <>
      <Navbar />
      {/* <API/> */}
      {/* <Satate/> */}
      {/* <Toggle/> */}
      {/* <MultipleCondition/> */}
      {/* <Props/> */}
      {/* <ArrayPropps/> */}
      {/* <InputField /> */}
      {/* <ControlledComponents /> */}
      {/* <HandleCheckbox /> */}
      {/* <HandleRadiobtn /> */}
      {/* <Loop /> */}
      {/* <ReuseComp /> */}
      {/* <DropdownClockColor /> */}
      {/* <Nestedloop /> */}
      {/* <UseEffect /> */}
      {/* <CssModules /> */}
      {/* <UseReffHooks /> */}
      {/* <UncontrolledComponent /> */}
      {/* <PassFunction /> */}
      {/* <ForwardRef /> */}
      {/* <UseForm /> */}
      {/* <UseTransition /> */}
      {/* <DerivedState /> */}
      {/* <LiftingState /> */}
      {/* <Update /> */}
      {/* <UpdateArrayState /> */}
      {/* <UseActionState /> */}
      {/* <UseIdHooks /> */}
      {/* <ContextAPI /> */}
      {/* <CutomeHook /> */}
      {/*
     <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
*/}
      {/* <NavBar /> */}
      
      {/* Layout and index routes */}
      <Routes>
        <Route element={<NavBar />}>

        <Route path="/users/list?" element={<UserList />} />

        <Route  path="/users/:id/:name?" element={<UserDetails />} />

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/college" element={<College />}>
          <Route index  element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
