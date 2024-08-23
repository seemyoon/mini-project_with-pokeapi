import {IPokemonResult} from "../IPokemonPaginationModel/IPokemonResult";
import {IPokemonMainFormSprites} from "./IPokemonMainFormSprites";
import {IPokemonMainFormType} from "./IPokemonMainFormType";
import {VersionGroup} from "./IVersionGroup";

export interface IPokemonMainForm {
    form_name: string
    form_names: any[]
    form_order: number
    id: number
    is_battle_only: boolean
    is_default: boolean
    is_mega: boolean
    name: string
    names: any[]
    order: number
    pokemon: IPokemonResult
    sprites: IPokemonMainFormSprites
    types: IPokemonMainFormType[]
    version_group: VersionGroup
}







