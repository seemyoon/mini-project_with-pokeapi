import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import PokemonFormComponent from "../../components/PokemonFormListComponent/PokemonUrlsFormComponent";
import {pokemonActions} from "../../redux/slices/pokemonSlice";

const PokemonIdPage = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const {pokemon} = useAppSelector(state => state.pokemonSliceState)

    useEffect(() => {
        if (params.id) {
            dispatch(pokemonActions.loadPokemonById(String(params.id)));
        }
    }, [dispatch, params.id]);

    return (
        <div>
            {/*<div>*/}
            {/*    <HeaderComponent/>*/}
            {/*</div>*/}
            <h2>{pokemon?.name}</h2>
            <img src={pokemon?.sprites.front_default} alt={"pokemon"}/>
            <div>
                <h4>Ability:</h4>
                <ul>{pokemon?.abilities.map(ability => <li key={ability.ability.name}>{ability.ability.name}</li>)}</ul>
            </div>
            <div>
                <h4>Stats:</h4>
                <ul>{pokemon?.stats.map(stat => <li key={stat.stat.name}>{stat.stat.name}</li>)}</ul>
            </div>
            <div>
                <h4>Types</h4>

                <ul>{pokemon?.types.map(type => <li key={type.type.name}>{type.type.name}</li>)}</ul>
            </div>
            <div>
                <h4>Forms</h4>
                <PokemonFormComponent key={pokemon?.id} pokemonForms={pokemon?.forms}/>
            </div>
            <hr/>


        </div>
    );
};

export default PokemonIdPage;

//import React, {FC} from 'react';
// import {IPokemonMainForm} from "../../models/IPokemonMainForm/IPokemonMainForm";
// import {useAppDispatch} from "../../redux/store";
// import {chooseForm} from "../../redux/slices/pokemonFormSlice";
//
// interface IProps {
//     forms: IPokemonMainForm[] | null
// }
//
// const PokemonFormComponent: FC<IProps> = ({forms}) => {
//     const dispatch = useAppDispatch()
//     const handleChooseFrom = (formId: number) => {
//         dispatch(chooseForm(formId));
//         console.log(formId)
//     }
//
//     return (
//         <div>
//             <h4>Forms:</h4>
//             <ul>
//                 {forms?.map(form => <li key={form.id}>
//                     <h5>{form.name}</h5>
//                     <div onClick={() => {
//                         handleChooseFrom(form.id)
//                     }}>
//                         <img src={form.sprites.front_default} alt="pokemon"/>
//                     </div>
//                 </li>)}
//             </ul>
//         </div>
//     );
// };
//
// export default PokemonFormComponent;

// const {toggleForm, chooseForm} = useAppSelector(state => state.pokemonFormSlice)

// const handleOfFavouritePokemon = () => {
//     if (params.id && chooseForm) {
//         const favouritePokemon = {
//             id: params.id,
//             form: chooseForm
//         }
//         localStorage.setItem("favouritePokemon", JSON.stringify(favouritePokemon));
//     }
// }

{/*{toggleForm ? (*/
}
{/*    <div>*/
}
{/*        {chooseForm === "default" ? (*/
}
{/*            <div>*/
}
{/*                <img src={pokemon?.sprites.front_default} alt={"front_default"}/>*/
}
{/*                <img src={pokemon?.sprites.back_default} alt={"back_default"}/>*/
}
{/*            </div>*/
}
{/*        ) : chooseForm === "shiny" ? (*/
}
{/*            <div>*/
}
{/*                <img src={pokemon?.sprites.front_shiny} alt={"front_shiny"}/>*/
}
{/*                <img src={pokemon?.sprites.back_shiny} alt={"back_shiny"}/>*/
}
{/*            </div>*/
}
{/*        ) : "Error"}*/
}
{/*    </div>*/
}
{/*) : null}*/
}

{/*<button disabled={!toggleForm} onClick={handleOfFavouritePokemon}>Add favourite pokemon</button>*/
}