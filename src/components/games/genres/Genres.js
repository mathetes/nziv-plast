import React from 'react';
import Row from 'react-bootstrap/Row';
import { GiPistolGun } from 'react-icons/gi';
import styles from './Genres.module.css';

function Genres( { genres } ) {
    return (
        <Row>
            <ul className={styles.genresList}>
                {genres.map( genresName => {
                    const { name } = genresName;
                    return (
                        <li className={styles.genresListItems} key={genresName.name}>
                            {name} <GiPistolGun />
                        </li>
                    )
                } )}
            </ul>
        </Row >
    )
}
export default Genres;