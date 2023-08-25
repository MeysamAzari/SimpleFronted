import React, { useState } from "react";
import Header from "./Components/Header";
import "./Import.css";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import adduser from "../Images/adduser.png";
import csv from "../Images/csvl.png";
import excel from "../Images/excela.png";
import json from "../Images/jsonr.png";
import { Image, Modal } from "react-bootstrap";

const Import = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />
      <div className="container mt-5" dir="rtl">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>وارد کردن رکورد دستی</Form.Label>
            <Form.Control as="textarea" rows={6} className="round border-2" />
          </Form.Group>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <Button type="submit" className="but">
                  افزودن لیست
                </Button>
              </div>
              <div className="col-5"></div>
              <div className="col-4 text-center">
                <Image
                  src={adduser}
                  width={55}
                  className="m-2"
                  onClick={handleShow}
                />
                <Image src={csv} width={55} className="m-2" />
                <Image src={excel} width={55} className="m-2" />
                <Image src={json} width={55} className="m-2" />
              </div>
            </div>
          </div>
        </Form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header dir="rtl">
          <Modal.Title>اضافه کردن</Modal.Title>
        </Modal.Header>
        <Modal.Body dir="rtl">
          <Form>
            <Form.Group className="mb-3" controlId="nn">
              <Form.Control type="number" placeholder="کد ملی" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" placeholder="نام" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lname">
              <Form.Control type="text" placeholder="نام خانوادگی" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dis">
              <Form.Control as="textarea" rows={3} placeholder="توضیحات" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="vise">
              <Form.Control type="text" placeholder="معاونت"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="mang">
              <Form.Control type="text" placeholder="مدیر" />
            </Form.Group>
            <Button variant="white" type="submit" className="border">
              اضافه کردن
            </Button>
            <Button variant="danger" className="m-2" onClick={handleClose}>
              بستن
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Import;
