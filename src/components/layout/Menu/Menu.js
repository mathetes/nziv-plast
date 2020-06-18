import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import Container from "react-bootstrap/Container";
import Home from "../Home/Home";
import "./Menu.scss";

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" vertical>
            <NavItem>
              <NavLink href="#">Банка 0,45 л с ручкой</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Банка 0,65 л с ручкой</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Крышка на 0,45-0,8 л</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Ведро 3,0 л с ручкой</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Ведро 5,0 л с ручкой</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Ведро 10,0 л с ручкой</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Ведро 21,0 л с ручкой</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Бак 32,0 л</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Крышка для ведра 3,0 л</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Крышка для ведра 5,0 л</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Крышка для ведра 10,0 л</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Крышка для ведра 21,0 л</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Крышка для бака 32,0 л</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container>
        <Switch></Switch>
      </Container>
    </Router>
  );
};

export default Menu;
