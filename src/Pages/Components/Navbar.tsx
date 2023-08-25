import React , {useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { useLocation } from 'react-router-dom'
const Navbarr = () => {
  const [route , setroute] = useState()
  const location = useLocation();
  console.log(location.pathname , "/import")
  return (
    <Navbar className="text-white" dir="rtl">
      <Container>
        <Navbar.Brand className="text-white" href="#home">صفحه اصلی</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className={location.pathname == "/import" ? "text-white customactive" : "text-white"} href="/import">افزودن رکورد</Nav.Link>
          <Nav.Link className={location.pathname == "/search" ? "text-white customactive" : "text-white"} href="/search">جستوجو</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
