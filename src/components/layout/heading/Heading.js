import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';

function Heading( { title } ) {
    return <h1 className={styles.h1}>{title}</h1>;
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Heading;