import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PokemonPage from './pages/PokemonPage';
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <PokemonPage/>
    </Provider>
);
