import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddCourse = () => {
  const [course, setCourse] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course Data:', course);
    submitData();
    alert(`Course titled "${course.title}" added successfully!`);
    setCourse({ title: '', description: '' });
  };

  const submitData = () => {
    fetch("http://localhost:8080/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(course)
    })
    .then((response) => {
      if (response.ok) {
        console.log("Course successfully added");
      } else {
        throw new Error("Course couldn't be added");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md="8">
          <Card className="shadow-lg border-0">
            <CardBody>
              <CardTitle tag="h2" className="text-center mb-4 text-primary">
                Add New Course
              </CardTitle>
              <CardText className="text-center mb-4">
                Fill in the details below to add a new course to our platform.
              </CardText>

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="title">Course Title</Label>
                  <Input 
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder="Enter course title" 
                    value={course.title} 
                    onChange={handleChange} 
                    required 
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="description">Course Description</Label>
                  <Input 
                    type="textarea" 
                    name="description" 
                    id="description" 
                    placeholder="Enter course description" 
                    rows="5" 
                    value={course.description} 
                    onChange={handleChange} 
                    required 
                  />
                </FormGroup>

                <div className="text-center">
                  <Button color="primary" size="lg" type="submit">
                    Add Course
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCourse;
