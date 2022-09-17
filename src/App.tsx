import React from 'react';
import './App.css';

import Person from "./components/Person";
import Greeting from "./components/Greeting";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Header from "./components/Header";
import Oscar from "./components/Oscar";
import { EventProps } from "./components/EventProps";


function App() {

  // object 
  const personDetail = {
    name: "Khalil Ahmad",
    age: 22,
    address: "Main Str. 12",
    phone: "0122332343",
    email: "khail@gmail.com"
  };

  // array
  const personList = [
    {
      firstName: "Khalil",
      lastName: "Ahmad"
    },
    {
      firstName: "Ahmad Shad",
      lastName: "Mohammad"
    },
    {
      firstName: "Kazim",
      lastName: "Radfar"
    },
    {
      firstName: "Sami",
      lastName: "Ahmadi"
    }
  ];

  // handleClick does not receve any event as props
  const noEventClick = () => {
    alert("Now event is passed");
  };

  // handleEventClick recives mouse event with another arguments as id 
  const handleEventClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log(event);
    console.log(id);
  };


  // jsx
  return (
    <div style={{padding:'20px'}}>
      {/* pass a string, number and boolean */}
      <Greeting name="Khalil" messageCount={12} isLoggedIn={true} />
      <hr />

      {/* pass an object */}
      <Person detail={personDetail} />
      <hr />

      {/* pass an arrray */}
      <PersonList list={personList} />
      <hr />

      {/* 
        pass a stric status as success, error, loading.
        any value rather than above values will give type error.
      */}
      <Status status="success" />
      <hr />

      {/* pass a ReactNode */}
      <Header>This is a heading in header</Header>
      <hr />

      {/* passa nested reactNode */}
      <Oscar>
        <Header>Oscar goes for him!</Header>
      </Oscar>
      <hr />
      
      {/* pass optional props */}
      <Greeting name=", messageCount is not passed" isLoggedIn={true} />
      <hr />


      {/* recive mouse events */}
      <EventProps
        noEventClick={noEventClick}
        handleEventClick={(event, id) => handleEventClick(event, id)}
      />
    </div>
  );
}

export default App;
