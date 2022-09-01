import React from "react";
import sklep from "../assets/sklep.jpg";

export default function HeaderPicture(){
    return (
      <section className={"headerPicture"}>
          <img src={sklep} alt={"optics"}/>
      </section>
    );
}