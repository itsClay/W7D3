import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.pokemonId;
    this.props.requestPokemon(id);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    const { pokemon } = this.props;
    console.log(this.props);
    if(!pokemon) {
      return null;
    }
    return (
      <div>
        <li>{pokemon.name}</li>
        <img src={pokemon.image_url}></img>
      </div>
    );
  }
}

export default PokemonDetail;
