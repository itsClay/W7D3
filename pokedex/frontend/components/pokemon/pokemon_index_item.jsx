import React from 'react';
import { Link, Route } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';

class PokemonIndexItem extends React.Component {

  render() {
    const { pokemon } = this.props;
    let pathy = `/pokemon/${pokemon.id}`;
    return (
      <div>
        <Link to={pathy}>
          <li>{pokemon.name}</li>
          <img src={pokemon.image_url}></img>
        </Link>
        <Route path={pathy} component={PokemonDetail}></Route>
      </div>
    );
  }


}

export default PokemonIndexItem;
