import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
