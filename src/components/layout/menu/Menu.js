import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "../../home/Home";
import Contact from "../../contact/Contact";
import GameDetail from "../../games/gameDetail/GameDetail";
import { GiGamepad } from "react-icons/gi";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <Router className={styles.router}>
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <NavLink to="/" className={styles.navbar_link}>
          <Navbar.Brand>
            ИГРЫ <GiGamepad className={styles.gamePad} />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className={styles.navbar_link}>
              Главная
            </NavLink>
            <NavLink to="/contact/" className={styles.navbar_link}>
              Наши контакты
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/games/:id" component={GameDetail} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Menu;
