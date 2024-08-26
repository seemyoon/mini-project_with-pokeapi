import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SearchComponent from "../SearchComponent/SearchComponent/SearchComponent";
import styles from "./HeaderComponent.module.css";

const HeaderComponent = () => {
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => setShowSearch(!showSearch);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/favouritePokemon" className={styles.link}>Favourite Pokémon</Link>
            </nav>
            <button className={styles.searchButton} onClick={toggleSearch}>
                {showSearch ? 'Hide Search' : 'Show Search'}
            </button>
            {showSearch && <SearchComponent />}
        </header>
    );
};

export default HeaderComponent;
