import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection.js";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <HeroSection></HeroSection>
      <AppSection></AppSection>
      <CardSection></CardSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
