import {Ability} from "./IAbilityPokemon";
import {Form} from "./IFormPokemon";
import {ISpritesPokemon} from "./ISpritesPokemon";
import {Stat} from "./PokemonStat";
import {IPokemonType} from "./IPokemonType";

export interface IPokemon {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Ability[]
    forms: Form[]
    sprites: ISpritesPokemon
    stats: Stat[]
    types: IPokemonType[]
}





