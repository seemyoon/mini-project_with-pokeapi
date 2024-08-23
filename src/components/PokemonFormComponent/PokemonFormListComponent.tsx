import React, {FC} from 'react';
import {IPokemonMainForm} from "../../models/IPokemonMainForm/IPokemonMainForm";
import {chooseForm, toggleForm, useAppDispatch} from "../../redux/store";

interface IProps {
    pokemonForm: IPokemonMainForm | null
}

const PokemonFormListComponent: FC<IProps> = ({pokemonForm}) => {
    const dispatch = useAppDispatch()
    const handleChooseFrom = (form:string) => {
        dispatch(chooseForm(form));
        dispatch(toggleForm(true));
    }

    return (
        <div>
            <h4>Forms:</h4>
            <div onClick={() => {
                handleChooseFrom("default")
            }}>
                <img src={pokemonForm?.sprites.front_default} alt={"front_default"}/>
                <img src={pokemonForm?.sprites.back_default} alt={"back_default"}/>
            </div>
            <div onClick={() => {
                handleChooseFrom("shiny")
            }}>
                <img src={pokemonForm?.sprites.front_shiny} alt={"front_shiny"}/>
                <img src={pokemonForm?.sprites.back_shiny} alt={"back_shiny"}/>
            </div>

        </div>
    );
};

export default PokemonFormListComponent;