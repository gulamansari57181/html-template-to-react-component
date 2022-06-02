import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AppSection></AppSection>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
