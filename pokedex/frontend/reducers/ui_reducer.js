import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const initialState = {
  pokeDisplay: null,
  errors: {},
  loading: {},
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let uiState = state;

  switch (action.type) {
    case RECEIVE_POKEMON:
      uiState = Object.assign({}, {pokeDisplay: action.pokemon.pokemon.id});
      return uiState;
    default:
      return state;
  }
};

export default uiReducer;
