import React, {useState} from "react";
import jeden from "../assets/1.jpg";
import dwa from "../assets/3.jpg";
import trzy from "../assets/4.jpg";
import cztery from "../assets/5.jpg";

export default function Gallery(){
    const [photo, setPhoto] = useState(jeden);

    const handleClickRight = () => {
        if(photo === jeden){
            setPhoto(dwa);
        }else if(photo === dwa){
            setPhoto(trzy);
        }else if(photo === trzy){
            setPhoto(cztery);
        }else if(photo === cztery){
            setPhoto(jeden);
        }
    }

    const handleClickLeft = () => {
        if(photo === jeden){
            setPhoto(cztery);
        }else if(photo === dwa){
            setPhoto(jeden);
        }else if(photo === trzy){
            setPhoto(dwa);
        }else if(photo === cztery){
            setPhoto(trzy);
        }
    }

    return (
      <section className={"gallery"}>
          <div className="sectionName" id={"gallery"}>
              <div className="miniStripe"/>
              <p>GALERIA</p>
              <div className="miniStripe"/>
          </div>
          <div className="carouselBox">
              <div className="carousel">
                  <img src={photo} alt={"gallery"}/>
                  <div className="arrow1">
                      <i className="fa-solid fa-angle-left" onClick={handleClickLeft}/>
                  </div>
                  <div className="arrow2">
                      <i className="fa-solid fa-angle-right" onClick={handleClickRight}/>
                  </div>
              </div>
          </div>
      </section>
    );
}