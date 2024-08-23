const baseURL = "https://pokeapi.co/api/v2"

const urlBuilder = {
    allPokemon: baseURL + "/pokemon",
    getPokemonById: (id:string) => baseURL + "/pokemon/" + id
}

export {baseURL, urlBuilder}
