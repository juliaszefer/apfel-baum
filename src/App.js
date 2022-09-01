import React from "react";
import Header from "./components/Header";
import HeaderPicture from "./components/HeaderPicture";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
      <>
          <Header/>
          <HeaderPicture/>
          <Services/>
          <Gallery/>
          <Contact/>
          <Location/>
          <Footer/>
      </>
  );
}

export default App;
