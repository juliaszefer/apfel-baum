import React from "react";

export default function Footer(){
    return(
      <footer>
          <div className="leftSide">
              <div className="apfel">
                  <p>Apfel Baum</p>
                  <p>Maciej Jabłoński</p>
              </div>
              <div className="lipowa">
                  <p>ul. Lipowa</p>
                  <p>58-573 Piechowice</p>
              </div>
          </div>
          <div className="rightSide">
              <p>Copyright <i className="fa-regular fa-copyright"/> Apfel Baum</p>
              <p>NIP: 611 221 91 61</p>
              <p>Made by <a href={"https://github.com/juliaszefer"}>Julia Szefer</a></p>
          </div>
      </footer>
    );
}