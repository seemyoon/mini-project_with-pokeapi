import React from 'react';
import styles from './SearchPokemonPageErrorStyles.module.css';

const SearchPokemonPageError = () => {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <div className={styles.title}>Oops!</div>
                <div className={styles.subtitle}>The page you are looking for does not exist.</div>
            </div>
        </div>
    );
};

export default SearchPokemonPageError;
