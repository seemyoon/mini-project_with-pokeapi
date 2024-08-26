export interface IPokemonMainAbility {
    id: number
    name: string
    pokemon: Pokemon[]
}

export interface Pokemon {
    is_hidden: boolean
    pokemon: Pokemon2
    slot: number
}

export interface Pokemon2 {
    name: string
    url: string
}
