import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Footer.module.css";

function Footer() {
  return <Card.Footer className={styles.footer}>&copy; Роман</Card.Footer>;
}

export default Footer;
