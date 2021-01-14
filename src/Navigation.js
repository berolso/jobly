import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Badge,
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const totalItems = Object.values(cart).reduce((acc, cur) => +acc + +cur, 0);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="md" sticky="top">
        <NavbarBrand tag={RRNavLink} exact to="/">
          Shoply
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/products/">
                Products
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav className="ml-auto" navbar>
          <NavLink tag={RRNavLink} exact to="/cart">
            <Badge color="success">{totalItems || ""}</Badge>
            <FaShoppingCart />
          </NavLink>
        </Nav>
      </Navbar>
    </>
  );
};
