import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Homepage from "./components/Homepage";
import Filterbar from './components/Filterbar';
import Footer from './components/Footer';

function App() {

  const [cars, setCars] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/cars")
    .then((r)=> r.json())
    .then(data =>{
      console.log(data)
      setCars(data)
    })
  }, [])

  function handleDelete(id){
    return (
      setCars(cars.filter((car) => car.id !== id))
      )
  };

  const eachCar = cars.map((car)=>{
    return(

      <Homepage
       key={car.id}
        car={car}
        onDelete={() => handleDelete(car.id)}
      />
  
    )
  })

  return (
    <div className="App">
      <h1>Hi</h1>
          <div className='biggerDiv'>
          {eachCar}
          </div>
          <Footer/>
          
    </div>
  );


}

export default App;
