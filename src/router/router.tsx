import {createBrowserRouter, RouteObject} from "react-router-dom";
import PokemonPage from "../pages/PokemonPage/PokemonPage";
import PokemonIdPage from "../pages/PokemonIdPage/PokemonIdPage";

const routes: RouteObject[] = [
    {
        path: "/", element: <PokemonPage/>
    },
    {
        path: "/:id", element: <PokemonIdPage/>
    }
];
const router = createBrowserRouter(routes);
export default router;
