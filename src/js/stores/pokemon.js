import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class PokemonStore extends EventEmitter {
	constructor () {
		super();
		this.pokemons = [];
		this.currentPair = [];
	}

	loadPokemons (pokemonData) {
		this.pokemons = pokemonData;

		this.emit('init');
	}

	updatePokemons (selectedPokemon) {
		let pokemon1 = this.currentPair[0];
		let pokemon2 = this.currentPair[1];
		let winner = pokemon1.MaxCP >= pokemon2.MaxCP ? pokemon1.Name : pokemon2.Name;

		if (selectedPokemon.Name === winner) {
			this.emit('levelup');
		}		else {
			this.emit('gameover');
		}
	}

	getAll () {
		return this.pokemons;
	}

	getNextPair () {
		this.updateCurrentPair();

		let count = 0;
		do {
			if (count > this.pokemons.length) {
				throw new Error('IMPOSSIBLE!');
			}
			let randomIndex = this.getRandomPokeIndex();

			if (!this.pokemons[randomIndex].played) {
				this.currentPair.push(this.pokemons[randomIndex]);
			}

			count++;
		} while (this.currentPair.length < 2);

		return this.currentPair;
	}

	updateCurrentPair () {
		for (let currentPokemon of this.currentPair) {
			for (let pokemon of this.pokemons) {
				if (currentPokemon.Name === pokemon.Name) {
					pokemon.played = true;
				}
			}
		}

		this.currentPair = [];
	}

	getRandomPokeIndex () {
		return Math.floor(Math.random() * (this.pokemons.length - 1));
	}

	handleActions (action) {
		switch (action.type) {
		case 'LOAD_POKEMON_DATA':
			{
				this.loadPokemons(action.pokemons);
				break;
			}
		case 'UPDATE_POKEMON_DATA':
			{
				this.updatePokemons(action.pokemon);
				break;
			}
		}
	}

}

const pokemonStore = new PokemonStore();
dispatcher.register(pokemonStore.handleActions.bind(pokemonStore));

export default pokemonStore;
