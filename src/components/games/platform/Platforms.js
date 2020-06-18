import React from 'react';
import Row from 'react-bootstrap/Row';
import { GiGamepad } from 'react-icons/gi';
import styles from './Platforms.module.css';

function Platforms( { platforms } ) {
    return (
        <Row>
            <ul className={styles.platformList}>
                {platforms.map( platformName => {
                    const { platform } = platformName;
                    return (
                        <li className={styles.platformListItems} key={platform.name}>{platform.name} <GiGamepad /></li>
                    )
                } )}
            </ul>
        </Row>
    );
}

export default Platforms;



