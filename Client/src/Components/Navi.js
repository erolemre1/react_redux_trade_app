import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  
} from 'reactstrap';
import CardSummary from '../CardSummary';


const Navi = ({cart,removeCart}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="light" light expand="md" >
        <NavbarBrand  className="text-info mx-5 h1" href="/">  <i class="fas fa-handshake"></i> Trade App </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar>
          <Nav className="mr-auto " navbar>
                <NavItem>
              <NavLink className="text-dark h5" href="https://github.com/erolemre1">GitHub <i class="fab fa-github"></i>é</NavLink>
            </NavItem>
       <CardSummary cart = {cart} removeCart={removeCart}/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;