import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import Course from '../Course/Course';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://warm-thicket-96197-62fa6f50b94e.herokuapp.com/api/courses');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const deleteCourse = (id) => {
    fetch(`https://warm-thicket-96197-62fa6f50b94e.herokuapp.com/api/courses/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Course successfully deleted');
          setCourses(courses.filter((course) => course.id !== id));
        } else {
          throw new Error("Course couldn't be deleted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCourse = (updatedCourse) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  return (
    <div>
      <Row>
        {courses.length === 0 ? (
          <Container>No courses available</Container>
        ) : (
          courses.map((course) => (
            <Course
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} // Pass the updateCourse function
            />
          ))
        )}
      </Row>
    </div>
  );
};

export default AllCourses;
