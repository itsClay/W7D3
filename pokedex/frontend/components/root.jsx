import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndex from './pokemon/pokemon_index';
import { HashRouter, Route } from 'react-router-dom';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

export const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <Route path="/" component={PokemonIndexContainer} />
      </div>
    </HashRouter>
  </Provider>
);

// export default Root;
