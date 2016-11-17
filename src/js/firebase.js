export function initFireBaseConfig () {
	const config = {
		apiKey: 'AIzaSyARq0nAlHH36UFly8gnACmAfeHhpkvIwpU',
		authDomain: 'pokepower-4d71f.firebaseapp.com',
		databaseURL: 'https://pokepower-4d71f.firebaseio.com',
		storageBucket: 'pokepower-4d71f.appspot.com',
		messagingSenderId: '701859424909'
	};

	firebase.initializeApp(config);
}
