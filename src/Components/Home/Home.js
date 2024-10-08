import React from 'react';
import {Container, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="bg-primary p-5 rounded text-center" style={{color: "white"}}>
          <Container>
            <h1 className="display-4">Welcome to course website</h1>
            <p className="lead">
              Multifunctional Website for courses
            </p>
          </Container>
        </div>
    );
};

export default Home;
