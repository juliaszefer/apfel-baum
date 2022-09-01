import React from "react";
import logo from "../assets/logo.png";

export default function Header() {

    function scrollToUslugi() {
        const divElement = document.getElementById('services');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToGaleria() {
        const divElement = document.getElementById('gallery');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToContact() {
        const divElement = document.getElementById('contact');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <header>
                <div className="logoBox">
                    <img src={logo} alt={"logo"}/>
                    <p>Apfel<span>Baum</span></p>
                </div>
                <div className="buttonsBox">
                    <button onClick={scrollToUslugi}>USŁUGI</button>
                    <button onClick={scrollToGaleria}>GALERIA</button>
                    <button onClick={scrollToContact}>KONTAKT</button>
                </div>
            </header>
        </>
    );
}