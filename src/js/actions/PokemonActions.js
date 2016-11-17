import dispatcher from '../dispatcher';

export function selectPokemon (pokemon) {
	dispatcher.dispatch({
		type: 'UPDATE_POKEMON_DATA',
		pokemon
	});
}

export function update (snapshot) {
	dispatcher.dispatch({
		type: 'LOAD_POKEMON_DATA',
		pokemons: snapshot
	});
}
