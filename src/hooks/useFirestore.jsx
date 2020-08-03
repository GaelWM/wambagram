import { useState, useEffect } from 'react';
import firebase from '../firebase/config';

const useFirestore = (collection) => {
	const [ docs, setDocs ] = useState([]);

	useEffect(
		() => {
			const unSub = firebase.getDB().collection(collection).orderBy('createdAt', 'desc').onSnapshot((snap) => {
				let documents = [];
				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
			});
			return () => unSub();
		},
		[ collection ]
	);
	return { docs };
};

export default useFirestore;
