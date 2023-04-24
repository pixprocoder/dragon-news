import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col lg={3}>
            <Categories />
          </Col>
          <Col lg={6}>
            <h1>Middle</h1>
          </Col>
          <Col lg={3}>Right</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
