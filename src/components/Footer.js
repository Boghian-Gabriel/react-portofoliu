import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//create style in css file for Col with name = classNmae="make-site"
//this
import "../App.css";
function Footer() {
  return (
    /* mt-5 = margin-top: 5px; in css file 
       md={3} sm={12} The Col lets you specify column widths across 5 breakpoint sizes (xs, sm, md, lg, and xl)
       doc -> https://react-bootstrap.github.io/layout/grid/
    */
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Marius-Gabriel
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            Site de prezentare
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
