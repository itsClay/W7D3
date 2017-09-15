import React from 'react';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { selectUi, selectAllPokemon } from '../../reducers/selectors';
import { requestPokemon } from '../../actions/pokemon_actions';


const mapStateToProps = (state) => ({
  pokemon: state.entities.pokemon[state.ui.pokeDisplay]
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
