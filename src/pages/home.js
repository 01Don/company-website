import React from "react";
import NavBar from "../components/NavBar";
import "./home.css";
import Homecontent from "../components/homecontent";
import Logos from "../components/logos";
import Idealhome from "./idealhome";
import Footer from "../components/footer";
function home() {
  return (
    <header className="App">
      <NavBar />
      <Homecontent />
      <Logos />
      <Idealhome />
      <Footer />
    </header>
  );
}

export default home;
