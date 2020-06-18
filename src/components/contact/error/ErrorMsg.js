import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMsg.module.css';

function ErrorMsg( { children } ) {
    return (
        <div className={styles.error}>{children}</div>
    );
}

ErrorMsg.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorMsg;