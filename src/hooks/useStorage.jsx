import { useState, useEffect } from 'react';
import firebase from './../firebase/config';

const useStorage = (file) => {
	const [ progress, setProgress ] = useState(0);
	const [ url, setURL ] = useState(null);
	const [ error, setError ] = useState(null);

	useEffect(
		() => {
			//references
			const storageRef = firebase.getStorage().ref(file.name);
			const collectionRef = firebase.getDB().collection('images');
			storageRef.put(file).on(
				'state_changed',
				(snap) => {
					let percentage = snap.bytesTransferred / snap.totalBytes * 100;
					setProgress(percentage);
				},
				(err) => {
					setError(err);
				},
				async () => {
					const url = await storageRef.getDownloadURL();
					const createdAt = firebase.getTimestamp()();
					collectionRef.add({ url, createdAt });
					setURL(url);
				}
			);
		},
		[ file ]
	);
	return { progress, url, error };
};

export default useStorage;
