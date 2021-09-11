import React, { useState } from 'react';
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
import CartSummary from '../cart/CartSummary';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar color="light" light expand="md">
      <NavbarBrand className="text-info mx-5 h1" href="/">  <i className="fas fa-handshake"></i> Trade App </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink className="text-dark h5" href="https://github.com/erolemre1">GitHub <i className="fab fa-github"></i>
              </NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
        </Collapse>
        <NavLink>
          <Link className="text-dark h5 link" to="Form">Login App  <i className="fas fa-sign-in-alt text-success"></i></Link>
        </NavLink>
        <NavLink>
          <Link className="text-dark h5 link" to="Form2">Sign Up <i className="fas fa-user-plus text-success"></i></Link>
        </NavLink>

      </Navbar>
    </div>
  );
}

export default Example;