const baseURL = "https://pokeapi.co/api/v2"

const urlBuilder = {
    allPokemon: baseURL + "/pokemon",
    getPokemonById: (id:string) => baseURL + "/pokemon/" + id,
    getFormById: (id:number) => baseURL + "/pokemon-form/" + id,
    getPokemonBySearch: {
        getPokemonByName: (name: string) => `${baseURL}/pokemon/${name}`,
        getPokemonByAbility: (nameAbility: string) => `${baseURL}/ability/${nameAbility}`,
        getPokemonByType: (nameType: string) => `${baseURL}/type/${nameType}`,

}

}
export {baseURL, urlBuilder}
