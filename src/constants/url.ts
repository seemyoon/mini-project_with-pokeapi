const baseURL = "https://pokeapi.co/api/v2"

const urlBuilder = {
    allPokemon: baseURL + "/pokemon",
    getPokemonById: (id:string) => baseURL + "/pokemon/" + id,
    getFormById: (id:number) => baseURL + "/pokemon-form/" + id,
}

export {baseURL, urlBuilder}
