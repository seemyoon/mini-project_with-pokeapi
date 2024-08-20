import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PokemonPage from './pages/PokemonPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <PokemonPage />
    </>
);
