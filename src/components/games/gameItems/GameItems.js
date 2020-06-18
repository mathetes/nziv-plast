import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./GameItems.module.css";

function GameItems({ id, name, background_image, rating, released }) {
  return (
    <Card className={styles.card}>
      <Card.Img
        variant="top"
        src={background_image}
        alt="Game cover photo"
        className={styles.image}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Дата выпуска: {released}</Card.Text>
        <Card.Text>Рейтинг игры: {rating}</Card.Text>
        <Link to={"games/" + id}>
          <Button variant="secondary" block className={styles.button}>
            Описание
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

GameItems.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.node.isRequired
};

export default GameItems;
