import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./components.css"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer footerChange">
        <Col  className="col-sm">
          <h3>Developed by Martin Lobos</h3>
        </Col>
        <Col  className="col-sm">
          <h3>{year}</h3>
        </Col>
    </Container>
  );
}

export default Footer;
