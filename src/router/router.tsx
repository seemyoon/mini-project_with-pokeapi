import {createBrowserRouter, RouteObject} from "react-router-dom";
import PokemonPage from "../pages/PokemonPage/PokemonPage";
import PokemonIdPage from "../pages/PokemonIdPage/PokemonIdPage";
import FavouritePokemonPage from "../pages/FavouritePokemon/FavouritePokemonPage";
import PokemonFormComponentById from "../components/PokemonFormComponentById/PokemonFormComponentById";
import SearchPokemonPageByName from "../pages/SearchPokemonPage/SearchPokemonPageByName/SearchPokemonPageByName";
import PokemonMainLayout from "../layouts/PokemonMainLayout";
import SearchPokemonPageError from "../errors/SearchPokemonPageError/SearchPokemonPageError";
import SearchPokemonPageByAbility from "../pages/SearchPokemonPage/SearchPokemonPageByAbility/SearchPokemonPageByAbility";
import SearchPokemonPageByType from "../pages/SearchPokemonPage/SearchPokemonPageByType/SearchPokemonPageByType";

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
                path: "/searchPokemonPageByType/:name", element:<SearchPokemonPageByType/>
            },
            {
                path: "/searchPokemonPageByAbility/:name", element:<SearchPokemonPageByAbility/>
            },
            {
                path: "/searchPokemonPageByName/:name", element:<SearchPokemonPageByName/>
            },
            {
                path:"/searchPokemonPageError/", element: <SearchPokemonPageError/>
            }
        ]
    }


];
const router = createBrowserRouter(routes);
export default router;
