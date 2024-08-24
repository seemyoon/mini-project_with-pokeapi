import {useAppDispatch, useAppSelector} from "../../redux/store";
import React, {useState} from "react";
import {pokemonSearchActions} from "../../redux/slices/pokemonSearchSlice";
import {useNavigate} from "react-router-dom";

const SearchComponentByName = () => {
    const navigate = useNavigate();

    const {pokemonByNameResult} = useAppSelector(state => state.pokemonSearchSlice)
    const dispatch = useAppDispatch()
    const [searchItem, setSearchItem] = useState("")


    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value
        setSearchItem(searchTerm)
    }
    const handleSearchClick = () => {
        if (searchItem) {
            dispatch(pokemonSearchActions.loadPokemonByName(searchItem));
            navigate(`/searchPokemonPage/${pokemonByNameResult?.name}`);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={searchItem}
                onChange={handleItemChange}
                placeholder='Type to search'
            />
            <button onClick={handleSearchClick}>Search</button>


        </div>
    );
};

export default SearchComponentByName;
