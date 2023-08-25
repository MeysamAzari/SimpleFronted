import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { Image } from "react-bootstrap";
import img from "../../Images/profile.png";
import Navbarr from "./Navbar";
const Header = () => {
  return (
    <div className="head">
      <div className="row">
        <div className="col-2">
          <Image src={img} width={60} height={60} className="ml-5" />
        </div>
        <div className="col-5"></div>
        <div className="col-5">
          <Navbarr />
        </div>
      </div>
    </div>
  );
};

export default Header;
