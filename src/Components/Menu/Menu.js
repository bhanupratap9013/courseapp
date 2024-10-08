import React from 'react'
import {List, ListGroupItem, ListGroup} from 'reactstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Home
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/addcourse" style={{ textDecoration: 'none', color: 'black' }}>
            Add Course
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/viewcourses" style={{ textDecoration: 'none', color: 'black' }}>
            View Courses
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
            About
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
            Contact
          </Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default Menu
