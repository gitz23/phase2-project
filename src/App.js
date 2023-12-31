import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Addcar from "./components/AddCar";
import Carpage from "./components/Carpage";
import { Route, Routes } from "react-router-dom";
import Yard from "./components/Yard";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

function App() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/cars")
      .then((r) => r.json())
      .then((data) => {
      console.log(data);
      setCars(data);
      });
    }, []);

    // function handle sort for the yard page
    function Search(obj) {
    return <div></div>;
    }

    //function for added car input
    function addCar(newCar){
      return(
        fetch("http://localhost:3000/cars", {
          method: "POST",
            headers: {
               "Content-type": "application/json"
              },
            body: JSON.stringify(newCar)}
      )
      .then((r)=> r.json())
      .then((data) =>{
        setCars(data)
        console.log(data)
      })
      )
    }

    return (
    <Routes>
      <Route exact path="/carpage/:carID" element={<Carpage car={cars} />} />
      <Route exact path="/" element={<Homepage car={cars} />} />
      <Route exact path="/yard" element={<Yard car={cars} />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/addcar" element={<Addcar onAdd={addCar}/>} />
    </Routes>
    );
}

export default App;