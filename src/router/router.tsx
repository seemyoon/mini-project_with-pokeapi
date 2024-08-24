import {createBrowserRouter, RouteObject} from "react-router-dom";
import PokemonPage from "../pages/PokemonPage/PokemonPage";
import PokemonIdPage from "../pages/PokemonIdPage/PokemonIdPage";
import FavouritePokemonPage from "../pages/FavouritePokemon/FavouritePokemonPage";
import PokemonSearchListComponent from "../components/SearchComponent/PokemonSearchListComponent";

const routes: RouteObject[] = [
    {
        path: "/", element: <PokemonPage/>
    },
    {
        path: "/:id", element: <PokemonIdPage/>
    },
    {
        path: "/favouritePokemon", element: <FavouritePokemonPage/>
    },
    {
        path: "/searchPokemonPage/:name", element:<PokemonSearchListComponent/>
    }
];
const router = createBrowserRouter(routes);
export default router;
