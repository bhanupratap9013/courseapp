import React from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col, Button } from 'reactstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md="8">
          <Card className="shadow-lg border-0">
            <CardBody>
              <CardTitle tag="h2" className="text-center mb-4 text-primary">
                About Us
              </CardTitle>
              <CardText className="text-justify">
                Welcome to our platform! We are dedicated to providing you with the best experience possible when it comes to learning and growing in your field of interest. 
                Our mission is to make education accessible and engaging for everyone, helping you achieve your goals and expand your knowledge.
              </CardText>
              <CardText className="text-justify">
                Whether you're looking to add new skills to your toolkit, or simply want to explore new topics, we are here to support you on your journey. 
                Our team works tirelessly to ensure that you have access to the best resources and tools to succeed. Thank you for being a part of our community.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
