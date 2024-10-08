import React from 'react';

import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles
import Home from './Components/Home/Home.js';
import AddCourse from './Components/Course/AddCourse.js';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Row, Col} from 'reactstrap';
import Menu from './Components/Menu/Menu.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js' 
import AllCourses from './Components/Course/AllCourses.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='text-center' style={{overflowX: "hidden"}}>
          <Home/>
          <Row>
            <Col md="4">
              <Menu/>
            </Col>
                  <Col md="8">
                    <Routes>
                      <Route exact path="/viewcourses" element={<AllCourses />} />
                      <Route exact path="/addcourse" element={<AddCourse />} />
                      <Route exact path="/"/>
                      <Route exact path="/about" element={<About />} />
                      <Route exact path="/contact" element={<Contact />} />
                    </Routes>
                  </Col>          
          </Row>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
