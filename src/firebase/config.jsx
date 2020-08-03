import * as app from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyBMrC4jBvhh3eqXWJOQfX1L0qzCVEVypq8',
	authDomain: 'wambagram.firebaseapp.com',
	databaseURL: 'https://wambagram.firebaseio.com',
	projectId: 'wambagram',
	storageBucket: 'wambagram.appspot.com',
	messagingSenderId: '502274202717',
	appId: '1:502274202717:web:3b0d66638a78e782b301b4'
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);
		this.auth = app.auth();
		this.db = app.firestore();
		this.storage = app.storage();
		this.timestamp = app.firestore.FieldValue.serverTimestamp;
	}

	getDB() {
		return this.db;
	}

	getStorage() {
		return this.storage;
	}

	getTimestamp() {
		return this.timestamp;
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	logout() {
		return this.auth.signOut();
	}

	async register(email, password, name) {
		await this.auth.createUserWithEmailAndPassword(email, password);
		return this.auth.currentUser.updateProfile({ displayName: name });
	}

	isInitialized() {
		return new Promise((resolve) => {
			this.auth.onAuthStateChanged(resolve);
		});
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName;
	}
}

export default new Firebase();
