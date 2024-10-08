import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Col, Button } from 'reactstrap';

const Course = ({ id, title, description, deleteCourse, updateCourse }) => {
  const updateCourseHandler = () => {
    const newTitle = window.prompt('Enter new title:', title);
    const newDescription = window.prompt('Enter new description:', description);

    if (newTitle && newDescription) {
      const updatedCourse = { id: id, title: newTitle, description: newDescription };
      updateData(updatedCourse);
    } else {
      alert('Update cancelled or incomplete details');
    }
  };

  const updateData = (course) => {
    fetch(`http://localhost:8080/api/courses/${course.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Course successfully updated');
          updateCourse(course); // Update the course locally
        } else {
          throw new Error("Course couldn't be updated");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Col md="4" className="mb-4">
      <Card className="h-100 shadow-sm course-card" style={{ maxWidth: '350px', margin: '0 auto' }}>
        <CardBody className="d-flex flex-column">
          <CardTitle tag="h5" className="text-primary">
            {title}
          </CardTitle>
          <CardText className="mb-4 text-muted">{description}</CardText>
          <div className="mt-auto">
            <Button color="primary" size="sm" className="me-2" onClick={() => deleteCourse(id)}>
              Delete
            </Button>
            <Button color="danger" size="sm" onClick={updateCourseHandler}>
              Update
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Course;