import React from "react";
import bg from "../Images/bg.png";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Login = () => {
  return (
    <div className="fullscreen-bg">
      <div className="content">
        <div className="test h-auto rounded-5 border form">
          <div className="text-center text-white bg-danger pt-3 pb-3 rounded-5">
            <h5>ورود به سامانه جامع اطلاعاتی</h5>
          </div>
          <div className="text-center m-5">
            <Form>
              <Form.Group className="mb-3 w-5" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="نام کاربری" className="text-center"/>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="رمز عبور" className="text-center"/>
              </Form.Group>
              <Button variant="white" type="submit" className="text-dark border w-50 bg-white font-weight-bold">
                ورود
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
