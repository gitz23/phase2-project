import React, { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";


export default function Carpage({ car }){
    //const [Car, setCar] = useState();

    let { carID } = useParams();

    //ensures the cars in the json have params === the elementsId(carsId)
    let findCar = car.filter((element) => {
    return element.id === parseInt(carID);
    });

    //runs a map function for each car to display the detailed contents
    let displayWhip = findCar.map((myCar) => {
       //sets the car image
        function carImage(){
            return (
                <div>
                <img id="car-img-display" src={myCar.image_url} alt="Image" />
                </div>
            );
        };

        // function for the car price
        function carPrice(){
            return (
                <div id="car-display-price">
                    <div className="card" style={{ width: "30rem", borderRadius: "1rem" }}>
                        <div className="card-body">
                            {/* title */}
                            <h5 className="card-title" style={{ textAlign: "left", fontSize: "1.5rem" }}>
                            {myCar.car_model_year} {myCar.car} {myCar.car_model}
                            </h5>

                            {/* car price */}
                            <h5 className="card-title"> Price {myCar.price}</h5>

                            {/* button that deals with availability and changes color and text depending on the boolean value */}
                            <button href="#" style={{ width: "100%" }} className={ myCar.availability ? "btn btn-outline-success" : "btn btn-outline-danger"}>
                            {myCar.availability ? "Buy Now" : "Sold Out"}
                            </button>

                            <div id="car-boolen-values">
                                {/* remember to place the text according to true or false values */}
                                <button className={ myCar.availability ? "btn btn-success" : "btn btn-danger"}>
                                {myCar.availability ? "Available" : "Sold"}
                                </button>
                                <button className={ myCar.theft ? "btn btn-warning" : "btn btn-success"}>
                                {myCar.theft ? "Has some legal issues" : "Clean"}
                                </button>
                                <button className={ myCar.Damages ? "btn btn-danger" : "btn btn-success"} >
                                {myCar.Damages ? "Damaged" : "No Damages"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        // function for feedback
        function feedBack() {
            return (
                <div id="car-display-feedback">
                    <div className="card" style={{ width: "30rem", borderRadius: "1rem" }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: "left", fontSize: "1.5rem" }}>Reviews</h5>
                            <button href="#" style={{ width: "100%" }} className="btn btn-outline-warning">Total reviews 343</button>
                        </div>
                    </div>
                </div>
            );
        };

        // function for the safety tips component
        function safetyTips() {
            return (
                <div id="car-safety-tip">
                    <div class="card" style={{ width: "30rem", borderRadius: "1rem" }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: "center" }}>Safety Tips</h5>
                            <ul style={{ textAlign: "start" }}>
                                <li>Remember, don't send any pre-payments</li>
                                <li>Meet the seller at a safe public place</li>
                                <li>Inspect the car to make sure they meet your standards</li>
                                <li>Check all documentation and only pay if you're satisfied</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        };

        // function for displaying the car details
        function CarDetails() {
            return (
            <section>
                <div className="card">
                    <h5 style={{ textAlign: "start" }} className="card-header">{myCar.car_model_year} {myCar.car} {myCar.car_model}</h5>
                    <img src={myCar.car_logo} id="car-logo" />
                        <div className="card-body" id="car-details-card">
                            <div className="car-model">
                            <h5 className="text-muted">Model</h5>
                            <p>{myCar.car_model}</p>
                        </div>
                        <div className="car-transmission">
                            <h5 className="text-muted">Transmission</h5>
                            <p>{myCar.car_transmission}</p>
                        </div>

                        <div className="car-condition">
                            <h5 className="text-muted">Condition</h5>
                            <p> {myCar.car_condition} </p>
                        </div>

                        <div className="fuel">
                            <h5 className="text-muted">Fuel-type</h5>
                            <p>{myCar.fuel_type}</p>
                        </div>

                        <div className="color">
                            <h5 className="text-muted">Color type</h5>
                            <p>{myCar.car_color}</p>
                        </div>

                        <div className="year">
                            <h5 className="text-muted">Year</h5>
                            <p>{myCar.car_model_year}</p>
                        </div>

                        <div className="engine">
                            <h5 className="text-muted">Engine size</h5>
                            <p>{myCar.car_engine_size}</p>
                        </div>
                    </div>
                </div>
            </section>
            );
        };
        // end of carpage components

        return (
            <div>
                <div className="carDisplay">
                    {carImage()}
                    <div>
                        <div className="sideBar">{carPrice()}</div>
                        <div className="safety tips">{safetyTips()}</div>
                        <div className="feedback">{feedBack()}</div>
                    </div>
                </div>
                {CarDetails()}
            </div>
        );
    });
    console.log(displayWhip);

    return (
        <div >{displayWhip}</div>
    )
};
