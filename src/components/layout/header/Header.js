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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "reactstrap";
import Home from "../../home/Home";
// import Contacts from "../../contact/Contact";
import GameDetail from "../../games/gameDetail/GameDetail";
import styles from "./Header.scss";
import Logonziv from "../../../images/logonziv.png";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col lg={12}>
            <Router className={styles.router}>
              <Navbar variant="dark" expand="lg" className={styles.navbar}>
                <NavLink to="/" className={styles.navbar_link}>
                  <Navbar.Brand>
                    <img
                      className="icon__block_picture"
                      src={Logonziv}
                      alt="Логотип завода"
                    />
                  </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <NavLink className="nav-menu-item" to="/" exact>
                      Главная да
                    </NavLink>
                    <NavLink className="nav-menu-item" to="/contact/">
                      Контакты
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
                <Button color="danger">Перезвоните мне</Button>{" "}
              </Navbar>
              <Container>
                <Switch>
                  <Route path="/" exact component={Home} />
                  {/*<Route path="/contact" component={Contacts} />*/}
                  <Route path="/games/:id" component={GameDetail} />
                </Switch>
              </Container>
            </Router>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
