import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let pokeState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      pokeState = Object.assign({}, pokeState, action.pokemon);
      return pokeState;
    default:
      return state;
  }
};

export default pokemonReducer;
