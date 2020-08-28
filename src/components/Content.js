import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//props.children, atunci cand folosesc componenta Content sa pot scrie orice text dorect
// link doc https://reactjs.org/docs/composition-vs-inheritance.html
function Content(props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={8}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default Content;
