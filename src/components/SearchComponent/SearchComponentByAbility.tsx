import React from "react";

const SearchComponentByAbility = () => {
    // const {pokemonByNameResult} = useAppSelector(state => state.pokemonSearchSlice);
    // const dispatch = useAppDispatch();
    // const [searchItem, setSearchItem] = useState("");
    // const navigate = useNavigate();
    //
    // const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchItem(e.target.value);
    // };
    //
    // useEffect(() => {
    //     dispatch(pokemonSearchActions.loadPokemonByName(searchItem))
    // }, [dispatch, searchItem]);
    //
    // const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     if (pokemonByNameResult?.name) {
    //         navigate(`/searchPokemonPage/${pokemonByNameResult?.name}`)
    //     }
    //     else {
    //         navigate(`searchPokemonPageError/`)
    //     }
    // };

    return (
        <div>
            {/*<form>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        value={searchItem}*/}
            {/*        onChange={handleItemChange}*/}
            {/*        placeholder="Type to search"*/}
            {/*    />*/}
            {/*        <button onClick={handleSearchClick}>Search</button>*/}
            {/*</form>*/}
        </div>
    );
};

export default SearchComponentByAbility;
