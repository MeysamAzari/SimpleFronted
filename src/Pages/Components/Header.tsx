import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { Image } from "react-bootstrap";
import img from "../../Images/profile.png";
const Header = () => {
  return (
    <div className="head">
      <div className="row">
        <div className="col-2">
          <Image src={img} width={60} height={60} className="ml-5" />
        </div>
        <div className="col-6"></div>
        <div className="col-2 text-white text-center" dir="rtl">
          <div className="hello-wrapper">
            <h6>افزودن رکورد</h6>
          </div>
        </div>
        <div className="col-2 text-white text-center" dir="rtl">
          <div className="hello-wrapper">
            <h4>صفحه اصلی</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
