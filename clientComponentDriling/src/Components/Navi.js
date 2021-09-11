import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CardSummary from './CardSummary';
const Navi = ({ cart, removeCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md" >
      <NavbarBrand className="text-info mx-5 h1" href="/">  <i className="fas fa-handshake"></i> Trade App </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto " navbar>
          <NavItem>
            <NavLink className="text-dark h5" href="https://github.com/erolemre1">GitHub <i className="fab fa-github"></i>
            </NavLink>
          </NavItem>
          <CardSummary cart={cart} removeCart={removeCart} />
        </Nav>
      </Collapse>
      <NavLink>
        <Link className="text-dark h5 link" to="Form">Login App  <i className="fas fa-sign-in-alt text-success"></i></Link>
      </NavLink>
      <NavLink>
        <Link className="text-dark h5 link" to="Form2">Sign Up <i className="fas fa-user-plus text-success"></i></Link>
      </NavLink>
    </Navbar>
  );
}

export default Navi;