import React, { useState } from 'react';
import Header from '../comps/Header';
import UploadForm from '../comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import firebase from '../firebase/config';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
	const [ selectedImg, setSelectedImg ] = useState(null);

	// if (!firebase.getCurrentUsername()) {
	// 	//user not logged in
	// 	alert('Please Login');
	// 	props.history.replace('/auth/login');
	// 	return null;
	// }

	//console.log('firebase.getCurrentUsername(): ', firebase.getCurrentUsername());

	return (
		<div>
			<Header />
			{firebase.getCurrentUsername() && <UploadForm />}
			<ImageGrid setSelectedImg={setSelectedImg} />
			{selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
		</div>
	);
};

export default withRouter(Home);
