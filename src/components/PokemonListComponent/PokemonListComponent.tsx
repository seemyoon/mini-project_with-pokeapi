import React, {FC} from 'react';
import {IPokemon} from "../../models/IPokemon/IPokemon";
import {Link} from "react-router-dom";
import styles from "./pokemonListComponentStyles.module.css"


interface IProps {
    pokemon: IPokemon
}

const PokemonListComponent: FC<IProps> = ({pokemon}) => {

    return (
        <div className={styles.pokemonCard}>
            <Link className={styles.navigationPage} to={"/" + pokemon.id}>
                <img src={pokemon.sprites.front_default} alt={"pokemon imagine"} loading={"lazy"}/>
                <div className={styles.pokemonList}>
                    <h1 className={styles.healingTwo}>{pokemon.name}</h1>
                </div>
            </Link>

        </div>
    );
};

export default PokemonListComponent;