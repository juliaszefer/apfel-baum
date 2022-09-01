import React from "react";

export default function Location(){
    return (
      <section className={"location"}>
          <iframe
              src = {"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.900813524277!2d15.33677141548769!3d50.90705136224031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ed3975ad83d65%3A0x77fe77411feb60a0!2zUGnFgnN1ZHNraWVnbyA2LCA1OS04NTAgxZp3aWVyYWTDs3ctWmRyw7Nq!5e0!3m2!1spl!2spl!4v1661720917633!5m2!1spl!2spl"}  style = {{border : 0, width: 95+"%", height: 450+"px"}} allowFullScreen="" loading="lazy"
              referrerPolicy = {"no-referrer-when-downgrade"}/>
      </section>
    );
}