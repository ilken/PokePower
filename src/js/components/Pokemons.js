import React from 'react';
import Pokemon from './Pokemon';
import PokemonStore from '../stores/pokemon';
import * as PokemonActions from '../actions/PokemonActions';
import { initFireBaseConfig } from '../firebase';

export default class Pokemons extends React.Component {
	constructor () {
		super();
		this.state = {
			pokemons: [],
			gameOver: false,
			score: 0
		};
	}

	componentWillMount () {
		initFireBaseConfig();

		const db = firebase.database();
		const dbRef = db.ref().child('pokemons');

		dbRef.on('value', snapshot => {
			PokemonActions.update(snapshot.val());
		});

		PokemonStore.on('init', () => {
			this.setState({
				pokemons: PokemonStore.getNextPair(),
				score: 0
			});
		});

		PokemonStore.on('levelup', () => {
			this.setState({
				pokemons: PokemonStore.getNextPair(),
				score: this.state.score + 1
			});
		});

		PokemonStore.on('gameover', () => {
			this.setState({
				gameOver: true,
				score: 0
			});
		});
	}

	render () {
		const { pokemons, score } = this.state;
		const PokemonComponents = pokemons.map((pokemon) => {
			return <Pokemon key={pokemon.Name} {...pokemon}/>;
		});

		return (
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <p className="text-center">Score:
						<span> {score}</span>
					</p>
                </div>
                {PokemonComponents}
            </div>
		);
	}
}
