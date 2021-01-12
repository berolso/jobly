import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FaShoppingCart } from "react-icons/fa";

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Shoply</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/items/">Items</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav className="ml-auto" navbar>
          <NavLink href="/cart">
            <FaShoppingCart />
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};
