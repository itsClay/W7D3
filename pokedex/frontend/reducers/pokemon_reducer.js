import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let pokeState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      pokeState = Object.assign({}, pokeState, action.pokemon);
      return pokeState;
    case RECEIVE_POKEMON:
      pokeState = merge({}, pokeState, {[action.pokemon.pokemon.id]: action.pokemon.pokemon});
      return pokeState;
    default:
      return state;
  }
};

export default pokemonReducer;
