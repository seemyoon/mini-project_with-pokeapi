import React from 'react';
import SearchComponent from "../SearchComponent/SearchComponent";
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            bulbasaur arceus pikachu
            <SearchComponent/>
        </div>
    );
};

export default HeaderComponent;