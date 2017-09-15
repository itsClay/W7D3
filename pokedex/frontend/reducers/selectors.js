import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectUi = (state) => {
  return values(state.ui);
};

export const selectPokemon = (state, id) => {
  return values(state.entities.pokemon.id);
};
