import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import styles from "./Search.module.css";

export default function Search({ handleSearch }) {
  return (
    <>
      <h3>Поиск:</h3>
      <InputGroup className={styles.search}>
        <FormControl
          placeholder="Поиск по имени..."
          onChange={event => handleSearch(event)}
        />
      </InputGroup>
    </>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
