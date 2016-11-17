import React from 'react';
import * as PokemonActions from '../actions/PokemonActions';

export default class Pokemon extends React.Component {
	evaluateSelection (selection) {
		console.log('Selected:', selection);
		PokemonActions.selectPokemon(selection);
	}
	render () {
		const { Name, MaxCP } = this.props;

		return (
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="row" onClick={this.evaluateSelection.bind(this, { Name })}>
                    <span>{Name}</span>
                    <span>{MaxCP}</span>
                </div>
            </div>
		);
	}
}
