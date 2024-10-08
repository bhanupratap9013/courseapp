import React from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md="8">
          <Card className="shadow-lg border-0">
            <CardBody>
              <CardTitle tag="h2" className="text-center mb-4 text-primary">
                Contact Us
              </CardTitle>
              <CardText className="text-center mb-4">
                Have any questions? We'd love to hear from you. Please react out to us on below number and we will get in touch with you as soon as possible.
              </CardText>
              <CardText>+91 99999 88888</CardText>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;