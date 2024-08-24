import axios from "axios";
import {baseURL, urlBuilder} from "../constants/url";
import {IPokemonPaginationModel} from "../models/IPokemonPaginationModel/IPokemonPaginationModel";
import {IPokemon} from "../models/IPokemon/IPokemon";
import {IPokemonMainForm} from "../models/IPokemonMainForm/IPokemonMainForm";
import {IPokemonType} from "../models/IPokemon/IPokemonType";


const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {}
})
axiosInstance.interceptors.request.use(request => {
    request.headers.set("Content-Type", "application/json")
    return request;
})
const pokemonService = {
    getAllPokemon: async (offset: string): Promise<IPokemonPaginationModel> => {
        const res = await axiosInstance.get<IPokemonPaginationModel>(urlBuilder.allPokemon,
            {params: {offset: offset, limit: 20}});
        return res.data
    },
    getPokemonList: async (urls: string[]): Promise<IPokemon[]> => {
        const responses = await Promise.all(urls.map(url => axiosInstance.get<IPokemon>(url)));
        return responses.map(res => res.data);
    },
    getPokemonById: async (id: string): Promise<IPokemon> => {
        const response = await axiosInstance.get<IPokemon>(urlBuilder.getPokemonById(id))
        return response.data
    },
    getForm: async (id: number): Promise<IPokemonMainForm> => {
        const response = await axiosInstance.get<IPokemonMainForm>(urlBuilder.getFormById(id))
        return response.data
    }
}

const pokemonSearchService = {
    getPokemonByName: async (name: string):Promise<IPokemon> => {
        const resp = await  axiosInstance.get<IPokemon>(urlBuilder.getPokemonBySearch.getPokemonByName(name))
        return resp.data
    }
}

export {pokemonService,pokemonSearchService}