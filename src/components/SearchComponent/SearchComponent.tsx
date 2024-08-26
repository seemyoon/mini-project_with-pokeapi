import React from 'react';
import SearchComponentByAbility from "./SearchComponentByAbility";
import SearchComponentByName from "./SearchComponentByName";


const SearchComponent = () => {
    return (
        <div>
            <div>
                <h3>Search by name:</h3>
                <SearchComponentByName/>
            </div>
            <div>
                <h3>Search by ability:</h3>
                <SearchComponentByAbility/>
            </div>
        </div>
    );
};
export default SearchComponent;