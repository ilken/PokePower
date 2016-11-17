import React from 'react';
import * as PokemonActions from '../actions/PokemonActions';

export default class Pokemon extends React.Component {
	evaluateSelection (selection) {
		PokemonActions.selectPokemon(selection);
	}
	render () {
		const { Name, MaxCP } = this.props;
		const imgSrc = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.props.Number + '.png';

		return (
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="row" onClick={this.evaluateSelection.bind(this, { Name })}>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="text-center">{Name}</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="text-center">{MaxCP}</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<img className="img-responsive center-block" alt={Name} src={imgSrc} />
					</div>
                </div>
            </div>
		);
	}
}
