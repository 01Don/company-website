import React from "react";
import Logo1 from "../images/MARBERG_Real-estate_navy-1x1-1 1.png";
import Logo2 from "../images/Real-Estate-Logo-Graphics-16171628-2-580x435 1.png";
import Logo3 from "../images/DMC-logo 1.png";
import Logo4 from "../images/worldwide-real-estate-vector-logo-400x400 1.png";
import Logo5 from "../images/43233616d525353772278ecbb5c6bb48 1.png";
import "./logos.css";

function logos() {
  return (
    <div>
      <div className="line1"></div>
      <div className="logo-container">
        <div>
          {" "}
          <img src={Logo1} alt="logo1" className="logo1" />
          <img src={Logo2} alt="logo2" className="logo2" />
        </div>
        <div>
          {" "}
          <img src={Logo3} alt="logo3" className="logo3" />
          <img src={Logo4} alt="logo4" className="logo4" />
        </div>
        <div className="logo-5">
          <img src={Logo5} alt="logo5" className="logo5" />
        </div>
      </div>

      <div className="line2"></div>
    </div>
  );
}

export default logos;
