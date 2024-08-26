import React from 'react';
import SearchComponentByAbility from "./SearchComponentByAbility";
import SearchComponentByName from "./SearchComponentByName";
import SearchComponentByType from "./SearchComponentByType";


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
            <div>
                <h3>Search by type:</h3>
                <SearchComponentByType/>
            </div>
        </div>
    );
};
export default SearchComponent;