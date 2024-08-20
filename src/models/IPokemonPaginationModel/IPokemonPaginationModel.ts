import {IPokemonResult} from "./IPokemonResult";

export interface IPokemonPaginationModel {
    count: number
    next: string
    previous: any
    results: IPokemonResult[]
}


