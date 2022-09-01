import React from "react";

export default function Contact(){
    return (
        <section className={"contact"}>
            <h1 id={"contact"}>Chcesz dowiedzieć się więcej?</h1>
            <div className="information">
                <div className="mail">
                    <i className="fa-regular fa-envelope"/>
                    <p>mojoptymal@gmail.com</p>
                </div>
                <div className="phoneNumber">
                    <i className="fa-solid fa-phone"/>
                    <p>792 363 542</p>
                </div>
                <div className="address">
                    <i className="fa-solid fa-map-location-dot"/>
                    <p>ul. Piłsudskiego 6, 59-850 Świeradów Zdrój</p>
                </div>
            </div>
        </section>
    );
}