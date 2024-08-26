import {createBrowserRouter, RouteObject} from "react-router-dom";
import PokemonPage from "../pages/PokemonPage/PokemonPage";
import PokemonIdPage from "../pages/PokemonIdPage/PokemonIdPage";
import FavouritePokemonPage from "../pages/FavouritePokemon/FavouritePokemonPage";
import PokemonFormComponentById from "../components/PokemonFormComponentById/PokemonFormComponentById";
import SearchPokemonPage from "../pages/SearchPokemonPage/SearchPokemonPage";
import PokemonMainLayout from "../layouts/PokemonMainLayout";
import SearchPokemonPageError from "../errors/SearchPokemonPageError";

const routes: RouteObject[] = [
    {
        path: "/", element: <PokemonMainLayout/>, children: [
            {
                index:true, element: <PokemonPage/>
            },
            {
                path: "/:id", element: <PokemonIdPage/>
            },
            {
                path: "/pokemonForm/:id", element:<PokemonFormComponentById/>
            },
            {
                path: "/favouritePokemon", element: <FavouritePokemonPage/>
            },
            {
                path: "/searchPokemonPage/:name", element:<SearchPokemonPage/>
            },
            {
                path:"/searchPokemonPageError/", element: <SearchPokemonPageError/>
            }
        ]
    }


];
const router = createBrowserRouter(routes);
export default router;
