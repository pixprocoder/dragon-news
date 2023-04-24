import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Categories from "../Categories/Categories";
import AllNews from "../News/AllNews";
import SideNav from "../SideNav/SideNav";

const Home = () => {
  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col lg={3}>
            <Categories />
          </Col>
          <Col lg={6}>
            <AllNews />
          </Col>
          <Col lg={3}>
            <SideNav />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
