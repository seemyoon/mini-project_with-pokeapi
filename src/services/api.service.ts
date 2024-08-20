import axios from "axios";
import {baseURL, urlBuilder} from "../constants/url";
import {IPokemonPaginationModel} from "../models/IPokemonPaginationModel/IPokemonPaginationModel";


const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {}
})
const pokemonService = {
    getAllPokemon: async (): Promise<IPokemonPaginationModel> => {
        const res = await axiosInstance.get<IPokemonPaginationModel>(urlBuilder.allPokemon)
        return res.data
    }
}
export {pokemonService}