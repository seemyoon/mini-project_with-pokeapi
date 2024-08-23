export interface Ability {
    is_hidden: boolean
    slot: number
    ability: Ability2
}

export interface Ability2 {
    name: string
    url: string
}