import React from "react";
import angioVue from "../assets/AngioVue.png";
import maszyna from "../assets/maszyna.png";
import optimis from "../assets/optimis.png";

export default function Services(){
    return (
        <section className={"services"}>
            <div className="sectionName" id={"services"}>
                <div className="miniStripe"/>
                <p>USŁUGI</p>
                <div className="miniStripe"/>
            </div>
            <div className="infoBoxes">
                <div className="box1">
                    <div className="textBox">
                        <p>Specjalistyczne konsultacje, okulista, optometrysta Rozpoznanie i leczenie chorób oczu m.in. chorób soczewki, rogówki, naczyniówki, siatkówki, nerwu wzrokowego, zaburzeń akomodacji i refrakcji, jaskry, zaćmy, AMD. Diagnostyka i leczenie schorzeń okulistycznych, towarzyszącym różnym chorobom, m.in. cukrzycy, nadciśnieniu, chorobie reumatycznej</p>
                        <div className="stripe"/>
                    </div>
                    <div className="photoBox">
                        <div className="square">
                            <div className="imgBox">
                                <img src={maszyna} alt={"machine"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="photoBox">
                        <div className="circle">
                            <div className="imgBox">
                                <img src={optimis} alt={"optimis"}/>
                            </div>
                        </div>
                    </div>
                    <div className="textBox">
                        <h1>DIAGNOSTYKA</h1>
                        <p>Badanie HRT, Badanie OCT/SOCT Badanie USG, Angiografia bezkontrastowa nieinwazyjna Perymetria komputerowa, Pomiar ciśnienia wewnątrzgałkowego Pachymetria, Autorefraktometr</p>
                        <div className="stripe1"/>
                    </div>
                </div>
                <div className="box1">
                    <div className="textBox">
                        <h1>LASEROTERAPIA</h1>
                        <p>Laser mikropulsacyjny EasyRet Technologia lasera światłowodowego 577nm SingleSpot, MultiSpot, Subliminal do siatkówek Laser YAG do kapsulotomii i irydotomii Laser SLT/MLT</p>
                        <div className="stripe2"/>
                    </div>
                    <div className="photoBox">
                        <div className="square1">
                            <div className="imgBox">
                                <img src={angioVue} alt={"angioVue"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}