import React from 'react';
import SearchComponentByAbility from "../SearchComponentByAbility";
import SearchComponentByName from "../SearchComponentByName";
import SearchComponentByType from "../SearchComponentByType";
import styles from "./SearchComponent.module.css";

const SearchComponent = () => {
    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchSection}>
                <SearchComponentByName />
            </div>
            <div className={styles.searchSection}>
                <SearchComponentByAbility />
            </div>
            <div className={styles.searchSection}>
                <SearchComponentByType />
            </div>
        </div>
    );
};

export default SearchComponent;
