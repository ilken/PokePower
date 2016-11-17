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
			gameOver: false
		};
	}

	componentWillMount () {
		initFireBaseConfig();

		const db = firebase.database();
		const dbRef = db.ref().child('pokemons');

		dbRef.on('value', snapshot => {
			console.log(snapshot.val());
			PokemonActions.update(snapshot.val());
		});

		PokemonStore.on('init', () => {
			this.setState({
				pokemons: PokemonStore.getNextPair()
			});
		});

		PokemonStore.on('levelup', () => {
			this.setState({
				pokemons: PokemonStore.getNextPair()
			});
		});

		PokemonStore.on('gameover', () => {
			console.log('Game Over');
			this.setState({
				gameOver: true
			});
		});
	}

	render () {
		const { pokemons } = this.state;
		const PokemonComponents = pokemons.map((pokemon) => {
			return <Pokemon key={pokemon.Name} {...pokemon}/>;
		});

		return (
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <span>Pokemons</span>
                    <span>Pokemons</span>
                </div>
                {PokemonComponents}
            </div>
		);
	}
}
